<template>
  <div class="login">
    <div class="login_bg">
      <b-container fluid>
        <b-row class="d-flex align-items-lg-center">
          <b-col class="loginImage">
            <LoginImage />
          </b-col>
          <b-col>
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
  .loginImage {
    position: absolute;
  }
  .login {
    background-color: white;
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
