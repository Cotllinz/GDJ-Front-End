import axios from 'axios'

export default {
  state: {
    profilePerekrut: {}
  },
  mutations: {
    //mutations
    profileById(state, payload) {
      state.profilePerekrut = payload
    }
  },
  actions: {
    getProfilPerekrutById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_URL}/company/${payload}`)
          .then(result => {
            context.commit('profileById', result.data.data[0])
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    updateCompany(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        const {
          company_name,
          jabatan,
          email_user,
          phone_number,
          city_recruiter,
          desc_recruiter,
          image_recruiter,
          social_media,
          linked_in
        } = context.state.profilePerekrut
        const data = new FormData()
        data.append('company_name', company_name)
        data.append('jabatan', jabatan)
        data.append('email_user', email_user)
        data.append('phone_number', phone_number)
        data.append('city_recruiter', city_recruiter)
        data.append('desc_recruiter', desc_recruiter)
        data.append('image_recruiter', image_recruiter)
        data.append('social_media', social_media)
        data.append('linked_in', linked_in)
        axios
          .patch(`https://${process.env.VUE_APP_URL}/company/${payload}`, data)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
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
