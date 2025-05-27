import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

export const GoogleAnalytics = () => {
    const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
    if (!gaId) return null;
    return <NextGoogleAnalytics gaId={gaId} />;
};
