const express = require('express')
const router = express.Router()
const Birds = require('../models/bird.js')
//const seedData = require('../models/seeddata.js')


// router.get('/birds/seed', (req, res) => {
//   Birds.create(seedData, (err, data) => {
//     res.json(data)
//   })
// })

// Create Route
router.post('/birds', (req, res) => {
  Birds.create(req.body, (err, addBird) => {
    res.json(addBird)
  })
})

// Read Route
router.get('/birds', (req, res) => {
  Birds.find({}, (err, foundBirds) => {
    res.json(foundBirds)
  })
})

// Delete Route
router.delete('/birds/:id', (req, res) => {
  Birds.findByIdAndDelete(req.params.id, (err, deletedBird) => {
    res.json(deletedBird)
  })
})

// Update Route
router.put('/birds/:id', (req, res) => {
  Birds.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBird) => {
    res.json(updatedBird)
  })
})

// Show Route
router.get('/birds/:id', (req, res) => {
  Birds.findById(req.params.id, (err, foundBird) => {
    res.json(foundBird)
  })
})


module.exports = router
