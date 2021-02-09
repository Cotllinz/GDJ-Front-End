<template>
  <div>
    <b-card class="card-style">
      <h5 style="font-weight:bold" class="card-margin">
        Portofolio
      </h5>
      <hr />
      <b-form @submit.prevent="onSubmit">
        <div class="card-margin input-color">
          <h6 style="margin-top:20px">Nama aplikasi</h6>
          <b-form-input
            type="text"
            required
            placeholder="Masukan nama aplikasi"
            class="input-style"
            v-model="form.application_name"
          ></b-form-input>

          <h6>Link repository</h6>
          <b-form-input
            type="text"
            required
            placeholder="Masukan link repository"
            class="input-style"
            v-model="form.repo_link"
          ></b-form-input>
          <div style="margin-bottom:25px">
            <h6>Type Portofolio</h6>
            <b-form-radio-group
              required
              @change="changeType"
              v-model="selected"
              :options="options"
              class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
            ></b-form-radio-group>
          </div>
          <h6>Upload gambar</h6>
          <b-form-file
            class="mt-3"
            plain
            @change="handleFile"
            required
          ></b-form-file>
          <hr style="margin-top:30px; margin-bottom:30px" />
        </div>
        <div style="font-weight:bold" class="card-margin">
          <b-button
            block
            type="submit"
            variant="outline-warning"
            class="btn-invert"
            >Tambah Portofolio</b-button
          >
        </div>
      </b-form>
      <h6 class="card-margin" style="font-weight:bold">Daftar Portofolio</h6>
      <b-row class="card-margin">
        <b-col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          xl="6"
          v-for="(item, index) in portofolioList"
          :key="index"
        >
          <div>
            <b-card
              :img-src="
                `https://${vuePort}/imagePorto/` + item.image_portofolio
              "
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <h4 style="padding:5px 10px">{{ item.application_name }}</h4>
              <b-card-text style="padding:0px 10px;height:70px">
                Repository: <br />
                <a :href="item.repo_link">{{ item.repo_link }}</a>
              </b-card-text>
              <div style="padding:5px 10px;">
                <b-button
                  @click="delPorto(item.id, item.id_pekerja)"
                  style="color:white"
                  href="#"
                  variant="danger"
                  block
                  size="sm"
                  >Delete</b-button
                >
              </div>
            </b-card>
          </div>
          <br />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import toastForm from '../../../mixins/toastForm.js'
export default {
  name: 'FormPortofolio',
  mixins: [toastForm],
  data() {
    return {
      selected: null,
      vuePort: process.env.VUE_APP_URL,
      options: [
        { item: 0, name: 'Aplikasi Mobile' },
        { item: 1, name: 'Aplikasi Web' }
      ],
      form: {
        id_pekerja: '',
        application_name: '',
        repo_link: '',
        type_portofolio: '',
        image_portofolio: ''
      }
    }
  },
  created() {
    this.getPortofolio(this.getUserData.id_user)
    this.form.id_pekerja = this.getUserData.id_user
    console.log(this.portofolioList)
  },
  computed: {
    ...mapGetters(['portofolioUser', 'getUserData', 'portofolioList'])
  },
  methods: {
    ...mapActions(['addPortofolio', 'getPortofolio', 'delPortofolio']),
    changeType() {
      this.form.type_portofolio = this.selected
    },
    handleFile(e) {
      const file = (this.form.image_portofolio = e.target.files[0])
      this.url = URL.createObjectURL(file)
    },
    onReset() {
      ;(this.form.application_name = ''),
        (this.form.repo_link = ''),
        (this.selected = null),
        (this.form.image_portofolio = '')
    },
    onSubmit() {
      const {
        id_pekerja,
        application_name,
        repo_link,
        type_portofolio,
        image_portofolio
      } = this.form
      const data = new FormData()
      data.append('id_pekerja', id_pekerja)
      data.append('application_name', application_name)
      data.append('repo_link', repo_link)
      data.append('type_portofolio', type_portofolio)
      data.append('image_portofolio', image_portofolio)
      // for (var pair of data.entries()) {
      //   console.log(pair[0] + ', ' + pair[1])
      // }
      this.addPortofolio(data)
        .then(result => {
          this.getPortofolio(this.getUserData.id_user)
          // this.makeToast(
          //   'Sukses tambah portofolio',
          //   `${result.data.data.application_name}`,
          //   'success'
          // )
          this.onReset()
          return this.$swal({
            icon: 'success',
            title: 'Sukses tambah portofolio',
            text: `${result.data.data.application_name}`
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    delPorto(id, idUser) {
      const data = {
        id: id,
        id_user: idUser
      }
      this.delPortofolio(data)
        .then(result => {
          this.getPortofolio(this.getUserData.id_user)
          this.makeToast(`${result.data.message}`, 'Delete Berhasil', 'success')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.del-icon {
  font-size: 17px;
}
.del-icon:hover {
  font-size: 20px;
}
.title-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
}
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
.btn-invert {
  font-weight: bold;
  padding: 10px;
}
.btn-invert:hover {
  color: white;
  font-weight: bold;
}
</style>
