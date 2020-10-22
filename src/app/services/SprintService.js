const {
  API_SPRINT_URL
} = process.env
const axios = require('axios')
const GenericError = require('../utils/errors/GenericError')

class SprintService {
  async getSprintInfoById(sprintInfoId) {
    try {
      const { data } = await axios.get(`${API_SPRINT_URL}/getSprintInfoById?sprintInfoId=${sprintInfoId}`)
      return data
    } catch (error) {
      console.error(error)
      throw new GenericError(error.message || 'Something went wrong with SprintService', 'SprintServiceError', error.response.status || 500)
    }
  }
}

module.exports = new SprintService()
