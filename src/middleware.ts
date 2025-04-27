import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const fullUrl = url.toString();

    const response = NextResponse.next();
    response.headers.set('x-url', fullUrl);

    return response;
}

// 必要ならどのパスに適用するか指定もできる
export const config = {
    matcher: ['/', '/(.*)'], // 全ページに適用
};
