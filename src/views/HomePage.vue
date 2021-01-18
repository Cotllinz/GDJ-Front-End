<template>
  <div class="HomePages">
    <Navbar />
    <div class="HomePage fontstyle" style="background-color: #F6F7F8">
      <div class="top">
        <b-container>
          <h3>Top Jobs</h3>
        </b-container>
      </div>
      <b-container>
        <SearchSort />
        <Card />
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import SearchSort from '../components/_base/HomePage/SearchSort'
import Card from '../components/_base/HomePage/Card'
import Navbar from '../components/NavigationBar'
import Footer from '../components/Footer'
import { mapActions } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    SearchSort,
    Card,
    Navbar,
    Footer
  },
  created() {
    this.setCompType(1)
  },
  methods: {
    ...mapActions(['setCompType'])
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
.fontstyle {
  font-family: 'Open Sans', sans-serif;
}

.top {
  background-color: #60529f;
  padding: 15px 0px 15px 0px;
  color: white;
}
</style>
