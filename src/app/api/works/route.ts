import { NextResponse } from 'next/server';

// data
import { works } from '@/data/works';

// works一覧を取得
export async function GET() {
    return NextResponse.json(works);
}
