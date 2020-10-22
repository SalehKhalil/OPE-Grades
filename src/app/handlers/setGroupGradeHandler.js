const GradeDao = require('../models/daos/GradeDao')
const AuthService = require('../services/AuthService')
const GenericError = require('../utils/errors/GenericError')

const handler = async (req, res) => {
  try {
    const { criterias, groupId, sprintInfo, sprintGrade, evaluator } = req.body
    if (!criterias || !groupId || !sprintInfo || !sprintGrade || !evaluator) throw new GenericError('Missing criterias, groupId, sprintInfo, sprintGrade and/or evaluator', 'GradesError', 400)

    const { members } = await AuthService.getMembersByGroupId(groupId)
    const { activities } = sprintInfo
    const gradesToSet = []

    for (const student of members) {
      for (const activity of activities) {
        gradesToSet.push({
          courseId: student.courseId,
          email: evaluator,
          evaluator,
          courseWorkId: activity.id,
          studentEmail: student.email,
          sprintGrade
        })
      }
    }

    const requestsToClassroom = gradesToSet.map(payload => AuthService.setActivityGrade(payload))

    const gradesToStore = members.map(student => {
      return GradeDao.createGrade({
        studentEmail: student.email,
        criterias,
        sprintInfoId: sprintInfo._id,
        sprintGrade,
        evaluator
      })
    })

    await Promise.all(requestsToClassroom)
    await Promise.all(gradesToStore)
    res.status(200).json({})
  } catch (error) {
    console.error(error)
    res.status(error.httpStatus || 500).json({ error })
  }
}

module.exports = handler
