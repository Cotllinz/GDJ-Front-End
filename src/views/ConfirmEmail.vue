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
          <b-col v-if="rule == 1">
            <LoginComponent />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import LoginComponent from '../components/_base/Login/LoginComponent'
import LoginImage from '../components/_base/Login/LoginImage'
import { mapActions } from 'vuex'

export default {
  name: 'ConfirmEmail',
  components: {
    LoginImage,
    LoginComponent
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
          return this.$swal('Success!', `${result.data.massage}`, 'success')
        })
        .catch(error => {
          return this.$swal('warning', `${error.data.massage}`, 'error')
        })
      this.rule = 1
    }
  }
}
</script>

<style scoped>
.aktivasi {
  text-align: center;
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
