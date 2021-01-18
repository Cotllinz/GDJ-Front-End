<template>
  <div>
    <div class="profiles fontstyle">
      <Navbar />
      <div class="page">
        <b-container>
          <b-row>
            <b-col sm="12" md="4" lg="4">
              <Profile />
            </b-col>
            <b-col sm="12" md="8" lg="8">
              <b-card class="card-style">
                <div class="d-flex">
                  <h5
                    class="title-button"
                    style="max-width: 106px;"
                    @click="type = 1"
                  >
                    Portofolio
                  </h5>
                  <h5
                    class="title-button"
                    style="max-width: 306px;"
                    @click="type = 2"
                  >
                    Pengalaman kerja
                  </h5>
                </div>
                <div v-if="type === 1">
                  <Portofolio />
                </div>
                <div v-else>
                  <Work />
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Profile from '../components/_base/Profile/CardProfile'
import Portofolio from '../components/_base/Profile/CardPortofolio'
import Work from '../components/_base/Profile/CardWork'
import Navbar from '../components/NavigationBar'
import Footer from '../components/Footer'
import { mapActions } from 'vuex'

export default {
  name: 'Profiles',
  components: {
    Profile,
    Portofolio,
    Navbar,
    Footer,
    Work
  },
  data() {
    return {
      type: 1
    }
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
.page {
  background: linear-gradient(180deg, #5e50a1 33%, #f6f7f8 30%);
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
.title-button {
  font-weight: 700;
  font-size: 22px;
  padding-bottom: 10px;
  border-bottom: 3px solid #5e50a1;
  line-height: 28px;
  margin-right: 30px;
  cursor: pointer;
}
.title-button:hover {
  color: #5e50a1;
  border-bottom: 3px solid #d2d2d2;
}
@media only screen and (max-width: 600px) {
  .title-button {
    font-size: 14px;
    line-height: 20px;
    border-bottom: 2px solid #5e50a1;
  }
  .title-button:hover {
    border-bottom: 2px solid #d2d2d2;
  }
}
</style>
