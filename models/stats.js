const mongoose = require('mongoose')

const statSchema = mongoose.Schema({
  bird_id: {type: Number},
  user_id: {type: Number},
  user_seen: {type: Number, required:true},
  total_seen: {type: Number, required:true},
})

const Stats = mongoose.model('Stat', statSchema)

module.exports = Stats
