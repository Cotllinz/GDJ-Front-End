<template>
  <div class="login">
    <b-container fluid>
      <b-row>
        <b-col class="loginImage"><LoginImage /></b-col>
        <b-col><LoginRecruiterComponent /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LoginRecruiterComponent from '../components/_base/Login/LoginRecruiterComponent'
import LoginImage from '../components/_base/Login/LoginImage'

export default {
  name: 'LoginRecruiter',
  components: {
    LoginImage,
    LoginRecruiterComponent
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
