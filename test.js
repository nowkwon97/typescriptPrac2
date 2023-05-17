"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var fs_1 = require("fs");
var server = http_1.default.createServer(function (req, res) {
    if (req.method === 'GET') {
        if (req.url === '/') {
            console.log('method = GET, url = /');
            var html = fs_1.default.readFileSync('./test.html');
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        }
    }
    if (req.method === 'POST') {
        if (req.url === '/test') {
            console.log('method = POST, url = /test');
        }
    }
});
server.listen(3000, function () {
    console.log('3000port is opened');
});
