<template>
  <div class="register">
    <b-container fluid>
      <b-row>
        <b-col class="RegisterImage"><RegisterImage /></b-col>
        <b-col><RegisterComponent /></b-col>
      </b-row>
    </b-container>
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
}
@media (max-width: 1000px) {
  .RegisterImage {
    position: absolute;
  }
  .register {
    background-color: white;
  }
}
</style>
