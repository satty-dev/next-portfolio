'use client';

import React from 'react';
import { useState, useMemo, useContext, createContext } from 'react';

// MUI
import { PaletteMode, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

/**カラーモードの選択オプション */
export type ColorModeChoice = 'light' | 'dark' | 'device';

interface ColorModeContextType {
    /**選択中のカラーモード */
    selectedMode: ColorModeChoice;
    /**カラーモードを設定する関数 */
    toggleColorMode: (colorMode: ColorModeChoice) => void;
}

/**カラーモードのコンテキスト（初期値はundefined） */
const ColorModeContext = createContext<ColorModeContextType | undefined>(
    undefined,
);

/**MUIの設定プロバイダ */
export const ThemeRegistry = (props: { children: React.ReactNode }) => {
    const prefersInit = useMediaQuery('(prefers-color-scheme: dark)')
        ? 'dark'
        : 'light';

    // ユーザが選択しているカラーモード
    const [selectedMode, setSelectedMode] = useState<ColorModeChoice>('device');

    /** 実際に適用されるMUIのカラーモード */
    const mode = useMemo<PaletteMode>(
        () => (selectedMode !== 'device' ? selectedMode : prefersInit),
        [prefersInit, selectedMode],
    );

    // Contextで提供する値
    const colorMode = useMemo(
        () => ({
            selectedMode,
            toggleColorMode: (colorMode: ColorModeChoice) => {
                setSelectedMode(colorMode);
            },
        }),
        [selectedMode],
    );

    // テーマ作成
    const theme = useMemo(
        () =>
            createTheme({
                palette: { mode },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

/**ColorModeContextを簡単に使うためのカスタムフック */
export const useColorModeContext = (): ColorModeContextType => {
    const context = useContext(ColorModeContext);
    if (!context) {
        throw new Error(
            'useColorModeContext must be used within ThemeRegistry',
        );
    }
    return context;
};
