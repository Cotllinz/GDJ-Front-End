<template>
  <div>
    <div
      class="portofolio"
      style="margin-top:20px;margin-bottom:20px;text-align:center"
    >
      <b-row>
        <b-col
          sm="12"
          md="6"
          lg="4"
          xl="4"
          v-for="(item, index) in portoUser"
          :key="index"
        >
          <div class="porto-img">
            <b-img
              :src="`http://localhost:3000/imagePorto/` + item.image_portofolio"
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
      userId: 1
    }
  },
  created() {
    this.getPortofolio(this.userId)
  },
  computed: {
    ...mapGetters(['portoUser'])
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
  height: auto;
}
</style>
