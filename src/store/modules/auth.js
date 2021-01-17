import axios from 'axios'

export default {
  state: {
    user: {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
    }
  },
  actions: {
    logins(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${process.env.VUE_APP_URL}/user/login`, payload)
          .then(result => {
            context.commit('setUser', result.data.data)
            localStorage.setItem('token', result.data.data.token)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    register(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${process.env.VUE_APP_URL}/user/register`, payload)
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
          .patch(`http://${process.env.VUE_APP_URL}/user/activation/${payload}`)
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
          .post(`http://${process.env.VUE_APP_URL}/user/forgot`, payload)
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
            `http://${process.env.VUE_APP_URL}/user/resetPassword`,
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
    }
  }
}
