import { notFound } from 'next/navigation';

const WAIT_TIME: number = 500;

/**
 * 指定されたホスト・エンドポイントに対してHTTPリクエストを送り、JSONデータを取得する関数
 * /services/headersからの使用されるものであり、本関数の直接的な使用は非推奨
 *
 * @param host - リクエストを送信するホスト名（例: 'localhost:3000'）
 * @param endpoint - APIエンドポイントパス（例: '/home'）
 * @returns 指定型<T>のJSONデータ
 * @throws APIが404の場合はnotFound()を呼び出し、それ以外のエラーは一般エラーをスロー
 */
export const fetchJson = async <T>(
    host: string,
    endpoint: string,
): Promise<T> => {
    //ローディング画面がわかりやすくするために処理
    await new Promise((resolve) => setTimeout(resolve, WAIT_TIME));

    try {
        const protocol =
            process.env.NODE_ENV === 'production' ? 'https' : 'http';

        const response = await fetch(
            `${protocol}://${host}/api${endpoint}`,
            {},
        );

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data: T = await response.json();
        return data;
    } catch (error: unknown) {
        console.error(`Fetch error:`, error);

        if (!(error instanceof Error)) {
            throw new Error(`Unknown error occurred.`);
        }
        if (error.message.includes('API error: 404')) {
            notFound();
        } else {
            throw new Error(`Failed to fetch data.`);
        }
    }
};
