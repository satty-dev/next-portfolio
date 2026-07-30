---
name: new-page
description: 新しいNext.jsルートをPage→Contents→Template→dataの既存パターンに沿って一括生成するスキル
---

# スキル: 新規ページ追加（new-page）

## 概要

このリポジトリの各ルート（`about`, `works`, `quotes`等）は、以下の5点セットからなる一貫したパターンで実装されている。

```
page.tsx → Contents{Name}.tsx（データ取得） → Template{Name}.tsx（表示） → data{Name}.ts（データ） → api/{route}/route.ts（API）
```

このスキルは、新しいルートを追加する際にこのパターンに厳密に沿って5つのファイル（＋型定義）を一括生成する。

## 起動条件

- 「新しいページを追加して」「〇〇ページを作って」「新しいルートを追加したい」等の依頼
- 明示的な `/new-page` 呼び出し

## 手順

### 1. ヒアリング

最初に以下を確認する（未指定なら質問する）:
- **ルート名（英語スラッグ、kebab-caseまたは単語、例: `blog`）** → URLパス・フォルダ名・API名になる
- **表示名（PascalCase、例: `Blog`）** → コンポーネント名・型名になる（ルート名から自動導出できる場合は確認のみでよい）
- **データ項目（フィールド一覧）** → `T{Name}` 型・ダミーデータの形を決める。`works`（配列: `id/title/summary/description/image/skills/link`）と`about`（単一オブジェクト）のどちらに近いか確認する
- **一覧+詳細（`works`のような`[id]`動的ルート）が必要か、単一ページ（`about`のような）か**

### 2. ファイル生成

以下を [CLAUDE.md](../../../CLAUDE.md) のコーディング規約（named export、Props型のinline type命名、パスエイリアス`@/*`等）に厳密に従って生成する。`works`/`about`の実装を参照テンプレートとする。

#### 2-1. `src/types/index.ts` に型を追記

```ts
export interface T{Name} {
    // ヒアリングしたフィールドをここに定義
}
```

#### 2-2. `src/data/contents/data{Name}.ts`

```ts
// types
import { T{Name} } from '@/types/index';

export const data{Name}: T{Name}[] = [
    // ダミーデータ（既存のdataWorks.ts等を参考に、実際に使えるサンプルを1〜3件入れる）
];
```

#### 2-3. `src/app/api/{route}/route.ts`

単一オブジェクトの場合（`about`パターン）:
```ts
import { NextResponse } from 'next/server';

// data
import { data{Name} } from '@/data/contents/data{Name}';

export async function GET() {
    return NextResponse.json(data{Name});
}
```

一覧の場合（`works`パターン）は配列をそのまま返す。詳細取得（`works/[id]`パターン）が必要な場合は `src/app/api/works/[id]/route.ts` を参考に `src/app/api/{route}/[id]/route.ts` を追加する。

#### 2-4. `src/components/contents/Contents{Name}.tsx`

```tsx
// components
import { Template{Name} } from '@/components/templates/Template{Name}';

// types
import { T{Name} } from '@/types/index';

// services
import { fetchApiFromServer } from '@/services/headers';

export const Contents{Name} = async () => {
    const {name}Data = await fetchApiFromServer<T{Name}>(`/{route}`);
    return <Template{Name} {name}={ {name}Data } />;
};
```

具体例（ルート名`blog`、表示名`Blog`の場合）:
```tsx
export const ContentsBlog = async () => {
    const blogData = await fetchApiFromServer<TBlog>(`/blog`);
    return <TemplateBlog blog={blogData} />;
};
```

（配列を返す一覧ページの場合は `fetchApiFromServer<T{Name}[]>` とする）

#### 2-5. `src/components/templates/Template{Name}.tsx`

```tsx
// components
import { Template } from '@/components/layouts/Template';

// types
import { T{Name} } from '@/types/index';

type Template{Name}Props = {
    {name}: T{Name};
};

export const Template{Name} = ({ {name} }: Template{Name}Props) => {
    return (
        <Template>
            {/* MUIのsx propを主体に、必要に応じてTailwindのclassNameを併用して表示を実装 */}
        </Template>
    );
};
```

#### 2-6. `src/app/{route}/page.tsx`

```tsx
// components
import { Contents{Name} } from '@/components/contents/Contents{Name}';

export default async function {Name}Page() {
    return <Contents{Name} />;
}
```

動的ルート（`[id]`）の場合は `src/app/works/[id]/page.tsx` を参考に `Props`型（`src/types/index.ts`の`Props`）と`paramsId`の受け渡しを実装する。

### 3. 生成後の確認

- ESLint/TypeScriptエラーがないか `npm run lint` と `npm run typecheck` で確認する
- ナビゲーション（`src/components/layouts/Header.tsx`等）にリンクを追加するかどうかユーザーに確認する

## 完了報告フォーマット

```
## 新規ページ追加完了: {route}

生成したファイル:
- src/types/index.ts（T{Name}追記）
- src/data/contents/data{Name}.ts
- src/app/api/{route}/route.ts
- src/components/contents/Contents{Name}.tsx
- src/components/templates/Template{Name}.tsx
- src/app/{route}/page.tsx

### 次にユーザー側で対応が必要なこと
- ダミーデータを実際のコンテンツに差し替える
- 画像等の静的アセットを public/ 配下に配置する（必要な場合）
- ナビゲーション（Header等）にリンクを追加するかどうかの判断
```

## 注意事項

- `page.tsx` のみ `export default`、それ以外は必ず named export
- Props型は `{ComponentName}Props` というinline `type`（`interface`ではない）
- `services/fetcher.ts` の `fetchJson` を直接使わず、必ず `services/headers.ts` の `fetchApiFromServer` を経由する
- 生成するダミーデータは学習用サンプルとして分かりやすい内容にする（意味のないプレースホルダー文字列だけにしない）
