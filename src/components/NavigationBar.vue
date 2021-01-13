<template>
  <div>
    <b-container>
      <b-navbar toggleable="lg">
        <b-navbar-brand
          ><router-link tag="a" to="/"
            >Get Dreams Job</router-link
          ></b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <button class="btn_signin" type="button">Masuk</button>
            <button class="btn_signup" type="button">Daftar</button>
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
<style scoped></style>
