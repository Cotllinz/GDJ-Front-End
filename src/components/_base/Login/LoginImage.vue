<template>
  <div id="main">
    <div id="wrapper">
      <div class="image">
        <div class="text1">
          <img src="@/assets/logo.png" />
          Get Dream Job
        </div>
        <div class="text2">
          Temukan developer berbakat & terbaik di berbagai bidang keahlian
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginImage'
}
</script>

<style scoped>
#main {
  padding: 50px;
  padding-top: 35px;
}
#wrapper {
  background-image: url('../../../assets/login-image.png');
  height: 820px;
  overflow: hidden;
  color: #ffffff;
}
.image {
  background: rgba(8, 107, 199, 0.726);
  overflow: hidden;
  height: 100%;
  z-index: 2;
}
.text1 {
  padding-top: 50px;
  padding-left: 50px;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
}
.text2 {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 44px;
  line-height: 70px;
  padding: 70px;
  padding-top: 190px;
}
@media (max-width: 1000px) {
  .text2 {
    color: transparent;
  }
}
@media (max-width: 500px) {
  #main {
    padding: 5px;
    padding-top: 20px;
  }
}
</style>
