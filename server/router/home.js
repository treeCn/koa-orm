const router = require('koa-router')();
const homeController = require('./../controllers/home');
module.exports = (app) => {
  // 查询全部数据
  router.get('/', homeController.getAll)
  // 根据字段name查询
  router.get('/:name', homeController.getByName)
  // 根据id查询
  router.get('/:id', homeController.getById)
  // 新增数据
  router.post('/user', homeController.addUser)
  // 使用对象的方式新增数据
  router.post('/object_user', homeController.addObjectUser)
  // 修改数据
  router.patch('/user', homeController.editByName)

  // 删除数据(会全部清空表,drop是会删除表)
  // router.delete('/:id', async (ctx, next) => {
  //   console.log('传递进来的id',ctx.params.id)
  //   ctx.body = await new Promise((resolve, reject) => {
  //     ctx.models.User.clear(ctx.params.id, (err, result) => {
  //       console.log('结果',err, result);
  //       if (err) {
  //         reject(err)
  //       } else {
  //         resolve(result)
  //       }
  //     })
  //   })
  // })
  app.use(router.routes()).use(router.allowedMethods())
}

/** 常见的方法
keys: [ 'id' ],
drop: [Function],
dropAsync: [Function: ret],
sync: [Function],
syncPromise: [Function: ret],
get: [Function],
getAsync: [Function: ret],
find: [Function],
findAsync: [Function: ret],
all: [Function],
where: [Function],
allAsync: [Function: ret],
whereAsync: [Function: ret],
one: [Function],
oneAsync: [Function: ret],
count: [Function],
countAsync: [Function: ret],
aggregate: [Function],
exists: [Function],
existsAsync: [Function: ret],
create: [Function],
createAsync: [Function: ret],
clear: [Function],
clearAsync: [Function: ret],
prependValidation: [Function],
addProperty: [Function],
beforeCreate: [Function],
afterCreate: [Function],
beforeSave: [Function],
afterSave: [Function],
beforeValidation: [Function],
beforeRemove: [Function],
afterRemove: [Function],
afterLoad: [Function],
afterAutoFetch: [Function],
hasOne: [Function],
hasMany: [Function],
extendsTo: [Function]
 */