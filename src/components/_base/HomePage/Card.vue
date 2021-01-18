<template>
  <div class="cards fontstyle">
    <b-row>
      <b-col
        xs="12"
        cols="12"
        sm="6"
        md="4"
        lg="4"
        xl="4"
        v-for="(item, index) in jobSeeker"
        :key="index"
      >
        <b-card @click="profilePekerja(item.id_pekerja)" class="home-card">
          <div
            class="d-flex flex-lg-column align-items-center align-items-lg-start"
          >
            <div class="clearfix">
              <b-img
                left
                :src="
                  'http://localhost:3000/fileUserProfile/' + item.image_pekerja
                "
                rounded
                alt="Photo"
                class="card-img"
              ></b-img>
            </div>
            <div id="info" class="ml-3 ml-lg-0">
              <h5>{{ item.fullname_pekerja }}</h5>
              <b-card-text style="color: #DBDBDD">
                {{ item.job_desk }}<br />
                {{ item.city_pekerja }}
              </b-card-text>
              <div class="d-none d-lg-block">
                <b-button size="sm" class="skill">{{
                  item.skills[0].skill_name
                }}</b-button>
                <b-button size="sm" class="skill">{{
                  item.skills[1].skill_name
                }}</b-button>
                <span class="badge">{{ item.skills.length - 2 }}+</span>
              </div>
            </div>
          </div>
          <div class="d-block d-lg-none">
            <b-button size="sm" class="skill">{{
              item.skills[0].skill_name
            }}</b-button>
            <b-button size="sm" class="skill">{{
              item.skills[1].skill_name
            }}</b-button>
            <span class="badge">{{ item.skills.length - 2 }}+</span>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <div class="overflow-auto" style="padding-top:30px;padding-bottom:30px">
      <b-pagination
        align="center"
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="limit"
        @change="handlePageChange"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Card',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      jobSeeker: 'exportListPekerja',
      page: 'exportPage',
      limit: 'exportLimit',
      totalRows: 'exportTotalRows',
      skill: 'exportSkill',
      search: 'exportSearch'
    }),
    currentPage: {
      get() {
        return this.page
      },
      set(newPage) {
        return newPage
      }
    }
  },
  created() {
    this.getPekerja()
  },
  methods: {
    ...mapActions(['getPekerja', 'getPekerjabySkill', 'getPekerjabySearch']),
    ...mapMutations(['handlePage']),
    handlePageChange(numberPage) {
      this.handlePage(numberPage)
      if (this.skill === 0) {
        this.getPekerja()
      } else if (this.skill === 1) {
        this.getPekerjabySkill()
      } else {
        this.getPekerjabySearch()
      }
    },
    profilePekerja(event) {
      this.$router.push({
        name: 'profile-pekerja',
        params: { id: event }
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
.fontstyle {
  font-family: 'Open Sans', sans-serif;
}
.badge {
  color: #9ea0a5;
  font-size: 15px;
}
.home-card {
  border-radius: 8px;
  border: none;
  margin: 15px 0px 10px 0px;
  cursor: pointer;
}
.home-card:hover {
  -webkit-box-shadow: 0px 0px 20px -4px rgba(148, 148, 148, 1);
  -moz-box-shadow: 0px 0px 20px -4px rgba(148, 148, 148, 1);
  box-shadow: 0px 0px 20px -4px rgba(148, 148, 148, 1);
}
.card-img {
  width: 100px;
  height: 100px;
  object-position: 45%;
  background-size: cover;
  margin-bottom: 20px;
}
.card-info {
  padding: 10px;
  margin-top: 15px;
  text-align: left;
}
.skill {
  background-color: #fdd074;
  border: 1px solid #fbb017;
  text-align: center;
  color: white;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  margin: 5px 10px 5px 0px;
}
</style>
