var filter = require('./filter.js');

filter(process.argv[2], process.argv[3], function(error, list) {
    if (error) {
        return console.error('There was an error:', error);
    }

    list.forEach(function (entry) {
        console.log(entry);
    });
});