const db = require("../models");
const ObjectId = require('mongodb').ObjectID;

module.exports = {
  findUser: function(req, res) {
    const userId = req.params.id

    db.User.findOne( {_id: ObjectId(userId)} )
    .then(userInfo => {

      res.json(userInfo);
    })
  }
}