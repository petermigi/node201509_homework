var http = require('http');
var fs = require('fs');
var mime = require('mime');
var url = require('url');


function serve(request,response){
    var urlObj = url.parse(request.url,true);
    console.log(urlObj.query.name);
    var pathname = urlObj.pathname;

    if(pathname =='/'){
        response.statusCode = 200;
        response.setHeader('Content-Type','text/html;charset=utf-8');

        fs.readFile('index.html','utf8',function(err,data){
            response.write(data);
            response.end();
        });
    }else {
        static(pathname,response);
    }


    function static(pathname,response){
        response.setHeader('Content-Type',mime.getType(pathname)+';charset=utf-8');
        fs.readFile(pathname.slice(1),'utf8',function(err,data){
            response.write(data);
            response.end();
        });
    }

    console.log(request.method,request.url);
}

var server = http.createServer(serve);

server.listen(8080,'localhost');
