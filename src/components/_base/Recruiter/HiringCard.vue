<template>
  <div>
    <div>
      <b-card class="card-style">
        <div class="images d-flex justify-content-center">
          <b-img
            rounded="circle"
            v-if="profileById.image_pekerja"
            :src="
              `https://${vuePort}/fileuploadgdj/fileUserProfile/` +
                profileById.image_pekerja
            "
            alt="Image"
            class="profile-img"
          ></b-img>
          <b-img
            rounded="circle"
            v-else
            :src="require('../../../assets/img/photo.png')"
            alt="Image_default"
            class="profile-img"
          ></b-img>
        </div>
        <div class="info">
          <h4 style="font-weight:600">{{ profileById.fullname_pekerja }}</h4>
          <p>
            {{ profileById.job_desk }}
          </p>
          <div style="font-size:15px;color:#AAACB0">
            <p>
              <img src="@/assets/images/icons/map.png" />
              {{ profileById.city_pekerja }}
            </p>
            <b-card-text style="margin-top:20px">
              {{ profileById.desc_pekerja }}.
            </b-card-text>
          </div>
        </div>
        <div class="skills">
          <h4 style="font-weight:600">Skill</h4>
          <b-button
            class="skill"
            size="sm"
            v-for="(item, index) in userSkill"
            :key="index"
            >{{ item.skill_name }}</b-button
          >
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Hire',
  data() {
    return {
      vuePort: process.env.VUE_APP_URL,
      idUser: (this.id = this.$route.params.id)
    }
  },
  created() {
    this.getProfilPekerjaById(this.idUser)
    this.getSkills(this.idUser)
    this.getProfilPerekrutById(this.getUserId)
  },
  computed: {
    ...mapGetters(['profileById', 'userSkill', 'getUserData'])
  },
  methods: {
    ...mapActions([
      'getProfilPekerjaById',
      'getSkills',
      'getProfilPerekrutById'
    ])
  }
}
</script>

<style scoped>
.card-style {
  border-radius: 8px;
  border: none;
  padding: 10px;
  box-shadow: 0px 15px 20px rgba(66, 66, 66, 0.432);
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
  border-radius: 5px;
  font-size: 12px;
  padding-left: 20px;
  cursor: unset;
  padding-right: 20px;
  outline: none;
  margin: 10px 10px 10px 0px;
}

.text-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
