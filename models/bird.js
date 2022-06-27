const mongoose = require('mongoose');
const Schema = mongoose.schema
const Stats = require('./stats.js')


const birdSchema = new mongoose.Schema({
  name: {type:String, required:true},
  scientificName: {type:String, required:true},
  image: {type: String, required:true},
  location: {type: String, required:true},
  status: {type: String, required:true},
  description: {type: String, required:true},
  // stats: [Stats.schema],
  // user: String,
})

const Birds = mongoose.model('Bird', birdSchema)

module.exports = Birds
