## 本プロジェクトについて

これは、ポートフォリオサイトである。Next.jsを主としてフロントエンド学中の一環として利用する。

サイト(https://satty-portfolio.vercel.app/)

## 環境

- typescript
- tailwindcss
  - [公式](https://tailwindcss.com/)
- App Router
  - [公式](https://nextjs.org/docs/app)
  - [仕組みとファイル構造](https://zenn.dev/blueish/articles/4b2ae3781ade57)
- Materiak UI
  - [公式](https://mui.com/material-ui/getting-started/)
  - [Icons](https://mui.com/material-ui/material-icons/)
- reactbits
  - [公式](https://www.reactbits.dev/)
- GitHub
  - [リポジトリ](https://github.com/satty-dev/next-portfolio)
- Google Analytics
- Prettier
```bash
# 以下のコマンドで実行（.prettierignoreで設定されたファイルは無視）
npx prettier . --write
```
- JEST
  - [公式](https://jestjs.io/ja/)
```bash
# 以下のコマンドでテスト実行（設定はjest.config.tsに記載）
npm run test
# 以下のコマンドでテストカバレッジ表示
npm run test:cov
```

## 実装参考サイト

- 2025.04.04 [Loading UI](https://zenn.dev/y_ta/articles/b1908ec6af6819)
- 2025.04.08 [ライト・ダークモード](https://qiita.com/KadoProG/items/15ceebf1aef774690bdf)
- 2025.05.27 [GA導入方法](https://webtech-media.jp/article/nextjs-14-app-router-google-analytics/)

## Practice01: Counter
Next.js学習のためにカウンター機能を実装（`/practice/01`）
- 1.0
  - カウントの増減機能（+1、-1）を実装
  - カウントに応じたメッセージ表示機能を追加
- 1.1
  - 単体テスト導入
- 2.0
  - タイトル編集機能を追加
  - メッセージ表示のオン/オフ切り替え機能を実装
