const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
})

//On Save Hook, encrypt password

userSchema.pre('save', function(next) {
  //here we will hash & salt password and return the encrypted version
  const user = this
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})


const ModelClass = mongoose.model('user', userSchema)

module.exports = ModelClass
