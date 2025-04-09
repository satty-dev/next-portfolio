import { NextResponse } from 'next/server';

// types
import { TWork } from '@/types/index';

const works: TWork[] = [
    {
        id: '1',
        title: 'タイトル1',
        description: '実績の説明を簡潔にします。',
        image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
    },
    {
        id: '2',
        title: 'タイトル2',
        description: '実績の説明を簡潔にします。',
        image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
    },
    {
        id: '3',
        title: 'タイトル3',
        description: '実績の説明を簡潔にします。',
        image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
    },
    {
        id: '4',
        title: 'タイトル4',
        description: '実績の説明を簡潔にします。',
        image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
    },
    {
        id: '5',
        title: 'タイトル5',
        description: '実績の説明を簡潔にします。',
        image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
    },
];

export async function GET() {
    return NextResponse.json(works);
}
