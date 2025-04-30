import { NextResponse } from 'next/server';

// data
import { dataHome } from '@/data/dataHome';

export async function GET() {
    return NextResponse.json(dataHome);
}
