var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var fileLocation = process.argv[3];

var server = http.createServer(function (request, response) {
    var readStream = fs.createReadStream(fileLocation);
    var text = [];
    readStream.on('data', function(chunk) {
        text.push(chunk);
    });

    readStream.on('end', function () {
        text = Buffer.concat(text);
        response.end(text);
    });
});

server.listen(port);
