import { NextResponse } from 'next/server';

// types
import { TAbout } from '@/types/index';

const about: TAbout = {
    main_message: 'Passion Fuels Purpose!',
    name: 'Yuma Nishimura',
    bio: 'モバイルアプリ開発者として、グローバルなリモートチームと協働しながらアプリを構築しています。',
    image: 'https://placehold.co/200x200?text=Profile', // 任意で画像を差し替えてください
    skills: [
        'Next.js',
        'TypeScript',
        'React Native',
        'Node.js',
        'MUI',
        'Figma',
    ],
};

export async function GET() {
    return NextResponse.json(about);
}
