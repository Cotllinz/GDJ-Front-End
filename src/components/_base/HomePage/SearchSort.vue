<template>
  <div class="search fontstyle">
    <div class="search-menu">
      <b-input-group
        class="shadow"
        style="border-radius:10px;background-color:white"
      >
        <input
          class="input"
          type="text"
          v-model="searchData"
          v-on:keyup.enter="search()"
          autocomplete="off"
          placeholder="Search for any skill . . ."
        />
        <template #append>
          <b-dropdown text="Kategori" variant="outline-none" class="btn-sort">
            <b-dropdown-item @click="sorting('fullname_pekerja asc')"
              >Sortir berdasarkan nama</b-dropdown-item
            >
            <b-dropdown-item @click="sortSkills"
              >Sortir berdasarkan Skill</b-dropdown-item
            >
            <b-dropdown-item @click="sorting('city_pekerja asc')"
              >Sortir berdasarkan Lokasi</b-dropdown-item
            >
            <b-dropdown-item @click="sortStatus('Freelance')"
              >Sortir berdasarkan freelance</b-dropdown-item
            >
            <b-dropdown-item @click="sortStatus('Full Time')"
              >Sortir berdasarkan fulltime</b-dropdown-item
            >
          </b-dropdown>
          <b-button text="Button" class="btn-search">Search</b-button>
        </template>
      </b-input-group>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'SearchSort',
  data() {
    return {
      searchData: ''
    }
  },
  methods: {
    ...mapActions(['getPekerja', 'getPekerjabySkill', 'getPekerjabySearch']),
    ...mapMutations([
      'changeSort',
      'handlePage',
      'changeStatus',
      'changeSearch'
    ]),
    sorting(event) {
      this.handlePage(1)
      this.changeSort(event)
      this.getPekerja('order by  ' + event)
    },
    sortStatus(event) {
      this.handlePage(1)
      this.changeStatus(event)
      this.getPekerja(`where job_require = '${event}'`)
    },
    sortSkills() {
      this.handlePage(1)
      this.getPekerjabySkill()
    },
    search() {
      if (this.searchData.length >= 0) {
        this.handlePage(1)
        this.changeSearch(this.searchData)
        this.getPekerjabySearch(this.searchData)
      } else {
        return this.$swal('warning', 'Min Search 3 or more text', 'error')
      }
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
  outline: none;
  border: none;
  width: 79.8%;
  padding: 15px 20px 15px 20px;
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
@media (max-width: 1200px) {
  .input {
    border: none;
    width: 75.5%;
    outline: none;
    padding: 15px 20px 15px 20px;
    border-radius: 10px;
  }
}
@media (max-width: 991px) {
  .input {
    border: none;
    width: 67.5%;
    outline: none;
    padding: 15px 20px 15px 20px;
    border-radius: 10px;
  }
}
@media (max-width: 576px) {
  .input {
    border: none;
    width: 38%;
    outline: none;
    padding: 15px 20px 15px 20px;
    border-radius: 10px;
  }
}
@media (max-width: 393px) {
  .input {
    border: none;
    width: 31%;
    outline: none;
    padding: 15px 20px 15px 20px;
    border-radius: 10px;
  }
}
</style>
