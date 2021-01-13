import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import LoginRecruiter from '../views/LoginRecruiter.vue'
import RegisterRecruiter from '../views/RegisterRecruiter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Login-recruiter',
    name: 'LoginRecruiter',
    component: LoginRecruiter
  },
  {
    path: '/register-recruiter',
    name: 'RegisterRecruiter',
    component: RegisterRecruiter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
