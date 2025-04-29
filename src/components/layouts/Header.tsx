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
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

// libs
import { useColorModeContext } from '@/libs/theme/ThemeRegistry';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/works', label: 'Works' },
    { href: '/practice/01', label: 'Practice' },
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
                            MyPortfolio
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
                                                '&:hover': {
                                                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                                                    borderRadius: 0,
                                                },
                                            }}>
                                            {label}
                                        </Button>
                                    </Link>
                                ))}
                            </Stack>

                            {/* SNS Links */}
                            <Stack
                                direction='row'
                                spacing={1}>
                                <Tooltip title='Instagram'>
                                    <IconButton
                                        component='a'
                                        href='https://instagram.com/your_username'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        color='inherit'>
                                        <FaInstagram size={20} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title='LinkedIn'>
                                    <IconButton
                                        component='a'
                                        href='https://linkedin.com/in/your_username'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        color='inherit'>
                                        <FaLinkedin size={20} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title='GitHub'>
                                    <IconButton
                                        component='a'
                                        href='https://github.com/your_username'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        color='inherit'>
                                        <FaGithub size={20} />
                                    </IconButton>
                                </Tooltip>
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
                                <Tooltip title='ライトモード'>
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
                                <Tooltip title='ダークモード'>
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
                                <Tooltip title='システムに従う'>
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
                    <Divider sx={{ my: 1 }} />
                    <Stack
                        direction='row'
                        spacing={1}
                        justifyContent='center'>
                        <IconButton
                            component='a'
                            href='https://instagram.com/your_username'
                            target='_blank'
                            rel='noopener noreferrer'
                            color='inherit'>
                            <FaInstagram />
                        </IconButton>
                        <IconButton
                            component='a'
                            href='https://linkedin.com/in/your_username'
                            target='_blank'
                            rel='noopener noreferrer'
                            color='inherit'>
                            <FaLinkedin />
                        </IconButton>
                        <IconButton
                            component='a'
                            href='https://github.com/your_username'
                            target='_blank'
                            rel='noopener noreferrer'
                            color='inherit'>
                            <FaGithub />
                        </IconButton>
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
