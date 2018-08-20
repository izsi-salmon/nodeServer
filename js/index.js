const http = require('http');

var server = http.createServer(function(request, response){
  // console.log(request);
  var page;
  if(request.url === '/'){
    page = 'home';
  } else if(request.url === '/contact'){
    page = 'contact';
  } else if(request.url === '/about'){
    page = 'about';
  } else {
    page = '404 page not found';
  }

  response.writeHead(200, {'content-Type':'text/html'});
  response.end(`
      <html>
        <head>
          <title>Node Server</title>
        </head>
        <body>
          <h1 style="color:green">${page}</h1>
          <p>${request.url}</p>
          <p>${request.method}</p>
        </body>
      </html>
    `);
});
// Port number may need to be changed depending on computer
server.listen(3000);

console.log('The server is running on port 3000');
