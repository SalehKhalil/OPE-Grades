const express = require('express')
const routes = express.Router()
const upsertCriteriasHandler = require('./app/handlers/upsertCriteriasHandler')
const getCriteriasHandler = require('./app/handlers/getCriteriasHandler')
const setGroupGradeHandler = require('./app/handlers/setGroupGradeHandler')
const getGradesByStudentEmailHandler = require('./app/handlers/getGradesByStudentEmailHandler')

// Server routes
routes.get('/', (req, res) => res.status(200).json({ message: 'Up and running!' }))
routes.post('/upsertCriterias', upsertCriteriasHandler)
routes.get('/getCriterias', getCriteriasHandler)
routes.post('/setGroupGrade', setGroupGradeHandler)
routes.get('/getGradesByStudentEmail', getGradesByStudentEmailHandler)

module.exports = routes
