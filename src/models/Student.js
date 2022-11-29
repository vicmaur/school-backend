const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  phonNumber: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  }
})

const Student = mongoose.model('Student', StudentSchema)

module.exports = { Student }
