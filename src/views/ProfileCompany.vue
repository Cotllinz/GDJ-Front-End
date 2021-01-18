<template>
  <div>
    <div class="profiles fontstyle">
      <Navbar class="navbars" />
      <div class="page">
        <b-container>
          <BoxProfile />
        </b-container>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import BoxProfile from '../components/_base/Recruiter/BoxProfile'
import Navbar from '../components/NavigationBar'
import Footer from '../components/Footer'
import { mapActions } from 'vuex'

export default {
  name: 'ProfileCompany',
  components: {
    BoxProfile,
    Navbar,
    Footer
  },
  created() {
    this.setCompType(1)
  },
  methods: {
    ...mapActions(['setCompType'])
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
.page {
  background: #f5f4f4;
  padding: 40px 0px 80px 0px;
}
.fontstyle {
  font-family: 'Open Sans', sans-serif;
}
.card-style {
  border-radius: 8px;
  border: none;
  padding: 10px;
  margin-top: 30px;
}
.navbars {
  box-shadow: 0px 15px 20px rgba(66, 66, 66, 0.432);
  margin-bottom: 30px;
}
</style>
