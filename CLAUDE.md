# CLAUDE.md

このファイルは、Claude Code がこのリポジトリで作業する際のガイドです。

## プロジェクト概要

Next.js学習を兼ねた個人開発のポートフォリオサイト。
- サイト: https://satty-portfolio.vercel.app/
- デプロイ: Vercel（Git連携、`vercel.json`なしのゼロコンフィグ）
- 詳細は [README.md](README.md) を参照

## 技術スタック

- **Next.js 15**（App Router） / **React 19** / **TypeScript**（`strict: true`）
- **スタイリング**: MUI (`@mui/material`, `sx` prop) + **Tailwind CSS v4**（`className`）の併用。CSS Modules・styled-componentsは不使用
- **アニメーション**: Framer Motion、reactbits.dev由来のコンポーネント（`src/components/reactbits/`）
- **テーマ**: `src/libs/theme/ThemeRegistry.tsx` でMUIテーマ・ダーク/ライト/デバイス依存の3状態切り替えを管理（Emotion SSR registry）
- **アナリティクス**: `@next/third-parties`（Google Analytics）
- **テスト**: Jest + React Testing Library
- **CMS/データ**: 外部CMSなし。コンテンツは `src/data/contents/` 配下のTypeScriptファイルに直書き
- **i18n**: 未導入。`<html lang='en'>` だがコメント・コミットメッセージは日本語、404ページ等の一部UI文言も日本語という混在が現状（意図的な放置）

## アーキテクチャ: Page → Contents → Template パイプライン

各ルートは以下の5点セットで構成される一貫したパターンを持つ（`works`ルートが最も明確な例）。新しいルートを追加する場合は必ずこのパターンに従うこと（`/new-page` スキル参照）。

1. `src/app/{route}/page.tsx` — ルートエントリ。default export。`Contents{Name}` を呼ぶだけの薄いラッパー
2. `src/components/contents/Contents{Name}.tsx` — asyncなサーバーコンポーネント。`services/headers.ts` の `fetchApiFromServer` 経由で内部APIルートからデータを取得し、`Template{Name}` に渡す
3. `src/components/templates/Template{Name}.tsx` — 純粋な表示コンポーネント。propsを受け取り描画するのみ
4. `src/data/contents/data{Name}.ts` — 型付きの静的データ（配列 or オブジェクト）
5. `src/app/api/{route}/route.ts` — `GET` ハンドラ。`data{Name}` を `NextResponse.json()` で返すだけ

データ → 内部APIルート → fetch、という間接構造は意図的な学習用パターン（README参照）。`src/middleware.ts` が全レスポンスに `x-url` ヘッダーを付与し、サーバーコンポーネントが `services/fetcher.ts` 経由で絶対URLをfetchできるようにしている。この`fetchJson`（`services/fetcher.ts`）を直接使わず、`services/headers.ts` の `fetchApiFromServer` を経由すること。

コンテンツの型（`THome`, `TAbout`, `TWork`, `TQuote`, `TContact`等）は `src/types/index.ts` に `interface` として集約されている。

## コーディング規約

- パスエイリアス: `@/*` → `src/*`
- コンポーネントは **named export**（`export const Foo = () => {}`）。`page.tsx` のみ `export default function`
- ファイル名はPascalCaseでコンポーネント名と一致させる
- Props型はコンポーネントごとに `{ComponentName}Props` という名前のinline `type`（`interface`ではない）
- スタイリングはMUIの `sx` prop を主体に、Tailwindクラスを `className` で併用可（`reactbits/` 配下はTailwindのみ）
- ESLint: `next/core-web-vitals` + `next/typescript`（flat config、`eslint.config.mjs`、カスタムルールなし）
- Prettier（`.prettierrc.json`）: シングルクォート、セミコロンあり、`tabWidth: 4`、`trailingComma: 'all'`、`singleAttributePerLine: true`、`prettier-plugin-tailwindcss` でTailwindクラスを自動ソート

## テスト

- Jest + Testing Library。テストファイルはソースと同じ階層に `*.test.ts(x)` として配置（例: `Counter.tsx` と `Counter.test.tsx`）
- `npm run test` / `npm run test:cov`
- `services/` や `hooks` 相当のロジックを追加・変更した場合は対応するテストも追加/更新する

## コミットメッセージ規約

- 日本語、`【エリア名】説明` 形式（例: `【Works】86 Girl`, `【API】routingとdataの分解`）
- Conventional Commits（`feat:`, `fix:` 等）は使用しない
- `others` ブランチで作業し、PR経由で `main` にマージする運用

## よく使うコマンド

```bash
npm run dev          # 開発サーバー起動（Turbopack）
npm run build        # 本番ビルド
npm run start         # 本番起動
npm run lint          # ESLint
npm run test          # Jestテスト実行
npm run test:cov      # カバレッジ付きテスト
npm run format        # Prettierで全ファイルを自動整形
npm run format:check  # Prettierのフォーマット崩れをチェック（書き込みしない）
npm run typecheck     # tsc --noEmit で型チェックのみ実行
```

pushやPR作成前は `/verify` スキルでまとめてチェックすること（後述）。

## 注意点

- **CI未設定**: `.github/workflows` は存在しない。push前に `npm run lint` / `npm run typecheck` / `npm run test` / `npm run format:check`（または `/verify` スキル）を手元で実行すること
- **意図的に残っている実装**: `src/components/materials/MediaCaed.tsx` は `Card` のtypoだが既知の状態。指示なく無関係にリネーム/修正しない。`src/data/contents/dataWorks.ts` 内にコメントアウトされたエントリ（バナー関連等）があるが、これは一時的な非表示切り替えのためのものであり、指示なく削除しない
- **学習用の意図的な回り道**: データを直接importせず内部APIルート経由でfetchする構造や、`services/fetcher.ts` の意図的な500msウェイト（ローディングUIを分かりやすくするため）は、パフォーマンス上の問題ではなく学習目的の実装なので「直す」提案をしない

## 関連Skill

- `/new-page` — 新規ルートを上記のPage→Contents→Templateパイプラインに沿って一括生成
- `/add-work` — `dataWorks.ts` に新しい実績エントリを対話的に追加
- `/verify` — push/PR前のlint・typecheck・test・formatチェックを一括実行
