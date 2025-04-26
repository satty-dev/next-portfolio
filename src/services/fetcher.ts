import { notFound } from 'next/navigation';

const API_BASE_URL: string = 'http://localhost:3000/api/';
const WAIT_TIME: number = 500;

export const fetchJson = async <T>(endpoint: string): Promise<T> => {
    //ローディング画面がわかりやすくするために処理
    await new Promise((resolve) => setTimeout(resolve, WAIT_TIME));

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {});

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data: T = await response.json();
        return data;
    } catch (error: any) {
        console.error(`Fetch error:`, error);

        if (error.message.includes('API error: 404')) {
            notFound();
        } else {
            throw new Error(`Failed to fetch data.`);
        }
    }
};
