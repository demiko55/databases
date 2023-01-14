var mysql = require('mysql2');
// var Sequelize = require('sequelize');

// var orm = new Sequelize('chat', 'root', '');
// var User = orm.define('users', {
//   username: Sequelize.STRING
// });

// var Mesasge = osm.define('messages', {
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING,
//   username: Sequelize.STRING,
//   messageId: Sequelize.STRING
// });

// User.hasMany(Mesasge);
// Mesasge.belongsTo(User);

// User.sync();
// Mesasge.sync();

// exports.User = User;
// exports.Mesasge = Mesasge;

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

exports.connection = connection;