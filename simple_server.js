"use strict";

const port = process.argv[2];

// httpモジュールを呼び出す。HTTPの各種機能がまとまっている。
const http = require("http");


const server = http.createServer((request, response) => {
    // ヘッダ情報をレスポンスに書き出す(ステータスコード,ヘッダ情報)
    // レスポンスとして返送するコンテンツの種類を示している。クライアントに伝わる。
    response.writeHead(200, {
      "Content-Type": "text/html"
    });

    const responseMessage = "<h1>Hello Node.js!</h1>";
    // body部分になるコンテンツ
    response.write(responseMessage);
    // コンテンツの終了
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
});

// ポート番号を指定する。サーバーが待ち受け状態になる。
server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);