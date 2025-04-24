import { NextRequest, NextResponse } from 'next/server';

// data
import { works } from '@/data/works';

// idを基にworks詳細を取得
export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const id = url.pathname.split('/').pop();

    const work = works.find((w) => w.id === id);

    if (!work) {
        return NextResponse.json({ message: 'Not Found' }, { status: 404 });
    }

    return NextResponse.json(work);
}
