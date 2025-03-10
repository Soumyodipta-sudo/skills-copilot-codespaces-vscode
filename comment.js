// Create web server
// http://localhost:3000

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    console.log('Requested URL: ' + request.url);
    if(request.url === '/'){
        fs.readFile('comment.html', function(error, data){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    } else if(request.url === '/favicon.ico'){
        fs.readFile('favicon.ico', function(error, data){
            response.writeHead(200, {'Content-Type': 'image/x-icon'});
            response.end(data);
        });
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('404 Page Not Found');
    }
});

server.listen(3000, function(){
    console.log('Server is running...');
});

