import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import LandingPage from '../views/LandingPage.vue'
import HomegPage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import LoginRecruiter from '../views/LoginRecruiter.vue'
import RegisterRecruiter from '../views/RegisterRecruiter.vue'
import Profile from '../views/Profile.vue'
import Forgot from '../views/ForgotPassword.vue'
import EditProfile from '../views/EditProfile.vue'
import NewPassword from '../views/NewPassword.vue'
import Hire from '../views/HiringPage.vue'
import ProfileCompany from '../views/ProfileCompany.vue'
import EditCompany from '../views/EditProfileCompany.vue'
import ChatRoom from '../views/ChatRoom.vue'
import ConfirmEmail from '../views/ConfirmEmail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/home',
    name: 'HomegPage',
    component: HomegPage,
    meta: { requiresRoles: true }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/confirm-email/:id',
    name: 'ConfirmEmail',
    component: ConfirmEmail
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  },
  {
    path: '/forgot/:id',
    name: 'NewPassword',
    component: NewPassword
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/Login-recruiter',
    name: 'LoginRecruiter',
    component: LoginRecruiter,
    meta: { requiresVisitor: true }
  },
  {
    path: '/register-recruiter',
    name: 'RegisterRecruiter',
    component: RegisterRecruiter,
    meta: { requiresVisitor: true }
  },
  {
    path: '/profile-pekerja/:idHired',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/edit-pekerja/:id',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/profile-company',
    name: 'ProfileCompany',
    component: ProfileCompany,
    meta: { requiresRoles: true }
  },
  {
    path: '/edit-company',
    name: 'EditCompany',
    component: EditCompany,
    meta: { requiresRoles: true }
  },
  {
    path: '/hire/:id',
    name: 'Hire',
    component: Hire,
    meta: { requiresRoles: true }
  },
  {
    path: '/chat-room',
    name: 'ChatRoom',
    component: ChatRoom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresRoles)) {
    if (store.getters.getUserRole === 1) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
