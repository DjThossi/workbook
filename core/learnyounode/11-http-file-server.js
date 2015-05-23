var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var fileLocation = process.argv[3];

var server = http.createServer(function (request, response) {
    var readStream = fs.createReadStream(fileLocation);
    readStream.on('data', function(chunk) {
        response.write(chunk);
    });

    readStream.on('end', function () {
        response.end();
    });
});

server.listen(port);
