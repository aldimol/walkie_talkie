var http = require(http);
var fs = require(fs);
var port = 8080;

var server = http.createServer();

server.on('request', function(request, response){

  var newFile = fs.createWriteStream("readme_copy.md");
  var fileBytes = request.headers['content-length'];
  var uploadedBytes = 0;

  response.writeHead(200);
  request.pipe(newFile);

  request.on('data', function(chunk){
    uploadedBytes += chunk.length;
    var progress = (uploadedBytes / fileBytes) * 100;
    response.write("Progress: " + parseInt(progress, 10) + "%\n");
  });

  request.on('end', function(){
    request.end('Uploaded!');
  });
});

server.listen(port);
