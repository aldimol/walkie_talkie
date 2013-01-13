var http = require('http'),
    port = 8080;

var server = http.createServer();

server.on('request', function(request, response){
  response.writeHead(200, {
    // 'Content-Length': body.Length,
    'Content-Type': 'text/plain' });
  response.write("Hello, this is dog");
  response.end();
});

server.listen(port);

console.log('Listening on port 8080...')