'use strict';

var fs = require('fs');
var path = require('path');
var uuid = require('uuid');

var dataFile = path.join(__dirname, '../data/users.json');

exports.findAll = function(cb) {
  fs.readFile(dataFile, (err, data) => {
    if(err){
      cb(err);
      return;
    }
    try {
      var users = JSON.parse(data);
    } catch(err) {
      return cb(err);
    }
    cb(null, users);
  });
};

exports.postMessage = function(message, cb) {
  if(!message.message || !message.name){
    return cb('Require all input fields to post.');
  }
  this.findAll((err, users) => {
    if(err){
      return cb(err);
    }

    var newMessage = {
      name: message.name,
      message: message.message,
      id: uuid()
    };

    users.push(newMessage);
    fs.writeFile(dataFile, JSON.stringify(users), (err, users) => {
      cb(err, users);
    });
  });
};



exports.deleteMessage = function(message, cb){
  if(!message.id){
    cb('You must have ID to delete message.');
  }
  this.findAll((err, users) => {
    if(err){
      return cb(err);
    }
    var newArray = users.filter(user => user.id !== message.id);

    fs.writeFile(dataFile, JSON.stringify(newArray), err => {
      cb(err);
    });
  });
};

exports.editMessage = function(message, cb) {
  if(!message.id || !message.message){
    return cb('// Cannot post empty message. Write something!');
  }
  this.findAll((err, users) => {
    if(err){
      return cb(err);
    }
    var MessageEdited = {
      name: message.name,
      message: message.message,
      id: message.id
    };

    users = users.map(user => {
      if(user.id === MessageEdit.id){
        return MessageEdit;
      }
      return user;
    });

    fs.write(dataFile, JSON.stringify(users), err => {
      cb(err);
    });
  });
};

// exports.findById = function(id, cb) {
//   if(!id) return cb('Require ID!');
//   this.findAll((err, users) => {
//     if(err){
//       return cb(err);
//     }
//     var user = users.filter(user => user.id === id)[0];
//     cb(null, user);
//   });
// };
//
// e

// exports.postMessage

//-
//- $argument = <html tag>
//-
//- $.post('/api', $argument, $argument, $argument)

// 'use strict';
//
// var fs = require('fs');
// var path = require('path');
// var uuid = require('uuid');
//
// var dataFile = path.join(__dirname, '../data/users.json');
//
// exports.findNames = function(cb) {
//   fs.readFile(dataFile, (err, data) => {
//     if(err){
//       cb(err);
//       return;
//     }
//     try {
//       var users = JSON.parse(data);
//     } catch(err) {
//       return cb(err);
//     }
//     cb(null, users);
//   });
// };
//
// exports.postMessage = function(user, cb) {
//   if(!message) cb('Require message text.');
//
//   this.findAll((err, users) => {
//     if(err){
//       return cb(err);
//     }
//     var user = users.filter(user => users.id === msgid)[0]
//
//     var newMessage = {
//       name: message.name,
//       email: message.email,
//       message: message.message,
//       image: messsage.image,
//       id: uuid()
//     };
//
//     users.push(newMessage);
//     fs.writeFile(dataFile, JSON.stringify(users), err => {
//       cb(err);
//     });
//   });
// };
//
//
//
//
// exports.createUser = function(user, cb) {
//   if(!user){
//     return cb('// Cannot post empty message. Write something!');
//   }
//   this.findAll((err, users) => {
//     if(err){
//       return cb(err);
//     }
//     var newUser = {
//       name: user.name,
//       email: user.email,
//       message: user.message,
//       image: user.image,
//       id: uuid()
//     };
//     users.push(newUser);
//     fs.write(dataFile, JSON.stringify(users), err => {
//       cb(err);
//     });
//   })
// };
//
// exports.findById = function(id, cb) {
//   if(!id) return cb('Require ID!');
//   this.findAll((err, users) => {
//     if(err){
//       return cb(err);
//     }
//     var user = users.filter(user => user.id === id)[0];
//     cb(null, user);
//   });
// };
//
// e
//
// // exports.postMessage
//
// //-
// //- $argument = <html tag>
// //-
// //- $.post('/api', $argument, $argument, $argument)
