var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (error, list) {
    list.forEach(function (fileName) {
        if (path.extname(fileName) == '.' + process.argv[3]) {
            console.log(fileName);
        }
    });
});

