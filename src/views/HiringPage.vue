<template>
  <div>
    <div class="profiles fontstyle">
      <Navbar class="navbars" />
      <div class="page">
        <b-container>
          <b-row>
            <b-col sm="12" md="4" lg="4">
              <Profile />
            </b-col>
            <b-col sm="12" md="8" lg="8">
              <FormInput />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Profile from '../components/_base/Recruiter/HiringCard'
import FormInput from '../components/_base/Recruiter/HiringFormInput'
import Navbar from '../components/NavigationBar'
import Footer from '../components/Footer'
export default {
  name: 'Profiles',
  components: {
    Profile,
    FormInput,
    Navbar,
    Footer
  },
  created() {},
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
