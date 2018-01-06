var http = require('http');
var fs = require('fs');
var mime = require('mime');


function serve(request,response){
    var url=request.url;
    if(url=='/'){
        response.statusCode = 200;
        response.setHeader('Content-Type','text/html;charset=utf-8');

        fs.readFile('index.html','utf8',function(err,data){
            response.write(data);
            response.end();
        });
    }else {
        static(url,response);
    }


    function static(url,response){
        response.setHeader('Content-Type',mime.getType(url)+';charset=utf-8');
        fs.readFile(url.slice(1),'utf8',function(err,data){
            response.write(data);
            response.end();
        });
    }

    console.log(request.method,request.url);
}

var server = http.createServer(serve);

server.listen(8080,'localhost');
