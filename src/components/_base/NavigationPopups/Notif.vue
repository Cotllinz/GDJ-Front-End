<template>
  <div class="Notification">
    <b-card class="Notif_hire">
      <div class="title d-flex align-content-center">
        <h5>Notification</h5>
        <a @click="clearNotif" class="clear_notif ml-auto">Clear</a>
      </div>
      <div class="notif_body pr-2">
        <div
          v-for="(items, index) in Notif"
          :key="index"
          class="d-flex align-items-center"
        >
          <img
            class="image_setting"
            :src="
              items.image_recruiter
                ? `https://${ENV}/fileuploadgdj/userRecruiter/` +
                  items.image_recruiter
                : 'https://www.pwcenter.org/sites/default/files/default_images/default_profile.png'
            "
            alt="images"
          />
          <section class="desc_title mt-lg-2 ml-2">
            <h5 class="pt-lg-2">Hi, I'm from {{ items.company_name }}</h5>
            <p>
              I want recruit you to join in my company for
              {{ items.jobs_needed }}
            </p>
          </section>
          <section class="time_desc">
            <timeago
              :datetime="items.created_at"
              locale="id"
              :auto-update="60"
            ></timeago>
          </section>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Notification',
  data() {
    return {
      ENV: process.env.VUE_APP_URL
    }
  },
  computed: {
    ...mapGetters({ Id: 'getUserId', Notif: 'notifikasi' })
  },
  created() {
    this.getNotif(this.Id)
  },
  methods: {
    ...mapActions(['getNotif', 'deleteNotif']),
    clearNotif() {
      this.deleteNotif(this.Id)
      this.getNotif(this.Id)
    }
  }
}
</script>
<style scoped>
.Notification {
  position: absolute;
  z-index: 1;
  top: 40px;
  left: -140px;
}
.clear_notif {
  cursor: pointer;
}
.Notif_hire {
  border-radius: 13px;
  width: 450px;
  padding: 0;
}
.notif_body {
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.notif_body::-webkit-scrollbar {
  width: 5px;
}
.notif_body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.notif_body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.image_setting {
  width: 60px;
  object-fit: cover;
  height: 60px;
  background-size: cover;
  object-position: 45%;
  border-radius: 10px;
}
.desc_title {
  font-family: 'Poppins', sans-serif;
}
.desc_title h5 {
  font-size: 17px;
}
.desc_title p {
  font-size: 15px;
}
.title {
  font-family: 'Poppins', sans-serif;
}
.title a {
  text-decoration: none;
}
.time_desc p {
  font-family: 'Poppins', sans-serif;
  margin-top: -33px;
}
</style>
