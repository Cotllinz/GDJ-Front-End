<template>
  <div>
    <div>
      <b-card class="card-style">
        <div class="images d-flex justify-content-center">
          <b-img
            rounded="circle"
            fluid
            :src="
              profileById.image_pekerja
                ? `https://${ENV}/fileuploadgdj/fileUserProfile/` +
                  profileById.image_pekerja
                : require('../../../assets/img/default.jpg')
            "
            alt="Image"
            class="profile-img"
          ></b-img>
        </div>
        <div class="info">
          <h4 style="font-weight:600">{{ profileById.fullname_pekerja }}</h4>
          <p>{{ profileById.job_desk }}</p>
          <div style="font-size:15px;color:#AAACB0">
            <p>
              <b-icon icon="geo-alt" style="margin-right:10px"></b-icon
              >{{ profileById.city_pekerja }}
            </p>
            <b-card-text style="margin-top:20px">
              <h6 style="margin-bottom:20px;font-size:15px">
                {{ profileById.job_require }}
              </h6>
              {{ profileById.desc_pekerja }}
            </b-card-text>
          </div>
        </div>
        <router-link
          v-if="getUserData.roles === 0"
          :to="{
            name: 'EditProfile',
            params: { id: profileById.id_pekerja }
          }"
        >
          <b-button class="btnstyle" block>Edit Profile</b-button>
        </router-link>
        <router-link
          v-else
          :to="{
            name: 'Hire',
            params: { id: profileById.id_pekerja }
          }"
        >
          <b-button class="btnstyle" block>Hire</b-button>
        </router-link>
        <div class="skills">
          <h4 style="font-weight:600">Skill</h4>
          <b-button
            class="skill"
            size="sm"
            v-for="(item, index) in skillPekerja"
            :key="index"
            >{{ item.skill_name }}</b-button
          >
        </div>
        <div class="contact">
          <div style="color:#AAACB0">
            <p class="h6" style="margin-bottom:30px">
              <b-icon
                font-scale="1.3"
                icon="chat-dots"
                style="margin-right:10px"
              ></b-icon>
              {{ profileById.email_user }}
            </p>
            <p class="h6" style="margin-bottom:30px">
              <b-icon
                font-scale="1.3"
                icon="instagram"
                style="margin-right:10px"
              ></b-icon>
              {{ profileById.instagram }}
            </p>
            <p class="h6" style="margin-bottom:30px">
              <b-icon
                font-scale="1.3"
                icon="linkedin"
                style="margin-right:10px"
              ></b-icon>
              {{ profileById.linked }}
            </p>
            <p class="h6" style="margin-bottom:30px">
              <b-icon
                font-scale="1.3"
                icon="github"
                style="margin-right:10px"
              ></b-icon>
              {{ profileById.github }}
            </p>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Profile',
  data() {
    return {
      idHired: 0,
      ENV: process.env.VUE_APP_URL
    }
  },
  created() {
    if (this.getUserData.roles === 0) {
      this.getProfilPekerjaById(this.getUserData.id_user)
      this.getSkills(this.getUserData.id_user)
    } else {
      this.idHired = this.$route.params.idHired
      this.getProfilPekerjaById(this.idHired)
      this.getSkills(this.idHired)
    }
  },
  computed: {
    ...mapGetters(['profileById', 'skillPekerja', 'getUserData'])
  },
  methods: {
    ...mapActions(['getProfilPekerjaById', 'getSkills'])
  }
}
</script>

<style scoped>
.card-style {
  border-radius: 8px;
  border: none;
  padding: 10px;
  margin-top: 30px;
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
.profile-img {
  overflow: hidden;
  background-size: cover;
  object-position: 45%;
  width: 155px;
  height: 155px;
  margin-top: 15px;
  margin-bottom: 30px;
}
.skill {
  background-color: #fdd074;
  border: 1px solid #fbb017;
  text-align: center;
  color: white;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px 10px 10px 0px;
}
.contact {
  margin: 50px 10px 50px 0px;
}
.text-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
