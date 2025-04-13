import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
});

const config: Config = {
    // コードカバレッジ収集方法の指定
    coverageProvider: 'v8',
    // テスト環境の設定
    testEnvironment: 'jest-environment-jsdom',
    // エイリアスをJESTに認識させるためのマッピング（tsconfig.jsonのpathsに一致）
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
    },
    // モジュール解決で考慮する拡張子
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    // JESTがテストファイルと認識するパターン
    testMatch: [
        '**/__tests__/**/*.(spec|test).[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    // テストから除外するパス指定
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    // Next.jsのBabel設定に基づいて変換
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
};

export default createJestConfig(config);
