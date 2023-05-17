import http from 'http';
import fs from 'fs';

const server = http.createServer((req,res)=> {
  if(req.method === 'GET') {
    if(req.url === '/') {
      console.log('method = GET, url = /');
      const html = fs.readFileSync('./test.html');
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    }
  }
  if(req.method === 'POST') {
    if(req.url === '/test') {
      console.log('method = POST, url = /test');
    }
  }
})

server.listen(3000, () => {
  console.log('3000port is opened');
})