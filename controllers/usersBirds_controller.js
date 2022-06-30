const express = require('express')
const router = express.Router()
const UsersBirds = require('../models/usersBirds.js')


// Create Route
router.post('/usersbirds', (req, res) => {
  UsersBirds.create(req.body, (err, addBird) => {
    if (err) {
      console.log(req.body);
      console.log(err);
    } else {
      res.json(addBird)
    }
  })
})

// Read Route
router.get('/usersbirds', (req, res) => {
  UsersBirds.find({}, (err, foundBirds) => {
    if (err) {
      console.log(req.body);
      console.log(err);
    } else {
      res.json(foundBirds)
    }
  })
})

// Delete Route
router.delete('/usersbirds/:id', (req, res) => {
  UsersBirds.findByIdAndDelete(req.params.id, (err, deletedBird) => {
    res.json(deletedBird)
  })
})

// Update Route
router.put('/usersbirds/:id', (req, res) => {
  UsersBirds.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBird) => {
    res.json(updatedBird)
  })
})

// Show Route
router.get('/usersbirds/:id', (req, res) => {
  UsersBirds.findById(req.params.id, (err, foundBird) => {
    if (err) {
      console.log(req.body);
      console.log(err);
    } else {
      res.json(foundBird)
    }
  })
})


module.exports = router
