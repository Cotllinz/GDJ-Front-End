<template>
  <div class="cards fontstyle">
    <b-row>
      <b-col
        xs="12"
        cols="12"
        sm="6"
        md="4"
        lg="4"
        xl="3"
        v-for="(item, index) in card"
        :key="index"
      >
        <b-card class="home-card">
          <div
            class="d-flex flex-lg-column align-items-center align-items-lg-start"
          >
            <div class="clearfix">
              <b-img
                left
                :src="require('../../../assets/img/photo.png')"
                rounded
                alt="Photo"
                class="card-img"
              ></b-img>
            </div>
            <div id="info" class="ml-3 ml-lg-0">
              <h5>Louis Tomlinson</h5>
              <b-card-text style="color: #DBDBDD">
                Web Developer <br />
                Lorem Ipsum
              </b-card-text>
              <div class="d-none d-lg-block">
                <b-button size="sm" class="skill">PHP</b-button>
                <b-button size="sm" class="skill">Javascript</b-button>
              </div>
            </div>
          </div>
          <div class="d-block d-lg-none">
            <b-button size="sm" class="skill">PHP</b-button>
            <b-button size="sm" class="skill">Javascript</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <div class="overflow-auto" style="padding-top:30px;padding-bottom:30px">
      <b-pagination
        align="center"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      rows: 9,
      card: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
.fontstyle {
  font-family: 'Open Sans', sans-serif;
}

.home-card {
  border-radius: 8px;
  border: none;
  margin: 15px 0px 10px 0px;
}
.card-img {
  width: 90px;
  height: 90px;
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
