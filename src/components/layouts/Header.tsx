'use client';

import * as React from 'react';

// MUI
import { Box, Button, Paper, Stack } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

// libs
import { useColorModeContext } from '@/libs/theme/ThemeRegistry';

export const Header = () => {
    const { toggleColorMode, selectedMode } = useColorModeContext();

    return (
        <header>
            <Paper
                component={Box}
                p={2}>
                <Stack spacing={1}>
                    <Button
                        startIcon={<LightModeIcon />}
                        variant={
                            selectedMode === 'light' ? 'contained' : 'outlined'
                        }
                        onClick={() => toggleColorMode('light')}>
                        ライト
                    </Button>
                    <Button
                        startIcon={<DarkModeIcon />}
                        variant={
                            selectedMode === 'dark' ? 'contained' : 'outlined'
                        }
                        onClick={() => toggleColorMode('dark')}>
                        ダーク
                    </Button>
                    <Button
                        startIcon={<SettingsBrightnessIcon />}
                        variant={
                            selectedMode === 'device' ? 'contained' : 'outlined'
                        }
                        onClick={() => toggleColorMode('device')}>
                        システム
                    </Button>
                </Stack>
            </Paper>
        </header>
    );
};
