var http = require('http');
var fs = require('fs');

function serve(request,response){

    console.log(request.method,request.url);


    response.statusCode = 200;
    response.setHeader('Content-Type','text/html;charset=utf8');
    response.setHeader('name','zfpx');
    fs.readFile('index.html','utf8',function(err,data){
        response.write(data);
        response.end();
    });
   /* response.write(new Date().toString());
    response.end();*/

}

var server = http.createServer(serve);

server.listen(8080,'localhost');
