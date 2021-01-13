<template>
  <div class="register">
    <div class="register_bg">
      <b-container fluid>
        <b-row class="d-flex align-items-lg-center">
          <b-col class="RegisterImage">
            <RegisterImage />
          </b-col>
          <b-col>
            <RegisterRecruiterComponent />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import RegisterRecruiterComponent from '../components/_base/Login/RegisterRecruiterComponent'
import RegisterImage from '../components/_base/Login/RegisterImage'

export default {
  name: 'RegisterRecruiter',
  components: {
    RegisterImage,
    RegisterRecruiterComponent
  }
}
</script>

<style scoped>
.register {
  background-color: rgb(250, 245, 245);
  height: 1350px;
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
    height: 1450px;
  }
}
@media (max-width: 375px) {
  .register {
    height: auto;
    background-image: url('../assets/images/loginPage/login-image.png');
  }
  .register_bg {
    background: rgba(8, 107, 199, 0.763);
    height: 1470px;
  }
}
</style>
