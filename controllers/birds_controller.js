const express = require('express')
const router = express.Router()
const Birds = require('../models/bird.js')


// Create Route
router.post('/birds', (req, res) => {
  Birds.create(req.body, (err, addBird) => {
    if (err) {
      console.log(req.body);
      console.log(err);
    } else {
      res.json(addBird)
    }
  })
})

// Read Route
router.get('/birds', (req, res) => {
  Birds.find({}, (err, foundBirds) => {
    if (err) {
      console.log(req.body);
      console.log(err);
    } else {
      res.json(foundBirds)
    }
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
    if (err) {
      console.log(req.body);
      console.log(err);
    } else {
      res.json(foundBird)
    }
  })
})


module.exports = router




//==========================================================================================================//
//                                                Graveyard
//==========================================================================================================//
//--------------------------------------------------------------------------------- Search Route Attempt ---//
  // // Search Route (Name)
  // router.post('/birds/search', async (req, res) => {
  //   console.log('backend search route');
  //   console.log(req.body.payload);
  //   let payload = req.body.payload;
  //   let search = await Brids.find({name: {$regex: new RegExp('^' + payload + '.*', 'i')}}).exec();
  //   res.json({payload: search})
  // })
//----------------------------------------------------------------------------------------------------------//
