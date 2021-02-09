import axios from 'axios'
export default {
  state: {
    limit: 8,
    page: 1,
    totalRows: null,
    listPekerja: [],
    sort: '',
    skill: 0,
    categoryStatus: '',
    search: ''
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
    setListSearch(state, payload) {
      state.skill = 2
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
    },
    changeSearch(state, payload) {
      state.search = payload
      console.log(state.search)
    }
  },
  actions: {
    getPekerja(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://${process.env.VUE_APP_URL}/home/limit?page=${context.state.page}&limit=${context.state.limit}&sort=${context.state.sort}&status=${context.state.categoryStatus}`
          )
          .then(result => {
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
            `https://${process.env.VUE_APP_URL}/home/getsortingskill?page=${context.state.page}&limit=${context.state.limit}`
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
    },
    getPekerjabySearch(context) {
      if (context.state.search) {
        return new Promise((resolve, reject) => {
          axios
            .get(
              `https://${process.env.VUE_APP_URL}/home?page=${context.state.page}&limit=${context.state.limit}&search=${context.state.search}`
            )
            .then(result => {
              console.log(result)
              context.commit('setListSearch', result.data)
              resolve(result)
            })
            .catch(err => {
              reject(err)
            })
        })
      } else {
        context.dispatch('getPekerja')
      }
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
    },
    exportSearch(state) {
      return state.search
    }
  }
}
