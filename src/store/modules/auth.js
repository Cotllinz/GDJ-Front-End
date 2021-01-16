import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    register(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${process.env.VUE_APP_URL}/user/register`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    confirmEmails(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .patch(`http://${process.env.VUE_APP_URL}/user/activation/${payload}`)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {}
}
