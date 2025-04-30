import { NextResponse } from 'next/server';

// data
import { dataWorks } from '@/data/contents/dataWorks';

// works一覧を取得
export async function GET() {
    return NextResponse.json(dataWorks);
}
