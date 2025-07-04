import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // 動的ページ（/works/[id]）のデータをAPIから取得
    const worksRes = await fetch(
        'https://satty-portfolio.vercel.app/api/works',
        {
            // revalidate: 60, // 必要に応じてキャッシュ制御
            next: { revalidate: 60 },
        },
    );
    const works: { id: string; updatedAt?: string }[] = await worksRes.json();

    // サイトのベースURL
    const baseUrl = 'https://satty-portfolio.vercel.app';

    // 静的ページ
    const staticPages = ['', '/about', '/contact', '/practice/01', '/works'];

    // sitemap の配列を作成
    const staticRoutes = staticPages.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
    }));

    // 動的ページ
    const dynamicRoutes = works.map((work) => ({
        url: `${baseUrl}/works/${work.id}`,
        lastModified: work.updatedAt ? new Date(work.updatedAt) : new Date(),
    }));

    return [...staticRoutes, ...dynamicRoutes];
}
