<template>
  <div>
    <b-card class="card-style">
      <h5 style="font-weight:bold" class="card-margin">
        Portofolio
      </h5>
      <hr />
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
            v-model="selected"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-radio-group>
        </div>

        <h6>Upload gambar</h6>
        <b-form-file class="mt-3" plain @change="handleFile"></b-form-file>
        <hr style="margin-top:30px; margin-bottom:30px" />
      </div>
      <div style="font-weight:bold" class="card-margin">
        <b-button
          block
          variant="outline-warning"
          class="btn-invert"
          @click="addPorto"
          >Tambah Portofolio</b-button
        >
      </div>
      <br /><br />
      <b-row
        class="card-margin"
        v-for="(item, index) in portofolioUser"
        :key="index"
      >
        <b-col>
          {{ item.application_name }}
        </b-col>
        <b-col>
          {{ item.type_portofolio }}
        </b-col>
        <b-col>
          {{ item.repo_link }}
        </b-col>
        <b-col>
          <b-icon
            @click="delPorto(item.id, item.id_pekerja)"
            style="cursor:pointer"
            icon="trash-fill"
            class="del-icon"
            variant="danger"
          ></b-icon>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'FormPortofolio',
  data() {
    return {
      idUser: 1,
      selected: 'Mobile',
      options: [
        { item: 'Mobile', name: 'Aplikasi Mobile' },
        { item: 'Web', name: 'Aplikasi Web' }
      ],
      form: {
        id_pekerja: 1,
        application_name: '',
        repo_link: '',
        type_portofolio: this.selected,
        image_portofolio: ''
      }
    }
  },
  created() {
    this.getPortofolio(this.idUser)
  },
  computed: {
    ...mapGetters(['portofolioUser'])
  },
  methods: {
    ...mapActions(['addPortofolio', 'getPortofolio', 'delPortofolio']),
    handleFile(e) {
      const file = (this.form.image_portofolio = e.target.files[0])
      this.url = URL.createObjectURL(file)
    },
    addPorto() {
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
          this.getPortofolio(this.idUser)
          console.log(result)
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
          this.getPortofolio(this.idUser)
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
