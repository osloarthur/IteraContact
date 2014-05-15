var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/TopList',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
       db: 'mongodb://stian:toplist@ds045618.mongolab.com:45618/toplist',
       rootPath: rootPath,
       port: process.env.PORT || 80

    }
}