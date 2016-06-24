var config = require('../config')
var router = require('koa-router')(config.router || {})
var home = require('./home');
var admin = require('./admin');

router.use(home.routes());
router.use(admin.routes());

module.exports = router