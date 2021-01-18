<template>
  <div>
    <div>
      <div class="work" style="margin-top:20px;margin-bottom:20px;">
        <div v-if="exprUser.length === 0">
          <h4>Pengalaman Kerja Kosong</h4>
        </div>
        <b-row
          v-else
          style="margin-bottom:20px"
          v-for="(item, index) in exprUser"
          :key="index"
        >
          <b-col sm="2" md="2" lg="2" xl="2">
            <div class="work-img">
              <b-img
                :src="require('../../../assets/img/work1.png')"
                rounded
                alt="Rounded image"
                class="img"
              ></b-img>
            </div>
          </b-col>
          <b-col sm="10" md="10" lg="10" xl="10">
            <div class="work-exp">
              <h5 style="font-weight:600">{{ item.posisi }}</h5>
              <h5>{{ item.at_company }}</h5>
              <h5 style="color:#9EA0A5">{{ formatDate(item.date) }}</h5>
              <div class="work-des">
                {{ item.description }}
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'Work',
  data() {
    return {
      idHired: 0
    }
  },
  created() {
    if (this.getUserData.roles === 0) {
      this.getExperience(this.getUserData.id_user)
    } else {
      this.idHired = this.$route.params.idHired
      this.getExperience(this.idHired)
    }
  },
  computed: {
    ...mapGetters(['exprUser', 'getUserData'])
  },
  methods: {
    ...mapActions(['getExperience']),
    moveToHire() {
      this.$router.push('/hire')
    },
    formatDate(value) {
      moment.locale('EN')
      return moment(String(value)).format('LL')
    }
  }
}
</script>

<style scoped>
.img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}
h5 {
  line-height: 20px;
}
.work-des {
  border-bottom: 2px solid#F0F2F6;
  padding-bottom: 20px;
  margin-top: 20px;
}
</style>
