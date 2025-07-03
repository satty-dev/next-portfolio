'use client';

import * as React from 'react';
import Link from 'next/link';

// MUI
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Stack,
    Box,
    Button,
    Tooltip,
    Drawer,
    List,
    ListItemText,
    useTheme,
    useMediaQuery,
    Divider,
    ListItemButton,
} from '@mui/material';

// MUI icons
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

// icons
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

// libs
import { useColorModeContext } from '@/libs/theme/ThemeRegistry';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/works', label: 'Works' },
    { href: '/practice/01', label: 'Practice' },
];

const snsLinks = [
    {
        label: 'Twitter',
        icon: <FaTwitter size={20} />,
        href: 'https://x.com/i_am_satty',
    },
    {
        label: 'LinkedIn',
        icon: <FaLinkedin size={20} />,
        href: 'https://www.linkedin.com/in/iamsatty/',
    },
    {
        label: 'GitHub',
        icon: <FaGithub size={20} />,
        href: 'https://github.com/satty-dev',
    },
];

export const Header = () => {
    const { toggleColorMode, selectedMode } = useColorModeContext();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar
                position='static'
                color='default'
                elevation={1}>
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        px: { xs: 2, sm: 4 },
                    }}>
                    {/* Logo */}
                    <Link
                        href='/'
                        passHref>
                        <Typography
                            variant='h6'
                            component='div'
                            sx={{
                                fontWeight: 'bold',
                                color: theme.palette.primary.main,
                                letterSpacing: 1.2,
                                textDecoration: 'none',
                                '&:hover': {
                                    opacity: 0.8,
                                },
                            }}>
                            Satty Portfolio
                        </Typography>
                    </Link>

                    {isMobile ? (
                        <IconButton
                            edge='end'
                            onClick={toggleDrawer(true)}
                            color='inherit'>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box
                            display='flex'
                            alignItems='center'
                            gap={4}>
                            {/* Navigation */}
                            <Stack
                                direction='row'
                                spacing={2}
                                component='nav'>
                                {navItems.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        passHref>
                                        <Button
                                            color='inherit'
                                            sx={{
                                                borderBottom:
                                                    '2px solid transparent', // 常に2pxぶんスペース確保し、ホバー時のカクツキを防止
                                                borderRadius: 0,
                                                '&:hover': {
                                                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                                                },
                                            }}>
                                            {label}
                                        </Button>
                                    </Link>
                                ))}
                            </Stack>

                            {/* Contact button */}
                            <Button
                                variant='outlined'
                                color='primary'
                                component='a'
                                href='/contact'
                                sx={{
                                    textTransform: 'none',
                                }}>
                                Contact
                            </Button>

                            {/* SNS Links */}
                            <Stack
                                direction='row'
                                spacing={1}>
                                {snsLinks.map(({ label, icon, href }) => (
                                    <Tooltip
                                        key={label}
                                        title={label}>
                                        <IconButton
                                            component='a'
                                            href={href}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            color='inherit'>
                                            {icon}
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </Stack>

                            {/* Theme Toggle */}
                            <Box
                                display='flex'
                                alignItems='center'
                                px={1}
                                py={0.5}
                                border={`1px solid ${theme.palette.divider}`}
                                borderRadius={2}
                                bgcolor={theme.palette.background.paper}
                                boxShadow={1}>
                                <Tooltip title='Light mode'>
                                    <IconButton
                                        color={
                                            selectedMode === 'light'
                                                ? 'primary'
                                                : 'default'
                                        }
                                        onClick={() => toggleColorMode('light')}
                                        size='small'>
                                        <LightModeIcon fontSize='small' />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title='Dark mode'>
                                    <IconButton
                                        color={
                                            selectedMode === 'dark'
                                                ? 'primary'
                                                : 'default'
                                        }
                                        onClick={() => toggleColorMode('dark')}
                                        size='small'>
                                        <DarkModeIcon fontSize='small' />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title='Follow system'>
                                    <IconButton
                                        color={
                                            selectedMode === 'device'
                                                ? 'primary'
                                                : 'default'
                                        }
                                        onClick={() =>
                                            toggleColorMode('device')
                                        }
                                        size='small'>
                                        <SettingsBrightnessIcon fontSize='small' />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* Drawer for mobile */}
            <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={toggleDrawer(false)}>
                <Box
                    width={250}
                    p={2}
                    role='presentation'
                    onClick={toggleDrawer(false)}>
                    <List>
                        {navItems.map(({ href, label }) => (
                            <ListItemButton
                                key={href}
                                component={Link}
                                href={href}>
                                <ListItemText primary={label} />
                            </ListItemButton>
                        ))}
                    </List>
                    <Button
                        variant='outlined'
                        color='primary'
                        fullWidth
                        component='a'
                        href='/contact'
                        sx={{ mb: 2 }}>
                        Contact
                    </Button>
                    <Divider sx={{ my: 1 }} />
                    <Stack
                        direction='row'
                        spacing={1}
                        justifyContent='center'>
                        {snsLinks.map(({ label, icon, href }) => (
                            <IconButton
                                key={label}
                                component='a'
                                href={href}
                                target='_blank'
                                rel='noopener noreferrer'
                                color='inherit'>
                                {icon}
                            </IconButton>
                        ))}
                    </Stack>
                    <Divider sx={{ my: 1 }} />
                    <Stack
                        direction='row'
                        spacing={1}
                        justifyContent='center'>
                        <IconButton
                            color={
                                selectedMode === 'light' ? 'primary' : 'default'
                            }
                            onClick={() => toggleColorMode('light')}>
                            <LightModeIcon />
                        </IconButton>
                        <IconButton
                            color={
                                selectedMode === 'dark' ? 'primary' : 'default'
                            }
                            onClick={() => toggleColorMode('dark')}>
                            <DarkModeIcon />
                        </IconButton>
                        <IconButton
                            color={
                                selectedMode === 'device'
                                    ? 'primary'
                                    : 'default'
                            }
                            onClick={() => toggleColorMode('device')}>
                            <SettingsBrightnessIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Drawer>
        </>
    );
};
