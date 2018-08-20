const http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {'content-Type':'text/plain'});
  response.end('This is running from a server, we installed nodemon.');
});
// Port number may need to be changed depending on computer
server.listen(3000);

console.log('The server is running on port 3000');
