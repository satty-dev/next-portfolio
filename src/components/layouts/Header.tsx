'use client';

import * as React from 'react';

// MUI
import { Box, Button, Paper, Stack } from '@mui/material';

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
                        variant={
                            selectedMode === 'light' ? 'contained' : 'outlined'
                        }
                        onClick={() => toggleColorMode('light')}>
                        ライト
                    </Button>
                    <Button
                        variant={
                            selectedMode === 'device' ? 'contained' : 'outlined'
                        }
                        onClick={() => toggleColorMode('device')}>
                        システム
                    </Button>
                    <Button
                        variant={
                            selectedMode === 'dark' ? 'contained' : 'outlined'
                        }
                        onClick={() => toggleColorMode('dark')}>
                        ダーク
                    </Button>
                </Stack>
            </Paper>
        </header>
    );
};
