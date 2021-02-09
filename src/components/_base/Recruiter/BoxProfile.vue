<template>
  <div>
    <div>
      <b-card class="card-style">
        <div class="ubahLatar">
          <img src="../../../assets/images/icons/pencilEdit.png" /> Ubah Latar
        </div>
        <div class="insideComponent">
          <div class="images d-flex justify-content-center">
            <b-img
              rounded="circle"
              fluid
              v-if="!profilePerekrut.image_recruiter"
              :src="require('@/assets/img/photo.png')"
              alt="Image"
              class="profile-img"
            ></b-img>
            <b-img
              rounded="circle"
              fluid
              v-if="profilePerekrut.image_recruiter"
              :src="
                `https://${vuePort}/fileuploadgdj/userRecruiter/` +
                  profilePerekrut.image_recruiter
              "
              alt="Image"
              class="profile-img"
            ></b-img>
          </div>

          <div class="info">
            <h4 style="font-weight:600">{{ profilePerekrut.company_name }}</h4>
            <p>{{ profilePerekrut.jabatan }}</p>
            <div style="font-size:15px;color:#AAACB0">
              <p>
                <img src="@/assets/images/icons/map.png" />
                {{ profilePerekrut.city_recruiter }}
              </p>
              <b-card-text style="margin-top:20px">
                {{ profilePerekrut.desc_recruiter }}
              </b-card-text>
            </div>
          </div>
          <b-button class="btnstyle" block @click="moveToEdit"
            >Edit Profile</b-button
          >
        </div>
        <div class="contactWrapper">
          <div class="contact">
            <p>
              <img src="@/assets/images/icons/mail.png" />
              {{ profilePerekrut.email_user }}
            </p>
            <p>
              <img src="@/assets/images/icons/instagram.png" />
              {{ profilePerekrut.social_media }}
            </p>
            <p>
              <img src="@/assets/images/icons/phone1.png" />
              {{ profilePerekrut.phone_number }}
            </p>
            <p>
              <b-icon
                font-scale="1.3"
                icon="linkedin"
                style="margin-right:10px"
              ></b-icon>
              {{ profilePerekrut.linked_in }}
            </p>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Profile',
  data() {
    return {
      vuePort: process.env.VUE_APP_URL
    }
  },
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
    ...mapActions(['getProfilPerekrutById']),

    moveToEdit() {
      this.$router.push('/edit-company')
    }
  }
}
</script>

<style scoped>
.ubahLatar {
  position: absolute;
  color: rgb(255, 255, 255);
  right: 40px;
  top: 180px;
}
.card-style {
  border-radius: 8px;
  border: none;
  background: linear-gradient(180deg, #5e50a1 220px, #f6f7f8 10%);
  text-align: center;
  box-shadow: 0px 15px 20px rgba(66, 66, 66, 0.432);
}
.insideComponent {
  padding-right: 20%;
  padding-left: 20%;
}
.images {
  margin-top: 100px;
}

.btnstyle {
  background-color: #5e50a1;
  font-weight: 700;
  border: none;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: 40px auto 40px auto;
  width: 80%;
}
.profile-img {
  width: 155px;
  height: 155px;
  margin-top: 15px;
  margin-bottom: 30px;
}

.contactWrapper img {
  margin-right: 10px;
}
.contact {
  color: #9ea0a5;
  margin: auto;
  padding-bottom: 20px;
  display: inline-block;
  text-align: left;
}
@media screen and (max-width: 700px) {
  .ubahLatar {
    right: 20px;
    top: 30px;
  }
  .insideComponent {
    padding-right: 2%;
    padding-left: 2%;
  }
}
@media screen and (max-width: 500px) {
  .insideComponent {
    padding-right: 0;
    padding-left: 0;
  }
  .images {
    margin-top: 40px;
  }
  .card-style {
    padding: 0;
    margin: 0 3% 0 3%;
    background: linear-gradient(180deg, #5e50a1 160px, #f6f7f8 10%);
  }
}
</style>
