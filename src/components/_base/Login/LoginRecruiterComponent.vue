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
          Find the best talent for your company here, as we always connects with
          the most skillfull. Set up your profile, and recruits talented
          developer!
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
            ></b-form-input>
          </div>
        </div>
        <div class="sandi">
          Kata Sandi
          <div>
            <b-form-input
              class="input"
              type="password"
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
          <router-link to="/register-recruiter" class="bottoms">
            Daftar disini</router-link
          >
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
.text {
  font-family: 'Poppins', sans-serif;
}
.wrapper {
  padding-right: 100px;
  font-family: sans-serif;
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
/* @media (max-width: 1000px) {
  .wrapper {
    margin-left: 90px;
    color: white;
  }
  .email,
  .sandi,
  .forget {
    color: white;
  }
  .bottoms {
    color: yellow;
  }
} */
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
    width: 10px;
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
    padding: 0px;
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
