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
import { GoogleAnalytics } from '@/libs/analytics/GoogleAnalytics';

export const metadata: Metadata = {
    title: 'Satty Portfolio',
    description:
        "Satty's portfolio site. Showcasing achievements in UI/UX design, web design, and graphic production.",
    keywords: ['Designer', 'Portfolio', 'UI/UX', 'Web Design', 'Satty'],
    authors: [{ name: 'Satty' }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`antialiased`}>
                <AppRouterCacheProvider>
                    <ThemeRegistry>{children}</ThemeRegistry>
                </AppRouterCacheProvider>
                <GoogleAnalytics />
            </body>
        </html>
    );
}
