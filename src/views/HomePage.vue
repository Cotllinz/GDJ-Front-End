<template>
  <div class="HomePage fontstyle" style="background-color: #F6F7F8">
    <div class="top">
      <b-container><h3>Top Jobs</h3></b-container>
    </div>
    <b-container>
      <SearchSort />
      <Card />
    </b-container>
  </div>
</template>
<script>
import SearchSort from '../components/_base/HomePage/SearchSort'
import Card from '../components/_base/HomePage/Card'
export default {
  name: 'HomePage',
  components: {
    SearchSort,
    Card
  },
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

.top {
  background-color: #60529f;
  padding: 15px 0px 15px 0px;
  color: white;
}
</style>
