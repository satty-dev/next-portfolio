import { NextResponse } from 'next/server';

// data
import { dataContact } from '@/data/contents/dataContact';

export async function GET() {
    return NextResponse.json(dataContact);
}
