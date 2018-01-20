module.exports = {
  getAll: async (ctx, next) => {
    ctx.response.body = await new Promise((resolve, reject) => {
      ctx.models.User.find({}, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve({
            info: 'success',
            result
          })
        };
      })
    })
  },
  getByName: async (ctx, next) => {
    ctx.response.body = await new Promise((resolve, reject) => {
      ctx.models.User.find({name: ctx.params.name}, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  },
  getById: async (ctx, next) => {
    async (ctx, next) => {
      console.log(ctx.params.id)
      ctx.response.body = await new Promise((resolve, reject) => {
        ctx.models.User.get(ctx.params.id, (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
        })
      })
    }
  },
  addUser: async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = await new Promise((resolve, reject) => {
      ctx.models.User.create({
        name: ctx.request.body.name,
        password: ctx.request.body.password
      }, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    })
  },
  addObjectUser: async (ctx, next) => {
    const user = new ctx.models.User({
      name: ctx.request.body.name,
      password: ctx.request.body.password
    })
    ctx.body = await new Promise((resolve, reject) => {
      user.save((err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    })
  },
  editByName: async (ctx, next) => {
    const { name, new_name } = ctx.request.body;
    ctx.body = await new Promise((resolve, reject) => {
      // 可以通过下面这条语句查看全部的方法
      // console.log(ctx.models.User);
      ctx.models.User.one({name: name}, (err, result) => {
        if (err) {
          reject(err);
        } else {
          result.name = new_name;
          result.save((err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          })
        }
      })
    })
  }
}