<template>
  <div>
    <div class="profiles fontstyle">
      <Navbar class="navbars" />
      <div class="page">
        <b-container>
          <b-row>
            <b-col sm="12" md="4" lg="4">
              <EditProfile :formName="form" />
            </b-col>
            <b-col sm="12" md="8" lg="8">
              <FormInput :formName="form" />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import EditProfile from '../components/_base/Recruiter/CompanyCard'
import FormInput from '../components/_base/Recruiter/EditCompanyForm'
import Navbar from '../components/NavigationBar'
import Footer from '../components/Footer'
export default {
  name: 'EditCompany',
  components: {
    EditProfile,
    FormInput,
    Navbar,
    Footer
  },
  created() {},
  data() {
    return {
      form: {
        nama_perusahaan: null
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
.page {
  background: #f5f4f4;
  padding: 40px 0px 80px 0px;
  background: linear-gradient(180deg, #5e50a1 220px, #f6f7f8 10%);
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
