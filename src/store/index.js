import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import profilePekerja from './modules/profilePekerja'
import Hire from './modules/hire'
import Skill from './modules/userSkill'
import Pengalaman from './modules/pengalamanKerja'
import Portofolio from './modules/portofolio'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Auth, profilePekerja, Hire, Skill, Pengalaman, Portofolio },
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})
