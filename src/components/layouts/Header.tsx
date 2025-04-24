'use client';

import * as React from 'react';
import Link from 'next/link';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Stack,
    Box,
    Button,
    Tooltip,
    useTheme,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import { useColorModeContext } from '@/libs/theme/ThemeRegistry';

export const Header = () => {
    const { toggleColorMode, selectedMode } = useColorModeContext();
    const theme = useTheme();

    return (
        <AppBar
            position='static'
            color='default'
            elevation={1}>
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                    px: { xs: 2, sm: 4 },
                }}>
                {/* Left: Logo + Nav */}
                <Box
                    display='flex'
                    alignItems='center'
                    gap={4}>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{
                            fontWeight: 'bold',
                            color: theme.palette.primary.main,
                            letterSpacing: 1.2,
                        }}>
                        MyPortfolio
                    </Typography>
                    <Stack
                        direction='row'
                        spacing={2}
                        component='nav'>
                        {[
                            { href: '/', label: 'Home' },
                            { href: '/about', label: 'About' },
                            { href: '/works', label: 'Works' },
                            { href: '/practice/01', label: 'Practice' },
                        ].map(({ href, label }) => (
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
                </Box>

                {/* Right: ColorMode + SNS */}
                <Stack
                    direction='row'
                    alignItems='center'
                    spacing={1}>
                    {/* SNS Links */}
                    <Stack
                        direction='row'
                        spacing={1}
                        ml={2}>
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
                                onClick={() => toggleColorMode('device')}
                                size='small'>
                                <SettingsBrightnessIcon fontSize='small' />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};
