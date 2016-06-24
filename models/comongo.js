var comongo = require('co-mongo');
var config  = require('../config');

comongo.configure({
    host: config.db.host,
    port: config.db.port,
    name: config.db.database,
    pool: config.db.pool,
    collections: ['news']
});

module.exports = comongo;