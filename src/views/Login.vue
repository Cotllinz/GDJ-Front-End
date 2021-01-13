<template>
  <div class="login">
    <b-container fluid>
      <b-row>
        <b-col class="loginImage"><LoginImage /></b-col>
        <b-col><LoginComponent /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
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
}
@media (max-width: 1000px) {
  .loginImage {
    position: absolute;
  }
}
</style>
