import type { Metadata } from 'next';
import './globals.css';

// MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

// libs
import { ThemeRegistry } from '@/libs/theme/ThemeRegistry';

export const metadata: Metadata = {
    title: 'Satty Portfolio',
    description:
        'Sattyのポートフォリオサイト。UI/UXデザイン、Webデザイン、グラフィック制作の実績をご紹介します。',
    keywords: ['デザイナー', 'ポートフォリオ', 'UI/UX', 'Webデザイン', 'Satty'],
    authors: [{ name: 'Satty' }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ja'>
            <body className={`antialiased`}>
                <AppRouterCacheProvider>
                    <ThemeRegistry>{children}</ThemeRegistry>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
