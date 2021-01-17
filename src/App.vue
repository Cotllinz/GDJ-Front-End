<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  created() {
    this.interceptorRequest()
    this.interceptorResponse()
  },
  methods: {
    ...mapActions(['interceptorRequest', 'interceptorResponse'])
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,800;1,500&display=swap');
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.swal2-title,
.swal2-html-container,
.swal2-confirm,
.swal2-deny {
  font-family: 'Poppins', sans-serif;
}
</style>
