<template>
  <div class="login">
    <div class="login_bg">
      <b-container fluid>
        <b-row class="d-flex align-items-lg-center">
          <b-col class="loginImage">
            <LoginImage />
          </b-col>
          <b-col v-if="rule == 0">
            <div class="aktivasi">
              <div class="wrapperButton">
                <div class="detailAktivasi">
                  Klik tombol dibawah untuk meng-aktivasi akun anda
                </div>
                <img src="../assets/images/icons/emailBigs.png" /> <br />
                <button @click="aktivasi">Activate Your Account's Email</button>
              </div>
              <br />
            </div>
          </b-col>
          <b-col v-if="rule == 1" class="wrapperMethod">
            <h1>Email berhasil teraktivasi, silahkan pilih metode Login</h1>
            <div class="loginPekerja">
              <button class="buttonLogin" @click="metodeLogin(1)">
                Login Pekerja
              </button>
            </div>
            <div class="loginPerekrut">
              <button class="buttonLogin" @click="metodeLogin(2)">
                Login Perekrut
              </button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import LoginImage from '../components/_base/Login/LoginImage'
import { mapActions } from 'vuex'

export default {
  name: 'ConfirmEmail',
  components: {
    LoginImage
  },
  data() {
    return {
      rule: 0,
      kode: this.$route.params.id
    }
  },
  methods: {
    ...mapActions(['confirmEmails']),

    aktivasi() {
      this.confirmEmails(this.kode)
        .then(result => {
          this.rule = 1
          return this.$swal('Success!', `${result.data.message}`, 'success')
        })
        .catch(error => {
          return this.$swal('warning', `${error.data.message}`, 'error')
        })
    },
    metodeLogin(param) {
      if (param == 1) {
        this.$router.push('/Login')
      } else {
        this.$router.push('/Login-recruiter')
      }
    }
  }
}
</script>

<style scoped>
.aktivasi {
  text-align: center;
}

.wrapperMethod {
  position: relative;
  padding-right: 50px;
  font-family: sans-serif;
  top: -190px;
}
.buttonLogin {
  margin-top: 20px;
  height: 50px;
  width: 50%;
  background-image: linear-gradient(rgb(54, 54, 219), black);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  color: white;
  font-weight: bold;
}
.wrapperButton {
  height: 500px;
  width: 80%;
  background-image: linear-gradient(rgb(54, 54, 219), white);
  box-shadow: 0px 15px 20px rgba(66, 66, 66, 0.432);

  border-radius: 10px;
}
.detailAktivasi {
  margin-bottom: 30px;
  padding-top: 30px;
  font-weight: bold;
  color: white;
}
.aktivasi button {
  width: 85%;
  height: 80px;
  border-radius: 10px;
  color: white;
  background-color: rgb(26, 221, 59);
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}
.login {
  background-color: rgb(250, 245, 245);
  height: 1000px;
}
@media (max-width: 1000px) {
  .wrapperMethod {
    position: static;
    z-index: 1;
    margin-top: 200px;
    padding: 150px;
    color: white;
  }
  .loginImage {
    position: absolute;
  }
  .login {
    background-color: white;
  }
  .wrapperButton {
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media (max-width: 576px) {
  .login {
    height: auto;
    background-image: url('../assets/images/loginPage/login-image.png');
  }
  .login_bg {
    background: rgba(8, 107, 199, 0.763);
    height: 900px;
  }
  .wrapperMethod {
    padding: 50px;
  }
  .wrapperButton img {
    width: 50%;
  }
}
@media (max-width: 375px) {
  .login {
    height: auto;
    background-image: url('../assets/images/loginPage/login-image.png');
  }
  .login_bg {
    background: rgba(8, 107, 199, 0.763);
    height: 820px;
  }
}
</style>
