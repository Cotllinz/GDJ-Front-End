<template>
  <div>
    <div class="wrapper">
      <div class="text">
        <img
          class="mt-3 imageStyle d-block d-md-none"
          src="@/assets/images/icons/WhiteGDJicon.png"
        />
        <h1>Reset password</h1>
        <p>
          Enter your user account's verified email address and we will send you
          a password reset link.
        </p>
      </div>
      <div class="form">
        <div class="email">
          Email
          <div>
            <b-form-input
              class="input"
              type="email"
              placeholder="Masukan alamat email"
              v-model="form.email"
            ></b-form-input>
          </div>
        </div>
      </div>
      <div class="bottom">
        <button @click="confirm">Send password reset email</button>
      </div>
    </div>
    <b-modal
      ref="my-modal"
      hide-footer
      title="Request to Reset Your Account Password"
    >
      <div class="d-block text-center">
        <h2 class="titleModel">
          <img
            class="logoModal"
            src="@/assets/images/icons/Purple GDJ icon.png"
          />
          Get Dream Job
        </h2>
        <br />
        <img src="@/assets/images/icons/lock.png" />
        <br />
        <br />
        <h3>
          Check your email. We sent you the link to reset your password.
        </h3>
        <br />
      </div>
      <b-button
        class="modalButton"
        variant="outline-warning"
        block
        @click="hideModal"
        >Ok</b-button
      >
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ForgotComponent',
  data() {
    return {
      form: {
        email: null
      }
    }
  },
  methods: {
    ...mapActions(['emailForgot']),
    confirm() {
      if (!this.form.email) {
        return this.$swal('warning', 'Email form cannot be empty', 'error')
      }
      this.emailForgot(this.form)
        .then(result => {
          console.log(result)
          this.showModal()
        })
        .catch(error => {
          return this.$swal('warning', `${error.data.message}`, 'error')
        })
    },
    closeModal() {
      const random = Math.random()
        .toString(36)
        .substring(7)
      this.$router.push(`/forgot/${random}`)
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
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
  .wrapper {
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
