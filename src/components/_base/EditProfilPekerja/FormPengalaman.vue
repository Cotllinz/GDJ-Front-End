<template>
  <div>
    <b-card class="card-style">
      <div v-for="(item, index) in employee" :key="index">
        <div class="title-form">
          <h5 style="font-weight:bold" class="card-margin">
            Pengalaman kerja ke {{ index + 1 }}
          </h5>
          <b-icon
            @click="removeEmployeeForm(index)"
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
                type="text"
                required
                placeholder="PT Semua Aplikasi"
                class="input-style"
              ></b-form-input>
            </b-col>
            <b-col sm="12" md="6" lg="6" xl="6">
              <h6>Bulan/Tahun</h6>
              <b-form-input
                type="text"
                required
                placeholder="January 2018"
                class="input-style"
              ></b-form-input>
            </b-col>
          </b-row>
          <h6>Deskripsi singkat</h6>
          <b-form-textarea
            class="textarea"
            placeholder="Deskripsi singkat pekerjaan anda"
          ></b-form-textarea>

          <hr style="margin-top:30px; margin-bottom:30px" />
        </div>
      </div>
      <div style="font-weight:bold" class="card-margin">
        <b-button
          @click="addNewEmployeeForm"
          block
          variant="outline-warning"
          class="btn-invert"
          >Tambah Pengalaman Kerja</b-button
        >
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'FormPengalaman',
  data() {
    return {
      employee: [
        {
          posisi: ''
        }
      ]
    }
  },
  methods: {
    addNewEmployeeForm() {
      this.employee.push({
        posisi: ''
      })
      console.log(this.employee)
    },
    removeEmployeeForm(index) {
      this.employee.splice(index, 1)
      console.log(this.employee)
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
