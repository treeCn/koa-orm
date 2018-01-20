const orm = require('orm');
const mysqlConfig = require('./../../config');
const user = orm.express(mysqlConfig, {
  define: function (db, models, next) {
    models.User = db.define("user", {
      id: Number,
      name: String,
      password: String,
    });
    next();
  }
})

module.exports = user;

// 下面是使用promise的方式(可以根据需要暴露出现)
orm.connectAsync(mysqlConfig).then((db) => {
  var User = db.define("user", {
    id: { type: 'serial', mapsTo: 'id', unique: true, size: 11 },
    name: { type: 'text', mapsTo: 'name' },
    password: { type: 'text', mapsTo: 'password' },
  });
}).catch(error => console.log(error));