const mongoose = require('mongoose')

module.exports = {
  connectMongo: async function (mongoUrl, callback) {
    let errorConnection = ''
    try {
      await mongoose.connect(mongoUrl)
      console.info('The mongodb connection was succesfully')
    } catch (error) {
      errorConnection = error
    }
    callback(errorConnection)
  }
}
