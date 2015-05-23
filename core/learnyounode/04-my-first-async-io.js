var file = process.argv[2];
var fs = require('fs');
var buffer = fs.readFile(file, function (arr, fileContent) {
    console.log(fileContent.toString().split('\n').length - 1);
});

