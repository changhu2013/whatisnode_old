var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'What is Node!'
  });
});

module.exports = router;
