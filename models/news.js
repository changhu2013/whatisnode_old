var co = require('co');
var comongo = require('./comongo');

module.exports.create = function *(data){

  console.log(1, data);
  var db = yield comongo.get();
  console.log(2, data);

  var result = yield db.news.insert(data);

  //var dd = yield db.news.find().toArray();

  console.log(3);
  yield db.close();

  return result;
}


module.exports.getList = function * (){
  var db = yield comongo.get();
  var newsList = yield db.news.find().toArray();

  yield db.close();
  return newsList;
}

