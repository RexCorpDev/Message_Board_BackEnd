'use strict'

const PORT = process.env.PORT || 3000;

//require: loading libraries
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var uuid = require('uuid');

var Users = require('./models/users.json')

//app declaration
var app = express();
app.use(morgan('dev'));   // server log middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'jade');

// ROUTES --> Post Message

// FIND
app.get('/api/showForum')
.post((req, res, next) => {
  Users.findAll((err, users) => {
    console.log('users callback1: ', users);
    res.status(err ? 400: 200).render(err || 'msgpage', {users: users});
  });
});

// CREATE
app.get('/api/message')
.post((req, res, next) => {
  Users.postMessage(req.body, err => {
    console.log('postMessage callback.newMessage fail ', )
    res.status(err ? 400: 200).render(err ||  'msgpage', {users : users});
  });

// DELETE & EDIT
app.route('/api/message/:id')(req, res, next) => {
  var id = req.params.id
  Users.findAll(id, (err, users) =>  {
      res.status(err ? 400: 200).send(err || 'msgpage');
    }
  })
})
.post()
.delete((req, res, next) => {
  var id = req.params.id;
});


// app.get('/msgpage', (req, res, next) => {
//
//   {
//     name
//     description
//     id
//   }
//
//   res.render('msgpage', {Users:{callback variable:[0]}}
//
// app.use((req, res, next) => {
//   res.status(404).send('Address Not Found.');
// });
//
// app.listen(PORT, err => {
//   console.log( err || `server listening on port ${PORT}`);
// });
