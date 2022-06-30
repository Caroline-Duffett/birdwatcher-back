const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
  username: { type: String, unique: true, required: true },
  password: String,
  admin: Boolean
})

const User = mongoose.model('User', userSchema)

module.exports = User


//postman
// {
//   "username": "admin",
//   "password": "admin",
//   "admin": true,
//   "usersBirds": [
//     {
//       "birdName": "bird 1",
//       "numberOfBirds": 4,
//       "date": "12-12-2022",
//       "location": "yard",
//       "comments": "birds",
//       "img": "url"
//     },
//     {
//       "birdName": "bird 2",
//       "numberOfBirds": 4,
//       "date": "12-12-2022",
//       "location": "yard",
//       "comments": "birds",
//       "img": "url"
//     }
//   ]
// }

//
// {
//     "username": "admin",
//     "password": "admin",
//     "admin": true
// }
