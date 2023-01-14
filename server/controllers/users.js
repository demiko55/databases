var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('get user request content', req.body);
    models.users.getAll(function(data) {
      res.json(data);
    });

  },
  post: function (req, res) {
    console.log('post user request content', req.body);
    models.users.create(req.body, function() {
      res.json(req.body);
    });

  }
};
