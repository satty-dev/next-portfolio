'use client';

import { PaletteMode, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

/**カラーモードの選択オプション */
export type ColorModeChoice = 'light' | 'dark' | 'device';

interface ColorModeContextType {
    /**選択中のカラーモード */
    selectedMode: ColorModeChoice;
    /**カラーモードを設定する関数 */
    toggleColorMode: (colorMode: ColorModeChoice) => void;
}

/**カラーモードのコンテキスト */
const ColorModeContext = React.createContext<ColorModeContextType>({
    selectedMode: 'light', // 仮の設定
    toggleColorMode: (colorMode: ColorModeChoice) => {
        colorMode; // 仮の設定
    },
});

/**MUIの設定プロバイダ */
export const ThemeRegistry = (props: { children: React.ReactNode }) => {
    const prefersInit = useMediaQuery('(prefers-color-scheme: dark)')
        ? 'dark'
        : 'light';

    // ユーザが選択しているカラーモード
    const [selectedMode, setSelectedMode] =
        React.useState<ColorModeChoice>('light');

    /** 適用されるカラーモードの設定 */
    const mode = React.useMemo<PaletteMode>(
        () => (selectedMode !== 'device' ? selectedMode : prefersInit),
        [prefersInit, selectedMode],
    );

    // コンテキストの指定（他のコンポーネントでも呼び出して使えるように）
    const colorMode = React.useMemo(
        () => ({
            selectedMode,
            toggleColorMode: (colorMode: ColorModeChoice) => {
                setSelectedMode(colorMode);
            },
        }),
        [selectedMode],
    );

    // カスタムシーン
    const theme = React.useMemo(
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

/**ColorModeContextを簡単に使うためのユーティリティ関数 */
export const useColorModeContext = (): ColorModeContextType =>
    React.useContext(ColorModeContext);
