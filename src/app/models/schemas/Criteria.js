const mongoose = require('mongoose')

const Criteria = new mongoose.Schema({
  criterias: []
})

module.exports = {
  Criteria: mongoose.model('Criteria', Criteria)
}
