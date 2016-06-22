var config = require('../config')
var router = require('koa-router')(config.router || {})
var home = require('./home');
var users = require('./users');

router.use(home.routes());
router.use(users.routes());

module.exports = router