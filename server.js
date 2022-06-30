//___________________
// Dependencies
//___________________
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()
const session = require('express-session')


//___________________
// Controllers
//___________________
const birdsController = require('./controllers/birds_controller.js')
const usersController = require('./controllers/users_controller.js')
const usersBirdsController = require('./controllers/usersBirds_controller.js')
const sessionsController = require('./controllers/sessions_controller.js')


//___________________
// Port
//___________________
const PORT = process.env.PORT



//___________________
// Database
//___________________
const MONGODB_URI = process.env.MONGODB_URI



//___________________
// Middleware
//___________________
app.use(express.json())
app.use(cors())
app.use(
  session({
    secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
    resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
  })
)



//___________________
// CRUD Routes
//___________________
app.use(birdsController)
app.use(usersController)
app.use(usersBirdsController)
app.use(sessionsController)

// redirect for heroku
app.get('/', (req, res) => {
  res.redirect('/birds')
})


//___________________
// Listener
//___________________
app.listen(PORT, () => console.log('Listening on port: ' + PORT));

// Connect to Mongo
mongoose.connect(MONGODB_URI  ,  { useNewUrlParser: true});
// mongoose.connect("mongodb://localhost:27017/birds")

// Error / success
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
mongoose.connection.once('open', () => {
  console.log('connected to mongod...');
})
