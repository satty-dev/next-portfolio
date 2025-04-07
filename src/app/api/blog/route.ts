import { NextResponse } from 'next/server';

interface TBlog {
    id: string;
    title: string;
    content: string;
}

const blogs: TBlog[] = [
    {
        id: '1',
        title: 'Next.js 13の新機能',
        content:
            'App Routerの導入により、より柔軟なルーティングが可能になりました。',
    },
    {
        id: '2',
        title: 'React Server Componentsとは',
        content:
            'サーバー側でレンダリングされるコンポーネントのメリットについて解説します。',
    },
    {
        id: '3',
        title: 'Tailwind CSSでスタイリング',
        content:
            'ユーティリティファーストのCSSフレームワーク、Tailwindの活用方法を紹介。',
    },
];

export async function GET() {
    return NextResponse.json(blogs);
}
