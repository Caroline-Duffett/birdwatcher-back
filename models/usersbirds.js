const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userBirdsSchema = Schema({
  user: String,
  birdName: String,
  numberOfBirds: Number,
  date: String,
  location: String,
  comments: String,
  img: String
})

const UsersBirds = mongoose.model('UsersBirds', userBirdsSchema)

module.exports = UsersBirds


//for postman

// {
//     "user": "user1",
//     "birdName": "bird1",
//     "numberOfBirds": 1,
//     "date": "7/4/22",
//     "location": "park",
//     "comments": "singing in tree",
//     "img": "https://www.allaboutbirds.org/news/wp-content/uploads/2022/06/eastern-meadowlark-cover-ray-hennessy-768x432.jpg"
// }
