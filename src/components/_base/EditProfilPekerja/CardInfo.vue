<template>
  <div>
    <div>
      <b-card class="card-style">
        <center>
          <div class="images">
            <div id="preview">
              <img v-if="url" :src="url" class="round-img" />
              <div
                v-else-if="profileById.image_pekerja === ''"
                class="d-flex justify-content-center"
                style="background-color:#d2d2d2;border-radius:50%;width:170px;height:170px"
              >
                <img
                  class="align-self-center round-img"
                  src="../../../assets/img/default.jpg"
                  alt=""
                />
              </div>
              <img
                v-else
                class="round-img"
                :src="
                  `http://localhost:3000/fileUserProfile/` +
                    profileById.image_pekerja
                "
                alt=""
              />
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
            <p>{{ profileById.status_jobs }}</p>
          </div>
        </div> </b-card
      ><br />
      <b-button block class="btnstyle" @click.prevent="onUpdate()"
        >Simpan</b-button
      ><br />
      <b-button block class="btnstyle-invert">Batal</b-button>
      <b-button
        class="btnstyle-invert"
        style="margin-top: 20px;"
        @click="loggingOut"
      >
        Log out
      </b-button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProfileInfo',
  data() {
    return {
      url: null,
      img: '',
      idUser: (this.id = this.$route.params.id)
    }
  },
  created() {
    this.getProfilPekerjaById(this.idUser)
  },
  computed: {
    ...mapGetters(['profileById', 'getUserData'])
  },
  methods: {
    ...mapActions(['getProfilPekerjaById', 'updatePekerja', 'logout']),
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
      this.updatePekerja(this.idUser)
        .then(result => {
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
