import { NextResponse } from 'next/server';

// libs/data
import { works } from '@/libs/data/works';

// works一覧を取得
export async function GET() {
    return NextResponse.json(works);
}
