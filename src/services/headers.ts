import { headers } from 'next/headers';

// services
import { fetchJson } from '@/services/fetcher';

/**
 * サーバーコンポーネント内で、現在のリクエストヘッダーからURL情報を取得し、
 * 指定されたAPIエンドポイントに対してデータフェッチを行う関数
 *
 * @param endpoint - APIのエンドポイント（例: '/home'）
 * @returns 指定型<T>のデータ
 */
export const fetchApiFromServer = async <T>(endpoint: string): Promise<T> => {
    const headersList = await headers();

    // x-url：middleware.tsで設定。現在のURLを取得する。
    const currentUrl = headersList.get('x-url');
    if (!currentUrl) {
        throw new Error('x-url header is missing.');
    }

    const baseUrl = new URL(currentUrl).origin;
    const apiUrl = `${baseUrl}/api${endpoint}`;

    return fetchJson<T>(apiUrl);
};
