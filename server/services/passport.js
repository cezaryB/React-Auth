const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

// Setup options for JWT Strategy

const jwtOptions = {}

// Create JWT Strategy

    // payload is decoded jwt token, czyli będzie miał sub property i iat property bez tokena
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exist in our database
  User.findById(payload.sub, function(err, user) {
    if (err) {
      done(err, false)
    }
    // If it does, call 'done' with that user
    if (user) {
      done(null, user)
    }
    else {
      done(null, false)
    }
    // Otherwise, call done without a user object
  })
})

// Tell passport to use this strategy
