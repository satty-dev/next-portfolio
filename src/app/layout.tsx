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

// ベースURLを環境変数から取得
const baseUrl = process.env.BASE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
    title: 'Satty Portfolio',
    description:
        "Satty's portfolio site. Showcasing achievements in UI/UX design, web design, and graphic production.",
    keywords: ['UX Engineer', 'UI Engineer', 'Portfolio', 'UI/UX', 'Satty'],
    authors: [{ name: 'Satty' }],
    other: {
        'og:title': 'Satty Portfolio',
        'og:description':
            "Satty's portfolio site. Showcasing achievements in UI/UX design, web design, and graphic production.",
        'og:image': `${baseUrl}/images/home/main_visual.png`,
        'og:url': `${baseUrl}/`,
        'og:type': 'website',
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Satty Portfolio',
        'twitter:description':
            "Satty's portfolio site. Showcasing achievements in UI/UX design, web design, and graphic production.",
        'twitter:image': `${baseUrl}/images/home/main_visual.png`,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                {/* Google Search Console 用のサイト認証 */}
                <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />
            </head>
            <body className={`antialiased`}>
                <AppRouterCacheProvider>
                    <ThemeRegistry>{children}</ThemeRegistry>
                </AppRouterCacheProvider>
                <GoogleAnalytics />
            </body>
        </html>
    );
}
