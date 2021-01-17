<template>
  <div>
    <div v-if="rule == 1" class="wrapper">
      <div class="text">
        <img
          class="mt-3 imageStyle d-block d-md-none"
          src="@/assets/images/icons/WhiteGDJicon.png"
        />
        <h1>Reset password</h1>
        <p>
          You need to change your password to activate your account
        </p>
      </div>
      <div class="form">
        <div class="email">
          New Password
          <div>
            <b-form-input
              class="input"
              type="password"
              placeholder="Masukan kata sandi"
              v-model="form.password"
            ></b-form-input>
          </div>
        </div>
        <div class="email">
          Confirmation new password
          <div>
            <b-form-input
              class="input"
              type="password"
              placeholder="Masukan konfirmasi kata sandi"
              v-model="confirmPassword"
            ></b-form-input>
          </div>
        </div>
      </div>
      <div class="bottom">
        <button @click="confirmReset">Reset Password</button>
      </div>
    </div>
    <div v-if="rule == 2" class="wrapperMethod">
      <h1>Password sukses ter- update, silahkan pilih metode Login</h1>
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
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ForgotComponent',
  data() {
    return {
      rule: 1,
      confirmPassword: null,
      form: {
        token: this.$route.params.id,
        password: null
      }
    }
  },
  methods: {
    ...mapActions(['newPasswordReset']),
    confirmReset() {
      if (this.form.password !== this.confirmPassword) {
        return this.$swal({
          icon: 'error',
          title: 'Password does not match',
          text: "Confirmation new password does't match the new password"
        })
      } else if (!this.form.password || !this.confirmPassword) {
        return this.$swal({
          icon: 'error',
          title: 'Password form cannot be empty'
        })
      } else {
        this.newPasswordReset(this.form)
          .then(result => {
            this.rule = 2
            return this.$swal('Success!', `${result.data.message}`, 'success')
          })
          .catch(error => {
            return this.$swal('warning', `${error.data.message}`, 'error')
          })
      }
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
.text {
  font-family: 'Poppins', sans-serif;
}
.wrapper {
  position: relative;
  padding-right: 100px;
  font-family: sans-serif;
  top: -190px;
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
.email {
  margin-top: 50px;
  color: gray;
  font-family: 'Poppins', sans-serif;
}
.sandi {
  margin-top: 40px;
  color: gray;
  font-family: 'Poppins', sans-serif;
}
.forget {
  text-align: right;
  margin-top: 15px;
  color: black;
  text-decoration: none;
}
.input {
  height: 50px;
}
.bottom {
  text-align: center;
}
.logoModal {
  width: 30px;
}
.bottom button {
  width: 100%;
  height: 50px;
  border: none;
  font-family: 'Poppins', sans-serif;
  border-radius: 6px;
  margin-top: 30px;
  background-color: #fbb017;
  color: white;
  font-weight: 700;
}
.bottom button:hover {
  background-color: #fcaa07;
}
.bottom p {
  margin-top: 15px;
  font-family: 'Poppins', sans-serif;
}
a.bottoms {
  color: #eca923;
  text-decoration: none;
}
a.bottoms:hover {
  color: #fcaa07;
  text-decoration: none;
}

@media (max-width: 1000px) {
  .wrapper,
  .wrapperMethod {
    position: static;
    padding: 120px;
    padding-top: 200px;
    color: white;
  }
  .sandi,
  .email,
  .forget {
    color: white;
  }
}
@media screen and (max-width: 770px) and (min-width: 577px) {
  .text img {
    width: 0px;
  }
}
@media (max-width: 576px) {
  .imageStyle {
    width: 100px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }
  .wrapper {
    padding: 10px;
    padding-right: 15px;
  }
  .wrapperMethod {
    margin-top: 150px;
    padding: 10px;
    padding-right: 15px;
  }
  .text h1 {
    font-size: 35px;
    margin-top: 40px;
    color: white;
    font-weight: bold;
  }
  .text p {
    color: white;
    font-size: 19px;
  }
  .email,
  .sandi,
  .forget {
    color: white;
  }
  .bottom p {
    color: white;
  }
  a.bottoms {
    color: #ffaa00;
    text-decoration: none;
  }
  a.bottoms:hover {
    color: #fcaa07;
    text-decoration: none;
  }
}
@media (max-width: 375px) {
  .text h1 {
    font-size: 35px;
    margin-top: 30px;
    color: white;
    font-weight: bold;
  }
}
</style>
