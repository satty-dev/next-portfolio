import { fetchJson } from './fetcher';
import { notFound } from 'next/navigation';

// next/navigationをモック
jest.mock('next/navigation', () => ({
    notFound: jest.fn(),
}));

describe('fetchJsonのテスト', () => {
    const originalEnv = process.env;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.useFakeTimers();
        global.fetch = jest.fn();
        process.env = { ...originalEnv };
    });

    afterEach(() => {
        jest.useRealTimers();
        process.env = originalEnv;
    });

    test('正常にレスポンスを取得できる場合、データを返す', async () => {
        const mockResponse = { message: 'OK' };
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: async () => mockResponse,
        });

        const promise = fetchJson<{ message: string }>(
            'localhost:3000',
            '/home',
        );
        jest.runAllTimers(); // setTimeoutを早送り

        const result = await promise;

        expect(global.fetch).toHaveBeenCalledWith(
            'http://localhost:3000/api/home',
            {},
        );
        expect(result).toEqual(mockResponse);
    });

    test('APIエラー(404)の場合、notFoundを呼び出す', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            status: 404,
            json: async () => ({}),
        });

        const promise = fetchJson('localhost:3000', '/notfound');
        jest.runAllTimers();

        await promise; // awaitしてもエラーは発生しない仕様

        expect(notFound).toHaveBeenCalled();
    });

    test('APIエラー(500)の場合、一般エラーをスローする', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            status: 500,
            json: async () => ({}),
        });

        const promise = fetchJson('localhost:3000', '/server-error');
        jest.runAllTimers();

        await expect(promise).rejects.toThrow('Failed to fetch data.');
        expect(notFound).not.toHaveBeenCalled();
    });
});
