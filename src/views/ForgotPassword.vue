<template>
  <div class="login">
    <div class="login_bg">
      <b-container fluid>
        <b-row class="d-flex align-items-lg-center">
          <b-col class="loginImage">
            <LoginImage />
          </b-col>
          <b-col>
            <ForgotComponent />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import LoginComponent from '../components/_base/Login/LoginComponent'
import LoginImage from '../components/_base/Login/LoginImage'

export default {
  name: 'Login',
  components: {
    LoginImage,
    LoginComponent
  }
}
</script>

<style scoped>
.login {
  background-color: rgb(250, 245, 245);
  height: 1000px;
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
