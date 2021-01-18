<template>
  <div>
    <b-card class="card-style">
      <b-form @submit.prevent="onSubmit">
        <div v-for="(item, index) in listPengalaman" :key="index">
          <div class="title-form">
            <h5 style="font-weight:bold" class="card-margin">
              Pengalaman kerja ke {{ index + 1 }}
            </h5>
            <b-icon
              @click="removeEmployeeForm(index, item.id, item.id_pekerja)"
              style="cursor:pointer"
              icon="trash-fill"
              class="del-icon"
              variant="danger"
            ></b-icon>
          </div>
          <hr />
          <div class="card-margin input-color">
            <h6 style="margin-top:20px">Posisi</h6>
            <b-form-input
              v-model="item.posisi"
              type="text"
              required
              placeholder="Web Developer"
              class="input-style"
            ></b-form-input>
            <b-row>
              <b-col sm="12" md="6" lg="6" xl="6">
                <h6>Nama perusahaan</h6>
                <b-form-input
                  v-model="item.at_company"
                  type="text"
                  required
                  placeholder="PT Semua Aplikasi"
                  class="input-style"
                ></b-form-input>
              </b-col>
              <b-col sm="12" md="6" lg="6" xl="6">
                <h6>Bulan/Tahun</h6>
                <b-form-input
                  v-model="item.date"
                  type="date"
                  required
                  placeholder="January 2018"
                  class="input-style"
                ></b-form-input>
              </b-col>
            </b-row>
            <h6>Deskripsi singkat</h6>
            <b-form-textarea
              v-model="item.description"
              class="textarea"
              placeholder="Deskripsi singkat pekerjaan anda"
              required
            ></b-form-textarea>
            <hr style="margin-top:30px; margin-bottom:30px" />
          </div>
        </div>
        <div style="font-weight:bold" class="card-margin">
          <b-button
            @click="addNewEmployeeForm"
            block
            variant="outline-secondary"
            style="color:#d2d2d2"
            class="btn-invert"
            v-if="listPengalaman.length > 1"
            disabled
            >Tambah Pengalaman Kerja</b-button
          >
          <b-button
            @click="addNewEmployeeForm"
            block
            variant="outline-warning"
            class="btn-invert"
            v-else
            >Tambah Pengalaman Kerja</b-button
          >
        </div>
        <div style="font-weight:bold" class="card-margin">
          <b-button
            type="submit"
            block
            variant="outline-primary"
            class="btn-invert"
            >Simpan Pengalaman</b-button
          >
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'FormPengalaman',
  data() {
    return {
      hasil: '',
      employee: [
        {
          id_pekerja: 1,
          posisi: '',
          at_company: '',
          date: '',
          description: ''
        }
      ]
    }
  },
  created() {
    this.getPengalamanKerja(this.getUserData.id_user)
  },
  computed: {
    ...mapGetters(['listPengalaman', 'getUserData'])
  },
  methods: {
    ...mapActions([
      'addPengalamanKerja',
      'getPengalamanKerja',
      'deletePengalamanKerja',
      'dellAll'
    ]),
    addNewEmployeeForm() {
      this.listPengalaman.push({
        id_pekerja: this.getUserData.id_user,
        posisi: '',
        at_company: '',
        date: '',
        description: ''
      })
    },
    deleteAll() {
      this.dellAll(this.getUserData.id_user)
        .then(result => {
          console.log(result)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async onSubmit() {
      const x = await this.listPengalaman.length
      if (x >= 1) {
        await this.deleteAll()

        await this.addPengalamanKerja(this.listPengalaman)
          .then(result => {
            this.hasil = result
            console.log('berhasil')
            //this.getPengalamanKerja(this.getUserData.id_user)
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        await this.addPengalamanKerja(this.listPengalaman)
          .then(result => {
            this.hasil = result
            console.log('berhasil')
            //this.getPengalamanKerja(this.getUserData.id_user)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    removeEmployeeForm(index, id, idPekerja) {
      const data = {
        id_pengalaman: id,
        idPekerja: idPekerja
      }
      //this.listPengalaman[index].posisi === ''
      if (this.listPengalaman[index].posisi === '') {
        this.listPengalaman.splice(index, 1)
      } else {
        console.log(data)
        this.deletePengalamanKerja(data)
          .then(result => {
            this.listPengalaman.splice(index, 1)
            console.log(result)
          })
          .catch(error => {
            console.log(error)
            return this.$swal({
              icon: 'error',
              title: 'File input not recognized',
              text: 'Image input must be .JPG or .PNG'
            })
          })
      }
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
