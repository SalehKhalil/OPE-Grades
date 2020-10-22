const CriteriaDao = require('../models/daos/CriteriaDao')
const GenericError = require('../utils/errors/GenericError')

const handler = async (req, res) => {
  try {
    const { criterias } = req.body
    if (!criterias) throw new GenericError('Missing criterias', 'GradesError', 400)

    await CriteriaDao.deleteCriterias()
    const criteriasCreated = await CriteriaDao.createCriterias({ criterias })
    res.status(201).json(criteriasCreated)
  } catch (error) {
    console.error(error)
    res.status(error.httpStatus || 500).json({ error })
  }
}

module.exports = handler
