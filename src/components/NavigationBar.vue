<template>
  <div>
    <b-container>
      <b-navbar
        class="animate__animated animate__fadeInDown animates"
        toggleable="lg"
      >
        <b-navbar-brand class="shadow_title"
          ><router-link class="title_navbar" tag="a" to="/">
            <img
              class="logos"
              src="../assets/images/icons/Purple GDJ icon.png"
              alt="logo"
            />
            G<span>et</span>D<span>ream</span>J<span>ob</span>
          </router-link></b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
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
import Alert from '../mixins/AlertSweet'
export default {
  name: 'Navbar',
  mixins: [Alert],
  methods: {
    SignUpChoose(LogorSign) {
      this.AlertSelect(LogorSign).then(res => {
        if (res.result.value === true && res.getSign === 'Login') {
          this.route.push('/Login')
        } else if (res.result.value === false && res.getSign === 'Login') {
          this.route.push('/Login-recruiter')
        } else if (res.result.value === true && res.getSign === 'SignUp') {
          this.route.push('/register')
        } else if (res.result.value === false && res.getSign === 'SignUp') {
          this.route.push('/register-recruiter')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.logos {
  width: 50px;
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
</style>
