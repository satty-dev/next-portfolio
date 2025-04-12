import { NextResponse } from 'next/server';

// types
import { THome } from '@/types/index';

const home: THome = {
    title: 'My Portfolio',
    main_message: 'I can do it',
    sub_message:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    main_image:
        'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
    link: '',
    rotating_message: {
        fixed_text: 'Creative',
        rotating_text_arry: [
            'coding',
            'design',
            'UI/UX',
            'visual',
            'thinking',
            'management',
        ],
    },
};

export async function GET() {
    return NextResponse.json(home);
}
