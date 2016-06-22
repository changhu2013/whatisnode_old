var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('home', {
    title : 'what is node'
  });
});

module.exports = router;
