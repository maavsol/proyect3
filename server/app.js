require('dotenv').config()
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const logger = require('morgan')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0])
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()

require('./config/database')

var whitelist = ['http://localhost:4200']
var corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1
    callback(null, originIsWhitelisted)
  },
  credentials: true
}
app.use(cors(corsOptions))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// app.use(function(req, res) {
//   res.sendFile(__dirname + './public/index.html')
// })

app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}))
require('./passport/serializers')
require('./passport/local')
app.use(passport.initialize())
app.use(passport.session())

const routes = require('./routes/routes')
const authRoutes = require('./routes/auth')
app.use('/auth', authRoutes)
app.use('/', routes)

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  console.error(err)
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
