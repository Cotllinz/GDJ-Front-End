<template>
  <div>
    <b-container>
      <b-navbar
        style="z-index: 99;"
        class="animate__animated animate__fadeInDown animates"
        toggleable="lg"
      >
        <b-navbar-brand class="shadow_title">
          <router-link
            v-if="configNav === 1 || configNav === 0"
            class="title_navbar"
            tag="a"
            to="/"
          >
            <img
              class="logosLogin"
              :src="require('../assets/images/icons/Purple GDJ + Icon.png')"
              alt="logo"
            />
          </router-link>
          <router-link v-else class="title_navbar" tag="a" to="/">
            <img
              class="logos"
              :src="require('../assets/images/icons/Purple GDJ icon.png')"
              alt="logo"
            />
            G<span>et</span>D<span>ream</span>J<span>ob</span>
          </router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-if="configNav === 1">
            <router-link
              class="ml-lg-5 pl-lg-5 mt-3 mt-lg-0 mb-2 mb-lg-0 home_jobSeaker"
              tag="a"
              to="/home"
              >Home</router-link
            >
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav
            v-if="(configNav === 0 || configNav === 1) && compType === 1"
            class="ml-auto"
          >
            <div
              class="d-flex position-relative  justify-content-around mt-lg-0 mt-4 mb-lg-0 mb-4"
            >
              <div class="mr-lg-4 position-relative" id="show-btn">
                <img
                  @click="showNotif"
                  class="pr-lg-3 cursor"
                  src="../assets/images/icons/bell (1) 1.svg"
                  alt="bell"
                />
                <span v-if="notifCount > 0" class="badge">{{
                  notifCount
                }}</span>
                <!-- PopUps -->
                <Notif v-if="PopupsNotif === 1" />
              </div>
              <div class="mr-lg-4 pr-lg-3">
                <img
                  class="cursor"
                  @click="GoChatRoom"
                  src="../assets/images/icons/mail (3) 1.svg"
                  alt="massage"
                />
              </div>
              <div class="image_profileFit position-relative">
                <img
                  class="image_profile cursor"
                  @click="showSetting"
                  :src="require('../assets/img/photo.png')"
                  alt="profile_pic"
                />
                <settingNav v-if="PopupsSettings === 1" />
              </div>
            </div>
          </b-navbar-nav>
          <b-navbar-nav
            v-else-if="(configNav === 0 || configNav === 1) && compType === 0"
            class="ml-auto"
          >
            <button
              class="btn_signup  px-lg-3 py-2 mt-lg-0 mb-3 mb-lg-0 mt-2 py-lg-2"
              type="button"
              @click="goToProfile(userId)"
            >
              Profile
            </button>
          </b-navbar-nav>
          <b-navbar-nav v-else class="ml-auto">
            <button
              class="btn_signin py-lg-2 py-2 mt-lg-0 mt-3 px-lg-3 mr-lg-3"
              type="button"
              @click="SignUpChoose('Login')"
            >
              Masuk
            </button>
            <button
              class="btn_signup  px-lg-3 py-2 mt-lg-0 mb-3 mb-lg-0 mt-2 py-lg-2"
              type="button"
              @click="SignUpChoose('SignUp')"
            >
              Daftar
            </button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Notif from './_base/NavigationPopups/Notif'
import Alert from '../mixins/AlertSweet'
import settingNav from './_base/NavigationPopups/settingNavbar'
export default {
  name: 'Navbar',
  mixins: [Alert],
  components: {
    Notif,
    settingNav
  },
  data() {
    return {
      PopupsNotif: 0,
      PopupsSettings: 0
    }
  },
  created() {
    if (this.userId) {
      this.getNewNotif(this.userId)
    }
  },
  computed: {
    ...mapGetters({
      configNav: 'getUserRole',
      userId: 'getUserId',
      compType: 'getCompType',
      notifCount: 'notifCount'
    })
  },
  methods: {
    ...mapActions(['getNewNotif']),
    ...mapMutations(['resetCount']),
    SignUpChoose(LogorSign) {
      this.AlertSelect(LogorSign).then(res => {
        if (res.result.value === true && res.getSign === 'Login') {
          this.$router.push('/Login')
        } else if (res.result.value === false && res.getSign === 'Login') {
          this.$router.push('/Login-recruiter')
        } else if (res.result.value === true && res.getSign === 'SignUp') {
          this.$router.push('/register')
        } else if (res.result.value === false && res.getSign === 'SignUp') {
          this.$router.push('/register-recruiter')
        }
      })
    },
    showNotif() {
      if (this.PopupsNotif === 0) {
        this.PopupsNotif = 1
        this.PopupsSettings = 0
      } else {
        this.PopupsNotif = 0
      }
      this.resetCount()
    },
    showSetting() {
      if (this.PopupsSettings === 0) {
        this.PopupsNotif = 0
        this.PopupsSettings = 1
      } else {
        this.PopupsSettings = 0
      }
    },
    goToProfile(id) {
      if (this.configNav === 0) {
        return this.$router.push(`/profile-pekerja/${id}`)
      } else if (this.configNav === 1) {
        return this.$router.push(`/profile-company`)
      }
    },
    GoChatRoom() {
      this.$router.push('/chat-room')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cursor {
  cursor: pointer;
}
.title_navbar {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 25px;
  text-decoration: none;
  color: #5e50a1;
}
.title_navbar span {
  font-size: 20px;
  font-weight: 500;
}
.image_profile {
  width: 29px;
  height: 29px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 45%;
}
.badge {
  position: absolute;
  top: -12px;
  right: 6px;
  width: 25px;
  font-size: 10px;
  padding-top: 7.5px;
  padding-left: 5px;
  height: 25px;
  border-radius: 50%;
  background: #5e50a1;
  color: white;
}

.logos {
  width: 50px;
  object-fit: contain;
}
.logosLogin {
  width: 130px;
  object-fit: contain;
}

.btn_signin,
.btn_signup {
  outline: none;
  font-family: 'Poppins', sans-serif;
}
.btn_signin {
  background: none;
  border: 2px solid #5e50a1;
  border-radius: 7px;
  font-weight: 700;
  color: #5e50a1;
}
.animates {
  --animate-duration: 2s;
}
.btn_signin:hover {
  background: #5e50a1;
  transition: 250ms;
  color: #f8f8f8;
}

.btn_signup {
  background: #5e50a1;
  border: none;
  border-radius: 7px;
  font-weight: 700;
  color: #ffffff;
}
.btn_signup:hover {
  background: #5d45d8;
  transition: 250ms;
  color: #f8f8f8;
}
.home_jobSeaker {
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  color: #000;
}
a.router-link-exact-active.home_jobSeaker {
  color: #5d45d8;
  font-weight: 700;
}
</style>
