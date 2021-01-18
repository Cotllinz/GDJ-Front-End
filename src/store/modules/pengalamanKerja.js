import axios from 'axios'

export default {
  state: {
    listPengalaman: []
  },
  mutation: {},
  actions: {
    addPengalamanKerja(context, payload) {
      //console.log(payload)
      return new Promise((resolve, reject) => {
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
      //console.log(payload.id)
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `http://localhost:3000/experiences/delete/?id=${payload.id_pengalaman}&idPekerja=${payload.idPekerja}`
          )
          .then(result => {
            //context.state.listPengalaman = result.data.data
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    dellAll(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `http://${process.env.VUE_APP_URL}/experiences/deleteall/?id=${payload}`
          )
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
    listPengalaman(state) {
      return state.listPengalaman
    }
  }
}
