import { NextRequest, NextResponse } from 'next/server';
import { TWork } from '@/types/index';

const works: TWork[] = [
    {
        id: '1',
        title: 'タイトル1',
        description: '実績の説明を簡潔にします。',
        image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
        link: '',
    },
    {
        id: '2',
        title: 'タイトル2',
        description: '実績の説明を簡潔にします。',
        image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
        link: '',
    },
    {
        id: '3',
        title: 'タイトル3',
        description: '実績の説明を簡潔にします。',
        image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
        link: '',
    },
    {
        id: '4',
        title: 'タイトル4',
        description: '実績の説明を簡潔にします。',
        image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
        link: '',
    },
    {
        id: '5',
        title: 'タイトル5',
        description: '実績の説明を簡潔にします。',
        image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
        link: '',
    },
];

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const id = url.pathname.split('/').pop();

    const work = works.find((w) => w.id === id);

    if (!work) {
        return NextResponse.json({ message: 'Not Found' }, { status: 404 });
    }

    return NextResponse.json(work);
}
