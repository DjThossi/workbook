var http = require('http');
var url = require('url');

function parseTime(response, parsedDate) {
    var json = {};
    json.hour = parsedDate.getHours();
    json.minute = parsedDate.getMinutes();
    json.second = parsedDate.getSeconds();

    response.write(JSON.stringify(json));
}

function unixTime(response, parsedDate) {
    var json = {
        unixtime: parsedDate.getTime()
    };

    response.write(JSON.stringify(json));
}

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    var parsedUrl = url.parse(request.url, true);
    var parsedDate = new Date(parsedUrl.query.iso);

    switch(parsedUrl.pathname) {
        case '/api/parsetime':
            parseTime(response, parsedDate);
            break;
        case '/api/unixtime':
            unixTime(response, parsedDate);
            break;
    }
    response.end();
});

server.listen(Number(process.argv[2]));
