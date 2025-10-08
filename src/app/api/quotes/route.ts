import { NextResponse } from 'next/server';

// data
import { dataQuotes } from '@/data/contents/dataQuotes';

export async function GET() {
    return NextResponse.json(dataQuotes);
}
