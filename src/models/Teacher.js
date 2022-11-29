const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  academicDegree: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  }
})

const Teacher = mongoose.model('Teacher', TeacherSchema)

module.exports = { Teacher }
