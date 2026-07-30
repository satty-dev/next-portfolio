---
name: verify
description: push/PR前にlint・typecheck・test・formatチェックを一括実行し結果をまとめるスキル
---

# スキル: push前チェック（verify）

## 概要

このリポジトリには CI（`.github/workflows`）が存在しない。push や PR 作成の前に、ローカルで代替のチェックを一括実行し、結果をまとめて報告するスキル。

## 起動条件

- 「pushする前に確認して」「チェックして」「マージしても大丈夫か確認して」等の依頼
- 明示的な `/verify` 呼び出し

## 手順

以下を**この順番**で実行する（前のステップが失敗しても後続は実行し、最後にまとめて報告する）:

1. `npm run lint` — ESLint（`next/core-web-vitals` + `next/typescript`）
2. `npm run typecheck` — `tsc --noEmit` による型チェック
3. `npm run test` — Jestテスト
4. `npm run format:check` — Prettierのフォーマット崩れチェック（書き込みは行わない）

各コマンドの標準出力・標準エラーから、成功/失敗と失敗時の該当箇所（ファイル:行番号）を可能な範囲で抽出する。

## 完了報告フォーマット

```
## push前チェック結果

| チェック | 結果 |
|---------|------|
| lint (npm run lint) | ✅ / ❌ |
| typecheck (npm run typecheck) | ✅ / ❌ |
| test (npm run test) | ✅ / ❌ |
| format:check (npm run format:check) | ✅ / ❌ |

### 失敗した項目の詳細
（❌があれば、エラー内容とファイル:行番号を記載。全て✅なら「なし」）
```

- 全て成功した場合: 「push/PR作成して問題ありません」という趣旨のメッセージで締める
- `format:check`のみ失敗した場合: `npm run format` を実行すればフォーマット崩れを自動修正できる旨を案内する。ただし**自動では実行せず**、ユーザーに実行してよいか確認してから行う
- lint/typecheck/testのいずれかが失敗した場合: 該当ファイルの修正が必要である旨を伝え、修正方針をユーザーと相談する（無断で修正を開始しない）

## 注意事項

- このスキルはチェックの実行と報告のみを行う。検出した問題の修正は、ユーザーの指示を受けてから着手する
- `npm run build` は時間がかかるため、明示的に依頼された場合のみ追加で実行する（デフォルトの4項目には含めない）
