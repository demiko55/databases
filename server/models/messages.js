var db = require('../db');
// var Sequelize = require('sequelize');
// var dbs = new Sequelize('chat', 'root', '');

module.exports = {
  getAll: function (callback) {
    const queryString = 'select * from messages';
    db.connection.query(queryString, function(err, results, fields) {
      if (err) {
        console.log('err', err);
        throw 'query all messages error';
      }
      callback(results);
    });

  }, // a function which produces all the messages
  // create: function(message, callback) {
  //   var Message = dbs.define('Message', {
  //     username: Sequelize.STRING,
  //     text: Sequelize.STRING,
  //     roomname: Sequelize.STRING,
  //     messageId: Sequelize.STRING
  //   });
  //   Message.sync()
  //     .then(function() {
  //       return Mesasge.create({
  //         username: message.username,
  //         text: message.text,
  //         roomname: message.roomname,
  //         messageId: Date.now()
  //       });
  //     })
  //     .then(function(queryString) {
  //       db.connection.query(quesryString, function(err, results, fields) {
  //         if (err) {
  //           console.log('err', err);
  //           throw 'insert error';
  //         }
  //         callback(results);
  //       });
  //       db.close();
  //     });
  //}

  create: function (message, callback) {
    console.log('insert message', message);
    let messageId = Date.now();
    const queryString = 'insert into messages (username, roomname, text, message_id) values ("' + message.username + '", "' + message.roomname + '", "' + message.text + '", "' + messageId + '")';
    db.connection.query(queryString, function(err, results, fields) {
      if (err) {
        console.log('err', err);
        throw 'insert error';
      }
      callback(results);
    });
  } // a function which can be used to insert a message into the database
};
