import { headers } from 'next/headers';

// services
import { fetchJson } from '@/services/fetcher';

/**
 * サーバーコンポーネント内で、現在のリクエストヘッダーからホスト情報を取得し、
 * 指定されたAPIエンドポイントに対してデータフェッチを行う関数
 *
 * @param endpoint - APIのエンドポイント（例: '/home'）
 * @returns 指定型<T>のデータ
 * @throws ホスト情報が取得できなかった場合にエラーをスロー
 */
export const fetchApiFromServer = async <T>(endpoint: string): Promise<T> => {
    const headersList = await headers();
    const host = headersList.get('host');

    if (!host) {
        throw new Error('Host header not found.');
    }

    return fetchJson<T>(host, endpoint);
};
