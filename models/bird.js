const mongoose = require('mongoose');
const Schema = mongoose.schema
const Stats = require('./stats.js')


const birdSchema = new mongoose.Schema({
  name: {type:String, required:true},
  scientificName: {type:String, required:true},
  image: {type:String, required:true},
  food: {type:String, required:true},
  nesting: {type:String, required:true},
  behavior: {type:String, required:true},
  habitat: {type: String, required:true},
  conservationStatus: {type: String, required:true},
  region: String,
  description: {type: String, required:true},
})

const Birds = mongoose.model('Bird', birdSchema)

module.exports = Birds
