import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Auth from './modules/auth'
import profilePekerja from './modules/profilePekerja'
import profileCompany from './modules/profilePerekrut'
import Hire from './modules/hire'
import Skill from './modules/userSkill'
import Pengalaman from './modules/pengalamanKerja'
import Portofolio from './modules/portofolio'
import home from './modules/home'
import chat from './modules/chat'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    profilePekerja,
    home,
    profileCompany,
    Hire,
    Skill,
    Pengalaman,
    Portofolio,
    chat
  },
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})
