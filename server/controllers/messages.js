var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('get request content', req.body);
    models.messages.getAll(function(data) {
      res.json(data);
    });

    // Mesasge.findAll()
    //   .complete(function(err, results) {
    //     res.json(results);
    //   });
  }, // a function which handles a get request for all messages

  //display in the server log, the body in the requset.
  // body: {
  //   username: 'test1',
  //   text: "It's raining outside.",
  //   roomname: 'roomname1'
  // },
  post: function (req, res) {
    console.log('post request content', req.body);
    models.messages.create(req.body, function() {
      res.json(req.body);
      //res.send('success');
    });

    // var params = {
    //   text: req.body[text],
    //   roomname: req.body[roomname],
    //   username: req.body[username],
    //   'message_id': Date.now()
    // };
    // Mesasge.create(params)
    //   .complete(function(err, results) {
    //     res.json(params);
    //   });
  } // a function which handles posting a message to the database
};
