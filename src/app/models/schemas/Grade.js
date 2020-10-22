const mongoose = require('mongoose')

const Grade = new mongoose.Schema({
  studentEmail: {
    type: String,
    required: true
  },
  criterias: [],
  sprintInfoId: {
    type: String,
    required: true
  },
  sprintGrade: {
    type: String,
    required: true
  },
  evaluator: {
    type: String,
    required: true
  }
})

module.exports = {
  Grade: mongoose.model('Grade', Grade)
}
