import axios from 'axios'
import router from '../../router/index'

export default {
  state: {
    user: {},
    token: localStorage.getItem('token') || null,
    compType: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
    },
    delUser(state) {
      state.user = {}
      state.token = null
    },
    editCompType(state, payload) {
      state.compType = payload
    }
  },
  actions: {
    setCompType(context, payload) {
      context.commit('editCompType', payload)
    },
    logins(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`https://${process.env.VUE_APP_URL}/user/login`, payload)
          .then(result => {
            context.commit('setUser', result.data.data)
            localStorage.setItem('token', result.data.data.token)
            resolve(result)
          })
          .catch(error => {
            console.clear()
            reject(error.response)
          })
      })
    },
    register(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .post(`https://${process.env.VUE_APP_URL}/user/register`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    confirmEmails(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `https://${process.env.VUE_APP_URL}/user/activation/${payload}`
          )
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    emailForgot(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .post(`https://${process.env.VUE_APP_URL}/user/forgot`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    newPasswordReset(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `https://${process.env.VUE_APP_URL}/user/resetPassword`,
            payload
          )
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    newPassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `https://${process.env.VUE_APP_URL}/user/changepass/${payload.id}`,
            payload.data
          )
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    logout(context) {
      localStorage.removeItem('token')
      context.commit('delUser')
      router.push('/')
    },
    interceptorRequest(context) {
      axios.interceptors.request.use(
        function(config) {
          config.headers.Authorization = `Bearer ${context.state.token}`
          return config
        },
        function(error) {
          return Promise.reject(error)
        }
      )
    },
    interceptorResponse(context) {
      axios.interceptors.response.use(
        function(response) {
          return response
        },
        function(error) {
          if (
            error.response.data.status === 403 &&
            (error.response.data.message === 'invalid token' ||
              error.response.data.message === 'invalid signature' ||
              error.response.data.message === 'jwt expired' ||
              error.response.data.message === 'jwt malformed')
          ) {
            context.dispatch('logout')
            alert(error.response.data.message)
          }
          return Promise.reject(error)
        }
      )
    }
  },
  getters: {
    isLogin(state) {
      return state.token !== null
    },
    getUserRole(state) {
      return state.user.roles
    },
    getUserId(state) {
      return state.user.id_user
    },
    getUserData(state) {
      return state.user
    },
    getCompType(state) {
      return state.compType
    }
  }
}
