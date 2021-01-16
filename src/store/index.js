import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import profilePekerja from './modules/profilePekerja'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Auth, profilePekerja },
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})
