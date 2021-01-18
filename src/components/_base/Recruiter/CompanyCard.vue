<template>
  <div>
    <div>
      <b-card class="card-style">
        <div class="images d-flex justify-content-center">
          <b-img
            rounded="circle"
            fluid
            v-if="!profilePerekrut.image_recruiter && !url"
            :src="require('@/assets/img/photo.png')"
            alt="Image"
            class="profile-img"
          ></b-img>
          <b-img
            rounded="circle"
            fluid
            v-if="profilePerekrut.image_recruiter && !url"
            :src="
              'http://localhost:3000/userRecruiter/' +
                profilePerekrut.image_recruiter
            "
            alt="Image"
            class="profile-img"
          ></b-img>
          <b-img
            rounded="circle"
            fluid
            v-if="url"
            :src="url"
            alt="Image"
            class="profile-img"
          ></b-img>
          <input
            id="formInputImage"
            type="file"
            accept="image/x-png,image/jpg,image/jpeg"
            @change="handleFile"
            hidden
          />
        </div>
        <div class="editProfile" @click="chooseFile()">
          <img src="@/assets/images/icons/pencilEditGrey.png" />
          Edit
        </div>
        <div class="info">
          <h4 style="font-weight:600">{{ profilePerekrut.company_name }}</h4>
          <p>
            {{ profilePerekrut.jabatan }}
          </p>
          <div style="font-size:15px;color:#AAACB0">
            <p>
              <img src="@/assets/images/icons/map.png" />
              {{ profilePerekrut.city_recruiter }}
            </p>
          </div>
        </div>
      </b-card>
      <div class="buttonBawah">
        <button class="simpan" @click="goUpdate">
          Simpan
        </button>
      </div>
      <div class="buttonBawah">
        <button class="batal" style="margin-top: 20px;" @click="batalUpdate">
          Batal
        </button>
      </div>
      <div class="buttonBawah">
        <button
          class="btn_logout"
          style="margin-top: 20px;"
          @click="loggingOut"
        >
          Log out
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Profile',
  data() {
    return {
      url: null
    }
  },
  computed: {
    ...mapGetters({
      user_id: 'getUserId',
      profilePerekrut: 'profilePerekrutById'
    })
  },
  methods: {
    ...mapGetters(['getUserId', 'profilePerekrutById']),
    ...mapActions(['updateCompany', 'logout']),
    chooseFile() {
      document.getElementById('formInputImage').click()
    },
    handleFile(event) {
      this.profilePerekrut.image_recruiter = event.target.files[0]
      this.url = URL.createObjectURL(event.target.files[0])
      //const type = event.target.files[0].type
      // if (type != 'image/jpeg' && type != 'image/png' && type != 'image/jpg') {
      //   return this.$swal({
      //     icon: 'error',
      //     title: 'File input not recognized',
      //     text: 'Image input must be .JPG or .PNG'
      //   })
      // }
    },
    goUpdate() {
      this.updateCompany(this.user_id)
        .then(result => {
          console.log(result)
          this.$swal('Success', `Profile berhasil di-update`, 'success')
          this.$router.push('/profile-company')
        })
        .catch(error => {
          return this.$swal('warning', `${error.data.message}`, 'error')
        })
    },
    batalUpdate() {
      this.$router.push('/profile-company')
    },
    loggingOut() {
      this.logout()
    }
  }
}
</script>

<style scoped>
.card-style {
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  border: none;
  padding: 10px;
  box-shadow: 0px 10px 10px rgba(66, 66, 66, 0.432);
}
.batal {
  outline: none;
  font-family: 'Poppins', sans-serif;
}
.batal:hover {
  border-color: #6854cf;
  background: rgb(245, 244, 244);
}
.simpan {
  border: none;
  font-family: 'Poppins', sans-serif;
  outline: none;
}
.simpan {
  color: white;
  background-color: #5e50a1;
}
.simpan:hover {
  background: #6854cf;
}
.btnstyle {
  background-color: #5e50a1;
  font-weight: 700;
  border: none;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.btn_logout {
  font-family: 'Poppins', sans-serif;
  background: #ff2a2a;
  border: none;
  color: #ffff;
  outline: none;
}
.btn_logout:hover {
  background: #fd0404;
}
.editProfile {
  color: grey;
  text-align: center;
  margin-bottom: 20px;
}
.editProfile:hover {
  color: white;
  font-weight: bold;
  border-radius: 10px;
  background-color: rgb(111, 122, 228);
  border: black 2px solid;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.22);
}
.profile-img {
  width: 155px;
  height: 155px;
  margin-top: 15px;
  margin-bottom: 10px;
}
.text-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.buttonBawah button {
  width: 100%;
  margin-top: 25px;
  height: 55px;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0px 10px 10px rgba(66, 66, 66, 0.432);
}
.batal {
  color: #5e50a1;
  border: #5e50a1 solid 2px;
  background-color: transparent;
  margin-top: 2px;
}
</style>
