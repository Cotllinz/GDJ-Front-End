<template>
  <div>
    <div
      class="portofolio"
      style="margin-top:20px;margin-bottom:20px;text-align:center"
    >
      <div v-if="portofolioList.length === 0">
        <h5>Portofolio Kosong</h5>
      </div>
      <b-row v-else>
        <b-col
          sm="12"
          md="6"
          lg="4"
          xl="4"
          v-for="(item, index) in portofolioList"
          :key="index"
        >
          <div class="porto-img">
            <b-img
              :src="
                `https://${ENV}/fileuploadgdj/imagePorto/` +
                  item.image_portofolio
              "
              rounded
              alt="Rounded image"
              class="img"
            ></b-img>
            <div class="title-porto">{{ item.application_name }}</div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Portofolio',
  data() {
    return {
      idHired: 0,
      ENV: process.env.VUE_APP_URL
    }
  },
  created() {
    if (this.getUserData.roles === 0) {
      this.getPortofolio(this.getUserData.id_user)
    } else {
      this.idHired = this.$route.params.idHired
      this.getPortofolio(this.idHired)
    }
  },
  computed: {
    ...mapGetters(['portofolioList', 'getUserData'])
  },
  methods: {
    ...mapActions(['getPortofolio'])
  }
}
</script>

<style scoped>
.title-porto {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 25px;
}
.img {
  max-width: 100%;
  height: 100px;
}
</style>
