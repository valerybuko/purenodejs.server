const http = require('http');
const url = require('url');

const PORT = 3000;

function handler(req, res) {

    const parseUrl = url.parse(req.url, true);

    if(parseUrl.pathname === '/') {
        res.writeHead(200, {'Content-type':'text-plain'});
        res.write('Webserver has been created');
        res.end();
    } else {
        res.writeHead(404, {'Content-type':'text-plain'});
        res.end();
    }

    
}

const server = http.createServer(handler);

server.listen(PORT);