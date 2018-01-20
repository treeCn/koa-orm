require("dotenv").config()
const bodyParser = require('koa-bodyparser');
const koa = require('koa');
const app = new koa();

// 使用koa-bodyparser中间件
app.use(bodyParser());
// 使用数据库模型
app.use(require('./server/model/user'));

// 引入视图
const home = require('./server/router/home')(app);


// 引入配置文件.env中的数据process.env.PORT(主要是require("dotenv").config())
app.listen(process.env.PORT, () => {
  console.log(`服务已经启动:localhost:${process.env.PORT}`);
})