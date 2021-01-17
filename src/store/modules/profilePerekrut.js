import axios from 'axios'

export default {
  state: {
    profilePerekrut: {}
  },
  mutation: {},
  actions: {
    getProfilPerekrutById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/company/${payload}`)
          .then(result => {
            context.state.profilePerekrut = result.data.data[0]
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    profilePerekrutById(state) {
      return state.profilePerekrut
    }
  }
}
