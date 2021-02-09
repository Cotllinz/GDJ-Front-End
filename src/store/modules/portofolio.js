import axios from 'axios'

export default {
  state: {
    portoUser: [],
    portoList: []
  },
  mutations: {
    PortoSet(state, payload) {
      state.portoList = payload.data
    }
  },
  actions: {
    addPortofolio(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`https://${process.env.VUE_APP_URL}/portofolio`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getPortofolio(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_URL}/portofolio/${payload}`)
          .then(result => {
            context.commit('PortoSet', result.data)
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
            `https://${process.env.VUE_APP_URL}/portofolio/delete/?id=${payload.id}&idPekerja=${payload.id_user}`
          )
          .then(result => {
            context.state.portoUser = result.data.data
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    portofolioUser(state) {
      return state.portoUser
    },
    portofolioList(state) {
      return state.portoList
    }
  }
}
