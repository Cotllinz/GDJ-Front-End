<template>
  <div class="LandingPage">
    <Navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/NavigationBar.vue'

export default {
  name: 'LandingPage',
  components: {
    Navbar
  }
}
</script>
<style scoped></style>
