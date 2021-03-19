const http = require('http');
const port = 4000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain')
    res.end('你好')
})

server.listen(port, () => {
    console.log('开始了');
})