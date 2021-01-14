<template>
  <div class="LandingPage">
    <Navbar />
    <Main />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/NavigationBar.vue'
import Footer from '@/components/Footer.vue'
import Main from '@/components/_base/LandingPage/landingPageComponent'
export default {
  name: 'LandingPage',
  components: {
    Navbar,
    Footer,
    Main
  }
}
</script>
<style scoped></style>
