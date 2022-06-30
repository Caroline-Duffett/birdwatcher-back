const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

// sessions.get('/new', (req, res) => {
//   res.render('sessions/new.ejs', { currentUser: req.session.currentUser })
// })

// on sessions form submit (log in)
sessions.post('/sessions', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      console.log(err)
      res.send('database error')
    } else if (!foundUser) {
      res.send('No user found')
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        //res.redirect('/')
        res.send('user found!')
      } else {
        res.send('Password does not match')
      }
    }
  })
})

sessions.delete('/sessions', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
    res.send('logged out')
  })
})

module.exports = sessions
