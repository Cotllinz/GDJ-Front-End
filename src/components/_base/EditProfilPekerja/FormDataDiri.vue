<template>
  <div>
    <b-card class="card-style">
      <h5 style="font-weight:bold" class="card-margin">Data diri</h5>
      <hr />
      <div class="card-margin input-color">
        <h6>Nama Lengkap</h6>
        <b-form-input
          type="text"
          required
          placeholder="Masukan nama lengkap"
          class="input-style"
          v-model="profileById.fullname_pekerja"
        ></b-form-input>
        <h6>Job desk</h6>
        <b-form-input
          type="text"
          required
          placeholder="Masukan job desk"
          class="input-style"
          v-model="profileById.job_desk"
        ></b-form-input>
        <h6>Job Require</h6>
        <b-form-select class="mb-3 " v-model="profileById.job_require">
          <b-form-select-option value="Full Time"
            >Full Time</b-form-select-option
          >
          <b-form-select-option value="Freelance"
            >Freelance</b-form-select-option
          >
        </b-form-select>
        <h6>Status Jobs</h6>
        <b-form-select class="mb-3 " v-model="profileById.status_jobs">
          <b-form-select-option value="OFF"
            >Tidak Ingin Bekerja</b-form-select-option
          >
          <b-form-select-option value="ON">Ingin Bekerja</b-form-select-option>
        </b-form-select>
        <h6>Domisili</h6>
        <b-form-input
          type="text"
          required
          placeholder="Masukan domisili"
          class="input-style"
          v-model="profileById.city_pekerja"
        ></b-form-input>
        <h6>Tempat kerja</h6>
        <b-form-input
          type="text"
          required
          placeholder="Masukan tempat kerja"
          class="input-style"
          v-model="profileById.work_place"
        ></b-form-input>
        <h6>Deskripsi singkat</h6>
        <b-form-textarea
          class="textarea input-style"
          placeholder="Tulis deskripsi singkat"
          v-model="profileById.desc_pekerja"
        ></b-form-textarea>
        <h6>Instagram</h6>
        <b-form-input
          type="text"
          required
          placeholder="Masukan instagram anda"
          class="input-style"
          v-model="profileById.instagram"
        ></b-form-input>
        <h6>Github</h6>
        <b-form-input
          type="text"
          required
          placeholder="Masukan Github anda"
          class="input-style"
          v-model="profileById.github"
        ></b-form-input>
        <h6>Linkedin</h6>
        <b-form-input
          type="text"
          required
          placeholder="Masukan Linkedin anda"
          class="input-style"
          v-model="profileById.linked"
        ></b-form-input>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'FormDataDiri',
  data() {
    return {
      idUser: (this.id = this.$route.params.id)
    }
  },
  created() {
    this.getProfilPekerjaById(this.idUser)
  },
  computed: {
    ...mapGetters(['profileById', 'getUserData'])
  },
  methods: {
    ...mapActions(['getProfilPekerjaById']),
    chooseFiles: function() {
      document.getElementById('fileUpload').click()
    }
  }
}
</script>

<style scoped>
.card-style {
  border-radius: 8px;
  border: none;
  padding: 10px 10px 0px 10px;
  margin-top: 30px;
  padding: 0px;
}
.card .card-body {
  padding: 0px;
}
.card-margin {
  margin: 30px 30px 20px 30px;
}
.input-style {
  padding: 25px 20px 25px 20px;
  margin-bottom: 30px;
}
.input-style:focus {
  box-shadow: 0 0 0 0.2rem rgba(169, 125, 240, 0.384);
  border-color: #5e50a1;
}
.textarea:focus {
  box-shadow: 0 0 0 0.2rem rgba(169, 125, 240, 0.384);
  border-color: #5e50a1;
}

.input-color {
  color: #b3b8bd;
}
</style>
