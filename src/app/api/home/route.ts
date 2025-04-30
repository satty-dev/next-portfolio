import { NextResponse } from 'next/server';

// data
import { dataHome } from '@/data/contents/dataHome';

export async function GET() {
    return NextResponse.json(dataHome);
}
