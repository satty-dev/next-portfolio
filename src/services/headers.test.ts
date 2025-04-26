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

    test('ホストヘッダーが存在する場合、fetchJsonを呼び出して正しくデータを返す', async () => {
        mockHeaders.set('host', 'localhost:3000');

        const mockData = { message: '成功' };
        (fetchJson as jest.Mock).mockResolvedValue(mockData);

        const result = await fetchApiFromServer<{ message: string }>('/home');

        expect(fetchJson).toHaveBeenCalledWith('localhost:3000', '/home');
        expect(result).toEqual(mockData);
    });

    test('ホストヘッダーが存在しない場合、エラーをスローする', async () => {
        mockHeaders.delete('host');

        await expect(fetchApiFromServer('/home')).rejects.toThrow(
            'Host header not found.',
        );
        expect(fetchJson).not.toHaveBeenCalled();
    });
});
