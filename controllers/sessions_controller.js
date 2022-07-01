const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const Users = require('../models/user.js')

// sessions.get('/new', (req, res) => {
//   //res.render('sessions/new.ejs', { currentUser: req.session.currentUser })
//   res.render({ currentUser: req.session.currentUser })
// })

// sessions.get('/sessions', (req, res) => {
//   //res.render('sessions/new.ejs', { currentUser: req.session.currentUser })
//   //res.render({ currentUser: req.session.currentUser })
//   //console.log(req.session.currentUser);
//   res.json({ currentUser: req.session.currentUser })
// })



// sessions.get('/sessions', (req, res) => {
//   req.session.user ? res.status(200).send({loggedIn: true}) : res.status(200).send({loggedIn: false})
// })




// on sessions form submit (log in)
sessions.post('/sessions', (req, res) => {
  // console.log('req.headers');
  // console.log(req.headers);
  // console.log("res.headers");
  // console.log(res.headers); //undefined
  // console.log('res');
  // console.log(res);
  Users.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      console.log(err)
      res.json('database error')
      console.log('database error');
    } else if (!foundUser) {
      res.json('No user found')
      console.log('no user found');
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        //res.json('user found!') //without app won't set session
        console.log('user found');
        res.json(req.session.currentUser)
      } else {
        res.json('Password does not match')
        console.log('password does not match');
      }
    }
  })
})

sessions.delete('/sessions', (req, res) => {
  req.session.destroy(() => {
    res.json('logged out')
    console.log('logged out');
  })
})

module.exports = sessions
