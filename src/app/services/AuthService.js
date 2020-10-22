const {
  API_AUTH_URL
} = process.env
const axios = require('axios')
const GenericError = require('../utils/errors/GenericError')

class AuthService {
  async setActivityGrade(payload) {
    try {
      await axios.post(`${API_AUTH_URL}/setActivityGrade`, { ...payload })
    } catch (error) {
      console.error(error)
      throw new GenericError(error.message || 'Something went wrong with AuthService', 'AuthServiceError', error.response.status || 500)
    }
  }

  async getMembersByGroupId(groupId) {
    try {
      const { data } = await axios.get(`${API_AUTH_URL}/getMembersByGroupId?groupId=${groupId}`)
      return data
    } catch (error) {
      console.error(error)
      throw new GenericError(error.message || 'Something went wrong with AuthService', 'AuthServiceError', error.response.status || 500)
    }
  }
}

module.exports = new AuthService()
