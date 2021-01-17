<template>
  <div class="wrapper">
    <div class="dataDiri">
      <h1>Data diri</h1>
    </div>
    <hr />
    <div class="form">
      <div class="inputTitle">
        Nama Perusahaan
        <div>
          <b-form-input
            class="input"
            type="text"
            placeholder="Masukan nama perusahan"
            v-model="profilePerekrut.company_name"
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle">
        Bidang
        <div>
          <b-form-input
            class="input"
            type="text"
            placeholder=" Masukan bidang perusahaan ex : Financial"
            v-model="profilePerekrut.jabatan"
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle">
        Kota
        <div>
          <b-form-input
            class="input"
            type="tel"
            placeholder=" Masukan kota "
            v-model="profilePerekrut.city_recruiter"
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle">
        Deskripsi singkat
        <div>
          <b-form-textarea
            id="textarea"
            placeholder=" Tuliskan deskripsi singkat "
            rows="8"
            max-rows="8"
            no-resize
            v-model="profilePerekrut.desc_recruiter"
          ></b-form-textarea>
        </div>
      </div>
      <div class="inputTitle">
        Email
        <div>
          <b-form-input
            class="input"
            type="email"
            placeholder="Masukan email"
            v-model="profilePerekrut.email_user"
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle">
        Instagram
        <div>
          <b-form-input
            class="input"
            type="text"
            placeholder="Masukan nama Instagram"
            v-model="profilePerekrut.social_media"
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle">
        Nomor Telepon
        <div>
          <b-form-input
            class="input"
            type="tel"
            placeholder=" Masukan bidang perusahaan ex : Financial"
            v-model="profilePerekrut.phone_number"
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle" style="padding-bottom: 50px">
        Linkedin
        <div>
          <b-form-input
            class="input"
            type="text"
            placeholder="Masukan nama Linkedin"
            v-model="profilePerekrut.linked_in"
          ></b-form-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'EditCompanyForm',
  mounted() {
    this.getProfilPerekrutById(this.user_id)
  },
  computed: {
    ...mapGetters({
      user_id: 'getUserId',
      profilePerekrut: 'profilePerekrutById'
    })
  },
  methods: {
    ...mapGetters(['getUserId', 'profilePerekrutById']),
    ...mapActions(['getProfilPerekrutById'])
  }
}
</script>

<style scoped>
.wrapper {
  background-color: white;
  border-radius: 8px;
}
.inputTitle {
  color: #9ea0a5;
  margin-top: 20px;
}
.form {
  font-family: 'Poppins', sans-serif;
  padding: 3px 45px 0px 45px;
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
.dataDiri h1 {
  font-weight: 700;
  font-size: 36px;
  padding-top: 20px;
  padding-left: 45px;
}

textarea {
  margin-top: 5px;
}
@media screen and (max-width: 1000px) {
  .wrapper {
    margin-top: 65px;
    box-shadow: 0px 15px 20px rgba(66, 66, 66, 0.432);
  }
}
</style>
