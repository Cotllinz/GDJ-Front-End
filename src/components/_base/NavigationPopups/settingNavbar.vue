<template>
  <b-card class="notification">
    <div class="setting_menu text-center">
      <a class="Account" @click="goToProfile(userId)"
        ><b-icon icon="person-fill"></b-icon> Account</a
      >
      <hr />
      <a class="logOut" @click="loggingOut"
        ><b-icon icon="door-closed-fill"></b-icon> Logout</a
      >
    </div>
  </b-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Settings',
  computed: {
    ...mapGetters({ configNav: 'getUserRole', userId: 'getUserId' })
  },
  methods: {
    ...mapActions(['logout']),
    goToProfile(id) {
      if (this.configNav === 0) {
        return this.$router.push(`/profile-pekerja/${id}`)
      } else if (this.configNav === 1) {
        return this.$router.push(`/profile-company`)
      }
    },
    loggingOut() {
      this.logout()
    }
  }
}
</script>
<style scoped>
.notification {
  width: 300px;
  top: 40px;
  border-radius: 10px;
  left: -120px;
  position: absolute;
}
.Account,
.logOut {
  text-decoration: none;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
}
.Account {
  color: #000000;
}
.logOut {
  color: #fc0000;
}
</style>