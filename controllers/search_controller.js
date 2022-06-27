const express = require('express')
const router = express.Router()
const Birds = require('../models/bird.js')



// Search Route Name
router.post('/search/name', async (req, res) => {
  console.log('backend search route');
  console.log(req.body.payload);
  let payload = req.body.payload;
  let search = await Brids.find({name: {$regex: new RegExp('^' + payload + '.*', 'i')}}).exec();
  res.json({payload: search})
})

module.exports = router
