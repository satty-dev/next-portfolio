import { NextResponse } from 'next/server';

// data
import { dataQuotes } from '@/data/contents/dataQuotes';

export async function GET() {
    // ランダムなインデックスを生成
    const randomIndex = Math.floor(Math.random() * dataQuotes.length);
    const randomQuote = dataQuotes[randomIndex];
    
    return NextResponse.json(randomQuote);
}