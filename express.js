var express = require('express');
var app = express();
// 使用模型
app.use(require('./server/model/user'));

// 引入视图
app.use(require('./server/router/users'));


app.listen(3000, () => {
  console.log('启动了服务')
});