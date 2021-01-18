import axios from 'axios'

export default {
  state: {},
  mutation: {},
  actions: {
    postHire(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${process.env.VUE_APP_URL}/hire`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getNotif(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/hire/notif/${payload}`)
          .then(result => {
            context.state.portoUser = result.data.data
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {}
}
