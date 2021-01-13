<template>
  <div>
    <b-container>
      <b-navbar toggleable="lg">
        <b-navbar-brand
          ><router-link class="title_navbar" tag="a" to="/"
            >Get Dreams Job</router-link
          ></b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <button class="btn_signin py-lg-2 py-2 mt-lg-0 mt-3 px-lg-3 mr-lg-3" type="button">
              Masuk
            </button>
            <button class="btn_signup  px-lg-3 py-2 mt-lg-0 mb-3 mb-lg-0 mt-2 py-lg-2" type="button">
              Daftar
            </button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title_navbar {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  text-decoration: none;
  color: #5e50a1;
}
.btn_signin,
.btn_signup {
  outline: none;
  font-family: 'Poppins', sans-serif;
}
.btn_signin {
  background: none;
  border: 2px solid #5e50a1;
  border-radius: 7px;
  font-weight: 700;
  color: #5e50a1;
}
.btn_signin:hover {
  background: #5e50a1;
  transition: 250ms;
  color: #f8f8f8;
}
.btn_signup {
  background: #5e50a1;
  border: none;
  border-radius: 7px;
  font-weight: 700;
  color: #ffffff;
}
.btn_signup:hover {
  background: #5d45d8;
  transition: 250ms;
  color: #f8f8f8;
}
</style>
