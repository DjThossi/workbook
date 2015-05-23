var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket) {
    var date = new Date();
    var dateString = date.getFullYear()  + '-';

    if (date.getMonth() < 10) {
        dateString += '0';
    }
    dateString += (date.getMonth() + 1) + '-';

    if (date.getDate < 10) {
        dateString += 0;
    }
    dateString += date.getDate() + ' ';

    if (date.getHours() < 10) {
        dateString += 0;
    }
    dateString += date.getHours() + ':';

    if (date.getMinutes() < 10) {
        dateString += 0;
    }
    dateString += date.getMinutes();


    socket.write(dateString);
    socket.end('\n');
});

server.listen(port);
