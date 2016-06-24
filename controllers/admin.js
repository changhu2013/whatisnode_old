var co = require('co');
var service = require('../services/admin');

module.exports.create = function *(next){

  co(function *(){
    yield service.create({title : 'SSSSSS', url : 'www.whatisnode.com'});
  })(next);

  /*
  co(function *(){
    yield service.create({title : 'DDDDDDD', url : 'www.whatisnode.com'});
  })
  .then(function(result){
     console.log(result);
  }).catch(next);
  */
};

module.exports.index = function *(ctx, next) {

  var news = yield service.getList(ctx);

  yield this.render('admin', {
    title : '管理后台',
    news  : news
  });

};
