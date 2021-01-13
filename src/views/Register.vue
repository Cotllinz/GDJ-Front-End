<template>
  <div class="register">
    <div class="register_bg">
      <b-container fluid>
        <b-row class="d-flex align-items-lg-center">
          <b-col class="RegisterImage">
            <RegisterImage />
          </b-col>
          <b-col>
            <RegisterComponent />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import RegisterComponent from '../components/_base/Login/RegisterComponent'
import RegisterImage from '../components/_base/Login/RegisterImage'

export default {
  name: 'Register',
  components: {
    RegisterImage,
    RegisterComponent
  }
}
</script>

<style scoped>
.register {
  background-color: rgb(250, 245, 245);
  height: 1100px;
}
@media (max-width: 1000px) {
  .RegisterImage {
    position: absolute;
  }
  .register {
    background-color: white;
  }
}
@media (max-width: 576px) {
  .register {
    height: auto;
    background-image: url('../assets/images/loginPage/login-image.png');
  }
  .register_bg {
    background: rgba(8, 107, 199, 0.763);
    height: 1270px;
  }
}
@media (max-width: 375px) {
  .register {
    height: auto;
    background-image: url('../assets/images/loginPage/login-image.png');
  }
  .register_bg {
    background: rgba(8, 107, 199, 0.763);
    height: 1300px;
  }
}
</style>
