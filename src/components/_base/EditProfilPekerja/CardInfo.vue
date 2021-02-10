<template>
  <div>
    <div>
      <b-card class="card-style">
        <center>
          <div class="images">
            <div id="preview">
              <img v-if="url" :src="url" class="round-img" />
              <img
                v-else-if="profileById.image_pekerja"
                class="round-img"
                :src="
                  `https://${ENV}/fileuploadgdj/fileUserProfile/` +
                    profileById.image_pekerja
                "
                alt=""
              />
              <div
                v-else
                class="d-flex justify-content-center"
                style="background-color:#d2d2d2;border-radius:50%;width:170px;height:170px"
              >
                <img
                  class="align-self-center round-img"
                  src="../../../assets/img/default.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <input id="fileUpload" @change="handleFile" type="file" hidden />
              <p class="h5 edit-btn" @click="chooseFiles()">
                <b-icon icon="pencil-fill" style="margin-right:5px"></b-icon
                >Edit
              </p>
            </div>
          </div>
        </center>
        <div class="info">
          <h4 style="font-weight:600">{{ profileById.fullname_pekerja }}</h4>
          <p>{{ profileById.job_desk }}</p>
          <div style="font-size:15px;color:#AAACB0">
            <p class="h6">
              <b-icon icon="geo-alt" style="margin-right:10px"></b-icon
              >{{ profileById.city_pekerja }}
            </p>
            <p v-if="profileById.status_jobs === 'ON'">Ingin bekerja</p>
            <p v-if="profileById.status_jobs === 'OFF'">Tidak ingin bekerja</p>
          </div>
        </div> </b-card
      ><br />
      <b-button block class="btnstyle mb-3" @click.prevent="onUpdate()"
        >Simpan</b-button
      >
      <button class="mb-3 btn_changePass py-3" v-b-modal.modal-prevent-closing>
        Change Password
      </button>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        centered
        hide-footer
        title="Change your password"
        @show="resetModal"
        @hidden="resetModal"
      >
        <form class="form_style" ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="New Password"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input
              type="password"
              id="password-input"
              placeholder="Set your new password"
              v-model="form.newPass"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Confirm Password"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input
              type="password"
              placeholder="Confirm Password"
              v-model="form.confirmPassword"
              id="Confirm-password-input"
              required
            ></b-form-input>
          </b-form-group>
          <button class="btn_change py-3">Change</button>
        </form>
      </b-modal>
      <b-button block @click="back" class="btnstyle-invert">Batal</b-button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProfileInfo',
  data() {
    return {
      ENV: process.env.VUE_APP_URL,
      url: null,
      img: '',
      idUser: (this.id = this.$route.params.id),
      form: {
        newPass: '',
        confirmPassword: ''
      }
    }
  },
  created() {
    this.getProfilPekerjaById(this.idUser)
  },
  computed: {
    ...mapGetters(['profileById', 'getUserData'])
  },
  methods: {
    ...mapActions(['getProfilPekerjaById', 'updatePekerja', 'newPassword']),
    chooseFiles: function() {
      document.getElementById('fileUpload').click()
    },
    handleFile(e) {
      const type = event.target.files[0].type
      if (type != 'image/jpeg' && type != 'image/png' && type != 'image/jpg') {
        return this.$swal({
          icon: 'error',
          title: 'File input not recognized',
          text: 'Image input must be .JPG or .PNG'
        })
      } else {
        const file = (this.profileById.image_pekerja = e.target.files[0])
        this.url = URL.createObjectURL(file)
      }
    },
    onUpdate() {
      if (
        this.profileById.fullname_pekerja === '' ||
        this.profileById.job_desk === '' ||
        this.profileById.city_pekerja === '' ||
        this.profileById.work_place === '' ||
        this.profileById.desc_pekerja === '' ||
        this.profileById.linked === '' ||
        this.profileById.github === '' ||
        this.profileById.instagram === ''
      ) {
        return this.$swal({
          icon: 'warning',
          title: 'Lengkapi inputan',
          text: 'warning'
        })
      } else {
        this.updatePekerja(this.idUser)
          .then(result => {
            console.log(result)
            return this.$swal({
              icon: 'success',
              title: 'Sukses update profile',
              text: 'done'
            })
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
    },
    back() {
      this.$router.push(`/profile-pekerja/${this.idUser}`)
    },
    resetModal() {
      this.form = {
        newPass: '',
        confirmPassword: ''
      }
    },
    handleSubmit() {
      if (this.form.confirmPassword === this.form.newPass) {
        const payload = {
          id: this.idUser,
          data: this.form
        }
        this.newPassword(payload).then(() => {
          return this.$swal({
            icon: 'success',
            title: 'Sukses update password'
          }).then(() => {
            this.$nextTick(() => {
              this.$bvModal.hide('modal-prevent-closing')
            })
          })
        })
      } else {
        return this.$swal({
          icon: 'error',
          title: 'Password Not Match'
        })
      }
    }
  }
}
</script>

<style scoped>
.btn_change {
  width: 50%;
  background: #5e50a1;
  border: none;
  margin: 0 auto;
  display: block;
  color: #ffffff;
  font-weight: 600;
  border-radius: 7px;
  outline: none;
  text-align: center;
}
.btn_changePass {
  width: 100%;
  background: #5f42f3;
  border: none;
  border-radius: 7px;
  outline: none;
  color: #ffffff;
  font-weight: 700;
}
.btn_changePass:hover {
  background: #3b16f7;
  transition: 0.5s;
}
.form_style {
  font-family: 'Poppins', sans-serif;
}
.card-style {
  border-radius: 8px;
  border: none;
  padding: 10px 10px 0px 10px;
  margin-top: 30px;
}
.round-img {
  width: 155px;
  height: 155px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 50%;
}
.edit-btn {
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: center;
  color: #9b9b9b;
  font-weight: bold;
  cursor: pointer;
}
.btnstyle {
  background-color: #5e50a1;
  border: 1px solid #f6f7f8;
  font-weight: 700;
  border: none;
  padding-top: 15px;
  padding-bottom: 15px;
}
.btnstyle-invert {
  background-color: #f6f7f8;
  font-weight: 700;
  border: 1px solid #5e50a1;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #5e50a1;
}
</style>
