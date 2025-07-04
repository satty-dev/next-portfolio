import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // サイトのベースURLを環境変数から取得
    const baseUrl = process.env.BASE_URL ?? 'http://localhost:3000';

    // 動的ページ（/works/[id]）のデータをAPIから取得
    const worksRes = await fetch(`${baseUrl}/api/works`, {
        next: { revalidate: 60 },
    });
    const works: { id: string; updatedAt?: string }[] = await worksRes.json();

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
