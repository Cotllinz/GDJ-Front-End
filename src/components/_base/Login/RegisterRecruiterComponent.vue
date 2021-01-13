<template>
  <div>
    <div class="wrapper">
      <div class="text">
        <h1>Hello, Dream Job Seekers</h1>
        <p>
          Don't have any account yet? Register here and let's find your dream
          job, as we always connects the jobseeker with the hiring company of
          their dream jobs!
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
            ></b-form-input>
          </div>
        </div>
        <div class="inputForm">
          Email
          <div>
            <b-form-input
              class="input"
              type="text"
              placeholder="Masukan alamat email"
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
            ></b-form-input>
          </div>
        </div>
      </div>
      <div class="bottom">
        <button>Daftar</button>
        <p>
          Anda sudah punya akun?
          <router-link to="/login" class="bottoms"> Masuk disini</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterComponent'
}
</script>

<style scoped>
.wrapper {
  margin-right: 100px;
  padding-top: 100px;
  font-family: sans-serif;
}
.email {
  margin-top: 50px;
  color: gray;
}
.inputForm {
  margin-top: 40px;
  color: gray;
}

.input {
  height: 40px;
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
  font-weight: 700;
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
    margin-top: 50px;
    margin-left: 90px;
    color: white;
  }
  .email,
  .inputForm,
  .forget {
    color: white;
  }
  .bottoms {
    color: yellow;
  }
}
@media (max-width: 500px) {
  .wrapper {
    margin-right: 30px;
    margin-left: 30px;
  }
  .text h1 {
    font-size: 25px;
    font-weight: bold;
  }
  .text p {
    font-size: 16px;
    line-height: 18px;
  }
}
</style>
