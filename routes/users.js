var router = require('koa-router')({
	prefix : 'users'
});

router.get('/', function *(next) {
  this.body = 'this a users response!';
});

module.exports = router;
