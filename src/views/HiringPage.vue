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
