import { notFound } from 'next/navigation';

const WAIT_TIME: number = 500;

/**
 * 指定されたAPIのURLに対してHTTPリクエストを送り、JSONデータを取得する関数
 * /services/headersからの使用されるものであり、本関数の直接的な使用は非推奨
 *
 * @param aptUrl - APIのURL（例: 'http://localhost:3000/home'）
 * @returns 指定型<T>のJSONデータ
 * @throws APIが404の場合はnotFound()を呼び出し、それ以外のエラーは一般エラーをスロー
 */
export const fetchJson = async <T>(aprUrl: string): Promise<T> => {
    //ローディング画面がわかりやすくするために処理
    await new Promise((resolve) => setTimeout(resolve, WAIT_TIME));

    try {
        const response = await fetch(aprUrl, {});

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
