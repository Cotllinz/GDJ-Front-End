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
          <option value="Full Time">Full Time</option>
          <option value="Freelance">Freelance</option>
        </select>
      </div>
      <div class="inputTitle">
        Nama Lengkap
        <div>
          <b-form-input
            readonly
            class="input"
            type="text"
            placeholder="Masukan nama lengkap"
            v-model="profilePerekrutById.company_name"
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle">
        Email
        <div>
          <b-form-input
            readonly
            class="input"
            type="email"
            placeholder=" Masukan email "
            v-model="profilePerekrutById.email_user"
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle">
        No Handpone
        <div>
          <b-form-input
            readonly
            class="input"
            type="tel"
            pattern="[0-9]{12}"
            placeholder=" Masukan no handpone "
            v-model="profilePerekrutById.phone_number"
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
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HireForm',
  data() {
    return {
      company: {
        files: '',
        jobs_needed: 'need',
        desc_jobs: ''
      }
    }
  },
  created() {
    this.getProfilPerekrutById(this.getUserId)
  },
  computed: {
    ...mapGetters(['profilePerekrutById', 'getUserId'])
  },
  methods: {
    ...mapActions(['postHire', 'getProfilPerekrutById', 'createRoomChat']),
    onHire() {
      const { files, jobs_needed, desc_jobs } = this.company
      const id_recruiter = this.getUserId
      const id_pekerja = this.$route.params.id
      if (!desc_jobs) {
        return this.$swal({
          icon: 'error',
          title: 'Deskripsi kosong',
          text: 'Deskripsi untuk detail pekerjaan tidak boleh kosong'
        })
      }
      const data = new FormData()
      data.append('id_recruiter', id_recruiter)
      data.append('id_pekerja', id_pekerja)
      data.append('files', files)
      data.append('jobs_needed', jobs_needed)
      data.append('desc_jobs', desc_jobs)

      this.postHire(data)
        .then(result => {
          console.log(result.data.data)
          return this.$swal({
            icon: 'success',
            title: 'Success',
            text: `Success sending hire invitation`
          })
        })
        .catch(error => {
          // console.log(error.message)
          return this.$swal({
            icon: 'error',
            title: 'Success',
            text: `${error.data.message}`
          })
        })
      const roomData = {
        sender: this.getUserId,
        receiver: this.$route.params.id
      }
      this.createRoomChat(roomData)
        .then(result => {
          this.$toasted.success(result)
          this.$toasted.success('Check chat message')
        })
        .catch(error => {
          this.$toasted.error(error)
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
