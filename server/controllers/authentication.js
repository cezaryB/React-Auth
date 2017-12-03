const User = require('../models/user')

exports.signup = function(req, res, next) {
  const email = req.body.email
  const password = req.body.password
  // Handle the case when user doesn't provide email or password
  if (!email || !password) {
    return res.status(422).send({ error: 'Fields cannot be empty' })
  }
  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err)
    }
    // If a user with email does exist, return an Error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use'})
    }
  })
  // If a user with email does not exist, create and save user record
  const user = new User({ email, password })
  user.save(function(err) {
    if (err) {
      return next(err)
    }
    // Respond to request indicating the user was created
    res.send(user)
  })
}
