<template>
  <div>
    <div class="profiles fontstyle">
      <Navbar />
      <div class="page">
        <b-container>
          <b-row>
            <b-col sm="12" md="4" lg="4">
              <CardInfo />
            </b-col>
            <b-col sm="12" md="8" lg="8">
              <FormDataDiri />
              <FormSkills />
              <FormPengalaman />
              <FormPortofolio />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import CardInfo from '../components/_base/EditProfilPekerja/CardInfo'
import FormDataDiri from '../components/_base/EditProfilPekerja/FormDataDiri'
import FormSkills from '../components/_base/EditProfilPekerja/FormSkills'
import FormPengalaman from '../components/_base/EditProfilPekerja/FormPengalaman'
import FormPortofolio from '../components/_base/EditProfilPekerja/FormPortofolio'
import Navbar from '../components/NavigationBar'
import Footer from '../components/Footer'
import { mapActions } from 'vuex'

export default {
  name: 'EditProfilPekerja',
  components: {
    CardInfo,
    FormDataDiri,
    FormSkills,
    FormPengalaman,
    FormPortofolio,
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
    return {
      type: 1
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
.page {
  background: linear-gradient(180deg, #5e50a1 11%, #f6f7f8 11%);
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
</style>
