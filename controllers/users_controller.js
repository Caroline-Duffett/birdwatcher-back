const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const Users = require('../models/user.js')

router.get('/createaccount', (req, res) => {
  Users.find({},  (err, foundUser) => {
    res.json(foundUser)
  })
})


router.post('/createaccount', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  Users.create(req.body, (err, createdUser) => {
    console.log(createdUser);
    if(err){
      console.log(err);
      res.json('username taken')
      res.json(err.message)
    } else {
      console.log('user is created', createdUser);
      res.json(createdUser)
    }
  })
});


router.put('/login', (req, res) => {
  Users.findOne({username: req.body.username}, (err, foundUser) => {
    if(err) {
      res.json('Oops, there was an error. Please try again')
    } else {
      if(!foundUser){
        res.json('Username and password do not match. Please try again.')
      } else if(bcrypt.compareSync(req.body.password, foundUser.password)) {
        res.json({username: foundUser.username})
      } else {
        res.json('Username and password do not match. Please try again.')
      }
    }
  })
});

module.exports = router
