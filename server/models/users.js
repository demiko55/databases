var db = require('../db');

module.exports = {
  getAll: function (callback) {
    const queryString = 'select * from users';
    db.connection.query(queryString, function(err, results, fields) {
      if (err) {
        console.log('err', err);
        throw 'query all users error';
      }
      callback(results);
    });

  },
  create: function (user, callback) {
    console.log('create user', user);

    // insert into

    const queryString = 'insert into users (username) values ("' + user.username + '")';
    db.connection.query(queryString, function(err, results, fields) {
      console.log('query user result', results);
      if (err) {
        console.log('err', err);
        throw 'create user error';
      }
      callback(results);
    });

  }
};
