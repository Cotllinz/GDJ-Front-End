import axios from 'axios'
export default {
  state: {
    limit: 1,
    page: 1,
    totalRows: null,
    listPekerja: [],
    sort: '',
    skill: 0,
    categoryStatus: ''
  },
  mutations: {
    setListPekerja(state, payload) {
      state.skill = 0
      state.listPekerja = payload.data
      state.totalRows = payload.pagination.totalData
    },
    setListSkills(state, payload) {
      state.skill = 1
      state.listPekerja = payload.data
      state.totalRows = payload.pagination.totalData
    },
    handlePage(state, payload) {
      state.page = payload
    },
    changeSort(state, payload) {
      state.categoryStatus = ''
      state.sort = 'order by ' + payload
    },
    changeStatus(state, payload) {
      state.sort = ''
      state.categoryStatus = `where job_require = '${payload}'`
    }
  },
  actions: {
    getPekerja(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://${process.env.VUE_APP_URL}/home/limit?page=${context.state.page}&limit=${context.state.limit}&sort=${context.state.sort}&status=${context.state.categoryStatus}`
          )
          .then(result => {
            console.log(result)
            context.commit('setListPekerja', result.data)
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getPekerjabySkill(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://${process.env.VUE_APP_URL}/home/getsortingskill?page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(result => {
            console.log(result)
            context.commit('setListSkills', result.data)
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    exportListPekerja(state) {
      return state.listPekerja
    },
    exportPage(state) {
      return state.page
    },
    exportLimit(state) {
      return state.limit
    },
    exportTotalRows(state) {
      return state.totalRows
    },
    exportSkill(state) {
      return state.skill
    }
  }
}
