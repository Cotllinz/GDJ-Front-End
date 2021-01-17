import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import profilePekerja from './modules/profilePekerja'
import profilePerekrut from './modules/profilePerekrut'
import Hire from './modules/hire'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Auth, profilePekerja, profilePerekrut, Hire, home },
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})
