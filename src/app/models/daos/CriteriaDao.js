const { Criteria } = require('../schemas/Criteria')
const GenericError = require('../../utils/errors/GenericError.js')

class CriteriaDao {
  createCriterias(criteria) {
    try {
      return Criteria.create(criteria)
    } catch (error) {
      console.error(error)
      throw new GenericError('missing some criteria information', 'CriteriaError', 400)
    }
  }

  async deleteCriterias() {
    try {
      await Criteria.deleteMany({})
    } catch (error) {
      console.error(error)
      throw new GenericError('Something went wrong', 'CriteriaError', 500)
    }
  }

  findCriterias() {
    try {
      return Criteria.findOne({})
    } catch (error) {
      console.error(error)
      throw new GenericError('Something went wrong', 'CriteriaError', 500)
    }
  }
}

module.exports = new CriteriaDao()
