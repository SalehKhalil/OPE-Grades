const CriteriaDao = require('../models/daos/CriteriaDao')

const handler = async (req, res) => {
  try {
    const { criterias } = await CriteriaDao.findCriterias()
    res.status(200).json(criterias)
  } catch (error) {
    console.error(error)
    res.status(error.httpStatus || 500).json({ error })
  }
}

module.exports = handler
