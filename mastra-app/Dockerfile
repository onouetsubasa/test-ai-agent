# Node.jsの公式イメージをベースとして使用
FROM node:22-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm init -y && npm install

# ソースコードをコピー
COPY . .

# アプリケーションのポートを公開（必要に応じて変更）
EXPOSE 4111