import axios from 'axios'

export default {
  state: {
    profileById: '',
    exprUser: []
  },
  mutation: {},
  actions: {
    getProfilPekerjaById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/user/profile/${payload}`)
          .then(result => {
            context.state.profileById = result.data.data[0]
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getExperience(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/experiences/${payload}`)
          .then(result => {
            context.state.exprUser = result.data.data
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    profileById(state) {
      return state.profileById
    },
    exprUser(state) {
      return state.exprUser
    }
  }
}
