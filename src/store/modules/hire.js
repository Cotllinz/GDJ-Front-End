import axios from 'axios'
export default {
  state: {
    notif: [],
    notifCount: 0
  },
  mutations: {
    setNotif(state, payload) {
      state.notif = payload.data
    },
    setCount(state, payload) {
      state.notifCount = payload.data[0].total
    },
    resetCount(state) {
      state.notifCount = 0
    }
  },
  actions: {
    postHire(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`https://${process.env.VUE_APP_URL}/hire`, payload)
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
          .get(`https://${process.env.VUE_APP_URL}/hire/notif/${payload}`)
          .then(result => {
            context.commit('setNotif', result.data)
            resolve(result)
          })
          .catch(error => {
            console.clear()
            reject(error)
          })
      })
    },
    getNewNotif(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_URL}/hire/countnotif/${payload}`)
          .then(result => {
            context.commit('setCount', result.data)
            resolve(result)
            console.clear()
          })
          .catch(error => {
            console.clear()
            reject(error)
          })
      })
    },
    deleteNotif(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `https://${process.env.VUE_APP_URL}/hire/deletenotif/${payload}`
          )
          .then(result => {
            context.state.notif = []
            resolve(result)
          })
          .catch(error => {
            console.clear()
            reject(error)
          })
      })
    }
  },
  getters: {
    notifikasi(state) {
      return state.notif
    },
    notifCount(state) {
      return state.notifCount
    }
  }
}
