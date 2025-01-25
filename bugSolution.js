const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task asynchronously using process.nextTick
  let count = 0;
  function processNextChunk() {
    for (let i = 0; i < 10000000; i++) {
      count += i;
    }
    if(count < 1000000000){
      process.nextTick(processNextChunk);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
    }
  }
  processNextChunk();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});