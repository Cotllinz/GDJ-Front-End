<template>
  <div>
    <div class="wrapper">
      <div class="text">
        <img
          class="mt-3 imageStyle d-block d-md-none"
          src="@/assets/images/icons/WhiteGDJicon.png"
        />
        <h1>Hello, Talent Recruiters</h1>
        <p>
          Don't have any account yet? Register here and find the best talent for
          your company , as we always connects with the most skillfull talent.
        </p>
      </div>

      <div class="form">
        <div class="email">
          Nama
          <div>
            <b-form-input
              class="input"
              type="text"
              placeholder="Masukan Nama Panjang"
              v-model="form.username"
            ></b-form-input>
          </div>
        </div>
        <div class="inputForm">
          Email
          <div>
            <b-form-input
              class="input"
              type="email"
              placeholder="Masukan alamat email"
              v-model="form.email_user"
            ></b-form-input>
          </div>
        </div>
        <div class="inputForm">
          Nama Perusahaan
          <div>
            <b-form-input
              class="input"
              type="text"
              placeholder="Masukan nama perusahaan"
              v-model="form.company_name"
            ></b-form-input>
          </div>
        </div>
        <div class="inputForm">
          Bidang Perusahaan
          <div>
            <b-form-input
              class="input"
              type="text"
              placeholder="misal: finance"
              v-model="form.jabatan"
            ></b-form-input>
          </div>
        </div>
        <div class="inputForm">
          No handphone
          <div>
            <b-form-input
              class="input"
              type="number"
              placeholder="Masukan No handphone"
              v-model="form.phone_number"
            ></b-form-input>
          </div>
        </div>
        <div class="inputForm">
          Kata Sandi
          <div>
            <b-form-input
              class="input"
              type="password"
              placeholder="Masukan kata sandi"
              v-model="form.user_password"
            ></b-form-input>
          </div>
        </div>
        <div class="inputForm">
          Konfirmasi kata sandi
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
        <button @click="daftar">Daftar</button>
        <p>
          Anda sudah punya akun?
          <router-link to="/login-recruiter" class="bottoms">
            Masuk disini</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RegisterComponent',
  data() {
    return {
      confirmPassword: '',
      form: {
        username: '',
        email_user: '',
        phone_number: '',
        user_password: '',
        company_name: '',
        jabatan: ''
      }
    }
  },
  methods: {
    ...mapActions(['register']),

    daftar() {
      if (
        !this.form.username ||
        !this.form.email_user ||
        !this.form.phone_number ||
        !this.form.user_password
      ) {
        return this.$swal('warning', 'Please input all data', 'error')
      } else if (this.form.user_password != this.confirmPassword) {
        return this.$swal(
          'warning',
          'Password does not match with confirm password',
          'error'
        )
      } else {
        this.register(this.form)
          .then(result => {
            return this.$swal(
              'Success!',
              `${result.data.message}, now you should check your email to activate this account`,
              'success'
            )
          })
          .catch(error => {
            return this.$swal('warning', `${error.data.message}`, 'error')
          })
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
  margin-right: 100px;
  padding-top: 100px;
  font-family: sans-serif;
}
.email {
  margin-top: 50px;
  color: gray;
  font-family: 'Poppins', sans-serif;
}
.inputForm {
  margin-top: 40px;
  color: gray;
  font-family: 'Poppins', sans-serif;
}

.input {
  height: 50px;
  border-radius: 7px;
}
.bottom {
  text-align: center;
  margin-top: 20px;
}
.bottom button {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-top: 30px;
  background-color: #fbb017;
  color: white;
  border: none;
  outline: none;
  font-weight: 700;
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
.bottom button:hover {
  background-color: #fbb017;
}
.bottom p {
  margin-top: 15px;
  margin-bottom: 100px;
}
input[type='number'] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
@media (max-width: 1000px) {
  .wrapper {
    padding: 120px;
    padding-top: 200px;
    padding-right: 40px;
    color: white;
  }
  .inputForm,
  .email,
  .forget {
    color: white;
  }
}
@media screen and (max-width: 770px) and (min-width: 577px) {
  .text img {
    width: 0px;
  }
  .wrapper {
    margin-right: 50px;
  }
}
@media (max-width: 655px) {
  .wrapper {
    margin-right: 10px;
    padding-left: 50px;
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
    margin-right: 15px;
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
</style>
