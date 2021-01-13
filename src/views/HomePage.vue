<template>
  <div class="HomePage fontstyle" style="background-color: #F6F7F8">
    <div class="top">
      <b-container><h3>Top Jobs</h3></b-container>
    </div>
    <b-container>
      <div class="search-menu">
        <b-input-group
          class="shadow"
          style="border-radius:10px;background-color:white"
        >
          <b-form-input class="input" autocomplete="off"></b-form-input>
          <template #append>
            <b-dropdown text="Kategori" variant="outline-none" class="btn-sort">
              <b-dropdown-item>Action C</b-dropdown-item>
              <b-dropdown-item>Action D</b-dropdown-item>
            </b-dropdown>
            <b-button text="Button" class="btn-search">Search</b-button>
          </template>
        </b-input-group>
      </div>
      <b-row>
        <b-col
          xs="12"
          cols="12"
          sm="6"
          md="3"
          lg="3"
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
                  :src="require('../assets/img/photo.png')"
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
    </b-container>
  </div>
</template>
<script>
//import
export default {
  name: 'HomePage',
  components: {},
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
.shadow {
  -webkit-box-shadow: 0px 0px 20px -4px rgba(148, 148, 148, 1);
  -moz-box-shadow: 0px 0px 20px -4px rgba(148, 148, 148, 1);
  box-shadow: 0px 0px 20px -4px rgba(148, 148, 148, 1);
}
.input {
  border: none;
  padding: 25px 20px 27px 20px;
  border-radius: 10px;
}
.input:focus {
  box-shadow: 0 0 0 0rem rgba(255, 255, 255, 0);
  border-color: #7d4f2a;
}
.btn-search {
  background-color: #5f52a0;
  padding: 10px 25px 10px 25px;
  margin: 5px;
  border: none;
  border-radius: 5px;
}
.btn-sort {
  margin: 5px;
  border: none;
  border-left: 1px solid #d2d2d2;
}
.search-menu {
  margin: 30px 0px 30px 0px;
}
.top {
  background-color: #60529f;
  padding: 15px 0px 15px 0px;
  color: white;
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
