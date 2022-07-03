const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const Users = require('../models/user.js')

//Get current user
sessions.get('/sessions', (req, res) => {
  res.json({ currentUser: req.session.currentUser })
  console.log('got user backend');
  console.log(req.session);
})


//Login user
sessions.post('/sessions', (req, res) => {
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
        console.log('user found');
        res.json(req.session.currentUser)
        console.log(req.session.currentUser);
      } else {
        res.json('Password does not match')
        console.log('password does not match');
      }
    }
  })
})

//Logout user
sessions.delete('/sessions', (req, res) => {
  req.session.destroy(() => {
    res.json('logged out')
    console.log('logged out backend');
    console.log(req.session);
  })
})

module.exports = sessions
