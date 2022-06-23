const mongoose = require('mongoose');
const Schema = mongoose.schema
const Stats = require('./stats.js')


const birdSchema = new mongoose.Schema({
  // id: {type:Number, required:true, unique:true},
  name: {type:String, required:true},
  scientificName: {type:String, required:true},
  image: {type:String, required:true},
  location: {type: String, required:true},
  status: {type: String, required:true},
  description: {type: String, required:true},
  stats: [Stats.schema],
  user: String,
})

const Birds = mongoose.model('Bird', birdSchema)

module.exports = Birds


// //for postman
// "name": " ",
// "scientificName": " ",
// "image": " ",
// "location": " ",
// "status": " ",
// "description": " ",
// stats: [Stats.schema],
// user: String,

// {
//     "name": "Wood Duck",
//     "scientificName": "Aix sponsa",
//     "image": "https://www.allaboutbirds.org/guide/assets/photo/65533521-240px.jpg",
//     "location": "Arlington, Virginia",
//     "status": "Low risk?",
//     "description": "Describe the bird"
// }
