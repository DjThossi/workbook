module.exports = function (filePath, extension, callback) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(filePath, function (error, list) {
        if (error) {
            return callback(error);
        }

        var filtered = list.filter(function (fileName) {
            return (path.extname(fileName) === '.' + extension);
        });

        callback(null, filtered);
    });
};