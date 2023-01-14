CREATE DATABASE chat;

USE chat;

/* Describe your table here.*/
CREATE TABLE messages(
  id INT not null AUTO_INCREMENT,
  message_id VARCHAR(50) not null,
  roomname VARCHAR(50) not null,
  username VARCHAR(50) not null,
  text VARCHAR(1000),
  PRIMARY key (id)
);

/* Create other tables and define schemas for them here! */
create table rooms(
  id INT not null AUTO_INCREMENT,
  roomname VARCHAR(50) not null,
  PRIMARY key (id)
);

create table friends (
  id INT not null AUTO_INCREMENT,
  username VARCHAR(50) not null,
  friendsname VARCHAR(50) not null,
  PRIMARY key (id)
);
create table users(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50)
)



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/