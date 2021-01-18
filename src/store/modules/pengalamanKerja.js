import axios from 'axios'

export default {
  state: {
    listPengalaman: []
  },
  mutation: {},
  actions: {
    addPengalamanKerja(context, payload) {
      return new Promise((resolve, reject) => {
        // console.log(resolve)
        // console.log(reject)
        // console.log(payload)
        axios
          .post(`http://${process.env.VUE_APP_URL}/experiences`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getPengalamanKerja(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/experiences/${payload}`)
          .then(result => {
            context.state.listPengalaman = result.data.data
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deletePengalamanKerja(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `http://${process.env.VUE_APP_URL}/experiences/delete/?id=${payload.id}&idPekerja=${payload.idPekerja}`
          )
          .then(result => {
            context.state.listPengalaman = result.data.data
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    listPengalaman(state) {
      return state.listPengalaman
    }
  }
}
