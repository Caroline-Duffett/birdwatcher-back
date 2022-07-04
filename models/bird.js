const mongoose = require('mongoose');
const Schema = mongoose.schema


const birdSchema = new mongoose.Schema({
  name: {type:String, required:true},
  scientificName: {type:String, required:true},
  imageIndex: {type:String, required:true},
  imageShow: {type:String, required:true},
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
