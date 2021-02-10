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
    updatePekerja(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        console.log(resolve)
        console.log(reject)
        const {
          fullname_pekerja,
          job_desk,
          city_pekerja,
          job_require,
          status_jobs,
          work_place,
          desc_pekerja,
          image_pekerja,
          instagram,
          linked,
          github
        } = context.state.profileById
        const data = new FormData()
        data.append('fullname_pekerja', fullname_pekerja)
        data.append('job_desk', job_desk)
        data.append('city_pekerja', city_pekerja)
        data.append('job_require', job_require)
        data.append('status_jobs', status_jobs)
        data.append('work_place', work_place)
        data.append('desc_pekerja', desc_pekerja)
        data.append('files', image_pekerja)
        data.append('instagram', instagram)
        data.append('linked', linked)
        data.append('github', github)
        axios
          .patch(
            `https://${process.env.VUE_APP_URL}/user/editprofile/${payload}`,
            data
          )
          .then(response => {
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            //console.log(error)
            reject(error.response)
          })
      })
    },
    getProfilPekerjaById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_URL}/user/profile/${payload}`)
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
          .get(`https://${process.env.VUE_APP_URL}/experiences/${payload}`)
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
          .get(`https://${process.env.VUE_APP_URL}/skill/${payload}`)
          .then(result => {
            context.state.skill = result.data.data
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
          .get(`https://${process.env.VUE_APP_URL}/portofolio/${payload}`)
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
