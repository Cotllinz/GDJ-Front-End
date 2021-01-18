import axios from 'axios'

export default {
  state: {
    portoUser: []
  },
  mutation: {},
  actions: {
    addPortofolio(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${process.env.VUE_APP_URL}/portofolio`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getPortofolio(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/portofolio/${payload}`)
          .then(result => {
            context.state.portoUser = result.data.data
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    delPortofolio(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `http://${process.env.VUE_APP_URL}/portofolio/delete/?id=${payload.id}&idPekerja=${payload.id_user}`
          )
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
  getters: {
    portofolioUser(state) {
      return state.portoUser
    }
  }
}
