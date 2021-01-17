import axios from 'axios'
export default {
  state: {
    limit: 1,
    page: 1,
    totalRows: null,
    listPekerja: [],
    sort: '',
    categoryStatus: ''
  },
  mutations: {
    setListPekerja(state, payload) {
      state.listPekerja = payload.data
      state.totalRows = payload.pagination.totalData
    },
    handlePage(state, payload) {
      state.page = payload
    }
  },
  actions: {
    getPekerja(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://${process.env.VUE_APP_URL}/home/limit?page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(result => {
            context.commit('setListPekerja', result.data)
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
    }
  }
}
