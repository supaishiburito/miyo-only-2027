# Miyo Only 2027

[English](./README.md) | 日本語

桜井ミヨのオンリーイベント「Miyo Only 2027」の非公式サイトです。Astro、TypeScript、Tailwind CSS を使って静的サイトを生成します。

## ローカルでの開発

Node.js 24 を使用します。プロジェクトのルートディレクトリで、次のコマンドを実行してください。

```sh
npm ci
npm run dev
```

## Cloudflare へのデプロイ

`main` ブランチに変更をプッシュするか、プルリクエストをマージすると、GitHub Actions がコードのチェックとビルドを実行します。Cloudflare 側で `main` ブランチの自動デプロイを有効にしている場合は、更新内容がサイトに反映されます。ビルドの出力先は `dist/` です。

## ディレクトリ構成

```text
.github/workflows/  GitHub Actions のワークフロー
public/images/      イベントのメインビジュアル、ロゴ、サークルカット
src/components/     ナビゲーション、チケット案内、FAQ などの共通部品
src/config/         イベント情報とナビゲーションの設定
src/data/           参加サークルの一覧と FAQ のデータ
src/layouts/        共通レイアウトとメタデータ
src/pages/          トップページ、各案内ページ、robots.txt
src/styles/         テーマと画面幅に応じたスタイル
src/utils/          コンテンツ、画像、URL を扱う関数
```
