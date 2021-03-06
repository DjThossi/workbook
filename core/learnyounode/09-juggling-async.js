var bl = require('bl');
var http = require('http');
var async = require('async');

async.series([
    function(callback) {
        collectData(process.argv[2], callback);
    },
    function(callback) {
        collectData(process.argv[3], callback);
    },
    function(callback) {
        collectData(process.argv[4], callback);
    },
]);

function collectData(url, callback) {
    http.get(url, function(response) {
        response.pipe(bl(function (err, data) {
            var text = data.toString();
            console.log(text);
            callback(null, text);
        }))
    });
}
