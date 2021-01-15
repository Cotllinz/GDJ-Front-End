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
        ></b-form-input>

        <h6>Link repository</h6>
        <b-form-input
          type="text"
          required
          placeholder="Masukan link repository"
          class="input-style"
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
        <b-form-file class="mt-3" plain></b-form-file>
        <hr style="margin-top:30px; margin-bottom:30px" />
      </div>
      <div style="font-weight:bold" class="card-margin">
        <b-button block variant="outline-warning" class="btn-invert"
          >Tambah Portofolio</b-button
        >
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'FormPortofolio',
  data() {
    return {
      //url: null,
      //img: '',
      selected: 'Mobile',
      options: [
        { item: 'Mobile', name: 'Aplikasi Mobile' },
        { item: 'Web', name: 'Aplikasi Web' }
      ]
      // chooseFiles: function() {
      //   document.getElementById('filePortofolio').click()
      // },
      // handleFile(e) {
      //   const file = (this.img = e.target.files[0])
      //   this.url = URL.createObjectURL(file)
      // }
    }
  },
  methods: {
    // addNewEmployeeForm() {
    //   this.employee.push({
    //     posisi: ''
    //   })
    // }
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
