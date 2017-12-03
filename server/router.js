const Authentication = require('./controllers/authentication')

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.send('Main route')
  })
  app.post('/signup', Authentication.signup)
}
