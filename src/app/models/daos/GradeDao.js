const { Grade } = require('../schemas/Grade')
const GenericError = require('../../utils/errors/GenericError.js')

class GradeDao {
  createGrade(gradeDao) {
    try {
      return Grade.create(gradeDao)
    } catch (error) {
      console.error(error)
      throw new GenericError('missing some reviewBacklog information', 'GradeDaoError', 400)
    }
  }

  findGradesByStudentEmail(studentEmail) {
    try {
      return Grade.find({ studentEmail })
    } catch (error) {
      console.error(error)
      throw new GenericError('missing some reviewBacklog information', 'GradeDaoError', 400)
    }
  }
}

module.exports = new GradeDao()
