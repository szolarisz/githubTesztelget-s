const http = require('http');
const fs = require('fs');
//const url = require('url');

const port = 5555;

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);

    switch (true) {
        case req.url === "/" && req.method === "GET":
            fs.readFile("./views/index.html", (err, data) => {
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.writeHead(200);
                res.end(data);
            });
            break;
        case req.url === "/alap.css" && req.method === "GET":
            fs.readFile("./views/treat.css", (err, data) => {
                res.setHeader('Content-Type', 'text/css; charset=utf-8');
                res.writeHead(200);
                res.end(data);
            });
            break;
        default: //404-es hiba
            res.end("404-es hiba");
    }

});

server.listen(port);