<template>
  <div>
    <div class="wrapper">
      <div class="text">
        <h1>Hello, Dream Job Seekers</h1>
        <p>
          Find your dream job here, as we always connects the jobseeker with the
          hiring company of their dream jobs. Set up your profile, and be ready
          for your biggest hit!
        </p>
      </div>
      <div class="form">
        <div class="email">
          Email
          <div>
            <b-form-input
              class="input"
              type="text"
              placeholder="Masukan alamat email"
            ></b-form-input>
          </div>
        </div>
        <div class="sandi">
          Kata Sandi
          <div>
            <b-form-input
              class="input"
              type="text"
              placeholder="Masukan kata sandi"
            ></b-form-input>
          </div>
          <div class="forget">
            <router-link to="/ForgetPassword" class="forget">
              Lupa kata sandi?
            </router-link>
          </div>
        </div>
      </div>
      <div class="bottom">
        <button>Masuk</button>
        <p>
          Anda belum punya akun?
          <router-link to="/register"> Daftar disini</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent'
}
</script>

<style scoped>
.wrapper {
  margin-right: 100px;
  padding-top: 150px;
  font-family: sans-serif;
}
.email {
  margin-top: 50px;
  color: gray;
}
.sandi {
  margin-top: 40px;
  color: gray;
}
.forget {
  text-align: right;
  margin-top: 15px;
  color: black;
}
.input {
  height: 40px;
}
.bottom {
  text-align: center;
}
.bottom button {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-top: 30px;
  background-color: #fbb017;
  color: white;
  font-weight: 700;
}
.bottom p {
  margin-top: 15px;
}
</style>
