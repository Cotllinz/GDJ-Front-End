<template>
  <div class="LandingPage">
    <Navbar />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/NavigationBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'LandingPage',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style scoped></style>
