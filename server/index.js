// Main starting point of the application

const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const router = require('./router')


// Setting default promises library for mongoose

mongoose.Promise = global.Promise

// App Setup

mongoose.connect('mongodb://localhost:auth/react-auth')

app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))
router(app)

// Server Setup

const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
