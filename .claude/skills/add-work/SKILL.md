---
name: add-work
description: dataWorks.tsに新しい実績(work)エントリを対話的に追加するスキル
---

# スキル: 実績追加（add-work）

## 概要

`src/data/contents/dataWorks.ts` の `dataWorks` 配列に、新しい実績（work）エントリを対話的に追加するスキル。`/new-page`より狭い用途で、既存の`works`ルート自体には変更を加えない。

## 起動条件

- 「実績を追加して」「新しいworkを追加して」「ポートフォリオに1件追加したい」等の依頼
- 明示的な `/add-work` 呼び出し

## 前提

`TWork`型（`src/types/index.ts`）:
```ts
export interface TWork {
    id: string;
    title: string;
    summary: string;
    description: string;
    image: string;
    skills: string[];
    link: string;
}
```

## 手順

### 1. ヒアリング

ユーザーから以下を確認する:
- `title` — 実績のタイトル
- `summary` — 一覧表示用の短い要約（1文程度）
- `description` — 詳細ページ用の説明文
- `skills` — 使用技術・スキルの配列（例: `['Figma', 'Next.js', 'TypeScript']`）
- `link` — 参考リンク（なければ空文字 `''`）
- `image` — `public/images/works/` 配下の画像パス（例: `/images/works/{slug}.png`）。**画像ファイル自体の配置はユーザー側の作業**であることを伝え、まだ配置されていなければ後で配置するよう案内する

### 2. `dataWorks.ts` の編集

- 既存の `dataWorks` 配列内の（コメントアウトされているものも含めた）最大 `id` を確認し、`+1` した値を文字列として新しい `id` に採番する
- コメントアウトされている既存エントリ（バナー関連等）には一切触れない
- 配列の**末尾**に新しいオブジェクトを追記する。フィールドの並び順・インデント・クォートスタイルは既存エントリに合わせる

### 3. 確認

- `npm run typecheck` で型エラーがないか確認する

## 完了報告フォーマット

```
## 実績追加完了

- 追加したid: {id}
- title: {title}
- 画像パス: {image}（配置状況: 済み/未配置）

### 注意
- 画像が未配置の場合: public/images/works/ 配下に画像ファイルを配置してください
```

## 注意事項

- `dataWorks.ts` 内の既存の並び順やコメントアウト項目を無関係に変更・削除しない
- `link`が未定である場合、無理に埋めず空文字のままにする
