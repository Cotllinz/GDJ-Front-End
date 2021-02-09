import axios from 'axios'

export default {
  state: {
    profile: []
  },
  mutation: {},
  actions: {
    getDatarofiles(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`https://${process.env.VUE_APP_URL}/user/profile/${payload}`)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    getDataDiri(state) {
      return state.profile
    }
  }
}
