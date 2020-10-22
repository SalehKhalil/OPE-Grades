const GradeDao = require('../models/daos/GradeDao')

const handler = async (req, res) => {
  try {
    const { studentEmail } = req.query

    const grades = await GradeDao.findGradesByStudentEmail(studentEmail)
    res.status(200).json(grades)
  } catch (error) {
    console.error(error)
    res.status(error.httpStatus || 500).json({ error })
  }
}

module.exports = handler
