var http = require('http');

function serve(request,response){
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);

    response.statusCode = 404;
    response.setHeader('Content-Type','text/html;charset=utf8');
    response.setHeader('name','zfpx');
    response.write(new Date().toString());
    response.end();

}

var server = http.createServer(serve);

server.listen(8080,'localhost');
