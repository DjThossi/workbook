var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(response) {
    response.pipe(bl(function (err, data) {
        var text = data.toString();

        console.log(text.length);
        console.log(text);
    }))
});
