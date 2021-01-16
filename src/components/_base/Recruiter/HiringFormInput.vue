<template>
  <div class="wrapper">
    <div class="detail">
      <h1>Hubungi Lous Tomlinson</h1>
      <p class="mt-lg-4 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit In euismod ipsum
        et dui rhoncus auctor. In euismod ipsum et dui rhoncus auctor.
      </p>
    </div>
    <div class="form">
      <div class="inputTitle mt-5">
        Tujuan tentang pesan ini
        <select class="form-control" id="tujuan">
          <option>Projek</option>
          <option>Full Time</option>
          <option>Part-Time</option>
          <option>Internship</option>
        </select>
      </div>
      <div class="inputTitle">
        Nama Lengkap
        <div>
          <b-form-input
            class="input"
            type="text"
            placeholder="Masukan nama lengkap"
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle">
        Email
        <div>
          <b-form-input
            class="input"
            type="email"
            placeholder=" Masukan email "
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle">
        No Handpone
        <div>
          <b-form-input
            class="input"
            type="tel"
            placeholder=" Masukan no handpone "
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle">
        Deskripsi
        <div>
          <b-form-textarea
            id="textarea"
            placeholder="Deskripsikan/jelaskan lebih detail "
            rows="8"
            max-rows="8"
            no-resize
            v-model="company.desc_jobs"
          ></b-form-textarea>
        </div>
      </div>
      <button class="buttonHire" @click="onHire">Hire</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HireForm',
  data() {
    return {
      company: {
        id_recruiter: '4',
        id_pekerja: '1',
        files: '',
        jobs_needed: 'need',
        desc_jobs: ''
      }
    }
  },
  methods: {
    ...mapActions(['postHire']),
    onHire() {
      const {
        id_recruiter,
        id_pekerja,
        files,
        jobs_needed,
        desc_jobs
      } = this.company

      const data = new FormData()
      data.append('id_recruiter', id_recruiter)
      data.append('id_pekerja', id_pekerja)
      data.append('files', files)
      data.append('jobs_needed', jobs_needed)
      data.append('desc_jobs', desc_jobs)

      // for (var pair of data.entries()) {
      //   console.log(pair[0] + ', ' + pair[1])
      // }

      this.postHire(data)
        .then(result => {
          console.log(result)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 10px 45px;
}
.inputTitle {
  color: #9ea0a5;
  margin-top: 20px;
}
.form {
  font-family: 'Poppins', sans-serif;
}
select {
  padding-left: 7px;
}
input.input,
select {
  margin-top: 5px;
  height: 45px;
}
.buttonHire {
  width: 100%;
  height: 60px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: rgb(243, 171, 39);
  color: white;
  border: none;
  outline: none;
}
.buttonHire:hover {
  background-color: rgb(255, 166, 1);
}
.detail h1 {
  font-weight: 700;
  font-size: 36px;
}
textarea {
  margin-top: 5px;
}
@media screen and (max-width: 1000px) {
  .wrapper {
    padding: 30px;
    margin-top: 65px;
    border-radius: 10px;
    box-shadow: 0px 15px 20px rgba(66, 66, 66, 0.432);
  }
}
</style>
