const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userBirdsSchema = Schema({
  birdName: String,
  numberOfBirds: Number,
  date: Date,
  location: String,
  comments: String,
  img: String
})

const UsersBirds = mongoose.model('UsersBirds', userBirdsSchema)

module.exports = UsersBirds
