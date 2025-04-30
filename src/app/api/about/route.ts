import { NextResponse } from 'next/server';

// data
import { dataAbout } from '@/data/dataAbout';

export async function GET() {
    return NextResponse.json(dataAbout);
}
