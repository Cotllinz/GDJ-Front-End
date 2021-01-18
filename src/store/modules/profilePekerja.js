import axios from 'axios'

export default {
  state: {
    profileById: '',
    exprUser: [],
    portoUser: [],
    skill: ''
  },
  mutation: {},
  actions: {
    getProfilPekerjaById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/user/profile/${payload}`)
          .then(result => {
            context.state.profileById = result.data.data[0]
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getExperience(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/experiences/${payload}`)
          .then(result => {
            context.state.exprUser = result.data.data
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getSkills(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/skill/${payload}`)
          .then(result => {
            context.state.skill = result.data.data[0].skill_name.split(',')
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
    }
  },
  getters: {
    profileById(state) {
      return state.profileById
    },
    exprUser(state) {
      return state.exprUser
    },
    portoUser(state) {
      return state.portoUser
    },
    userSkill(state) {
      return state.skill
    }
  }
}
