const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  req.models.User.find({},function (err, users) {
    if (err) {
      res.send(err);
    }
    console.log(users);
    res.json(users)
  });
})
module.exports = router;