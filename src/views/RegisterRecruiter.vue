<template>
  <div class="register">
    <b-container fluid>
      <b-row>
        <b-col class="RegisterImage"><RegisterImage /></b-col>
        <b-col><RegisterRecruiterComponent /></b-col>
      </b-row>
    </b-container>
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
