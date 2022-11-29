const moongose = require('mongoose')

const GradeSchema = new moongose.Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  academicHours: {
    type: Number,
    required: true
  },
  teacherId: {
    type: String,
    required: true
  }
})

const Grade = mongoose.model('Grade', GradeSchema)

module.exports = { Grade }
