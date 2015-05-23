var bl = require('bl');
var http = require('http');
var async = require('async');

async.parallel([
    function(callback) {
        collectData(process.argv[2], callback);
    },
    function(callback) {
        collectData(process.argv[3], callback);
    },
    function(callback) {
        collectData(process.argv[4], callback);
    }
], function (err, results) {
    for (var i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
});

function collectData(url, callback) {
    http.get(url, function(response) {
        response.pipe(bl(function (err, data) {
            var text = data.toString();
            callback(null, text);
        }))
    });
}
