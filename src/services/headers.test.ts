import { fetchApiFromServer } from './headers';
import { fetchJson } from '@/services/fetcher';
import { headers } from 'next/headers';

// next/headersをモック
jest.mock('next/headers', () => ({
    headers: jest.fn(),
}));

jest.mock('@/services/fetcher', () => ({
    fetchJson: jest.fn(),
}));

describe('fetchApiFromServerのテスト', () => {
    const mockHeaders = new Map<string, string>();

    beforeEach(() => {
        jest.clearAllMocks();
        (headers as jest.Mock).mockImplementation(() => mockHeaders);
    });

    test('x-urlヘッダーが存在する場合、正しくAPI URLを組み立ててfetchJsonを呼び出す', async () => {
        mockHeaders.set('x-url', 'http://localhost:3000/sample');

        const mockData = { message: '成功' };
        (fetchJson as jest.Mock).mockResolvedValue(mockData);

        const result = await fetchApiFromServer<{ message: string }>('/home');

        expect(fetchJson).toHaveBeenCalledWith(
            'http://localhost:3000/api/home',
        );
        expect(result).toEqual(mockData);
    });

    test('x-urlヘッダーが存在しない場合、エラーをスローする', async () => {
        mockHeaders.delete('x-url');

        await expect(fetchApiFromServer('/home')).rejects.toThrow(
            'x-url header is missing.',
        );
        expect(fetchJson).not.toHaveBeenCalled();
    });
});
