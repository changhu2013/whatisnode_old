var router = require('koa-router')({prefix : 'admin'});
var controller = require('../controllers/admin');

router.get('/', controller.index);
router.post('/create', controller.create);

module.exports = router;
