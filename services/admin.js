var News = require('../models/news');

module.exports.create = function * (data){
   return yield News.create(data);
}

module.exports.getList = function * (){
  return yield News.getList();
};
