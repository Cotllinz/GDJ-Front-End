import axios from 'axios'

export default {
  state: {
    skills: []
  },
  mutation: {},
  actions: {
    getSkills(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_URL}/skill/${payload}`)
          .then(result => {
            context.state.skills = result.data.data
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    addSkillPekerja(context, payload) {
      return new Promise((resolve, reject) => {
        // console.log(resolve)
        // console.log(reject)
        console.log(payload)
        axios
          .post(`https://${process.env.VUE_APP_URL}/skill/add`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteSkill(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `https://${process.env.VUE_APP_URL}/skill/?id=${payload.id_pekerja}&idSkill=${payload.id_skill}`
          )
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    skillPekerja(state) {
      return state.skills
    }
  }
}
