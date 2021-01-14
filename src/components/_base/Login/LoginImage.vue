<template>
  <div id="main">
    <div id="wrapper">
      <div class="image">
        <div class="text1 animate__animated animate__fadeInDown animates">
          <img
            class="imageStyle"
            src="@/assets/images/icons/WhiteGDJicon.png"
          />
          Get Dream Job
        </div>
        <div class="text2 animate__animated animate__fadeInDown animates">
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
.animates {
  --animate-duration: 2s;
}
#main {
  padding: 50px;
  padding-top: 35px;
}
#wrapper {
  background-image: url('../../../assets/images/loginPage/login-image.png');
  height: 920px;
  background-size: cover;
  object-position: 45%;
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
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
}
.text1 img {
  width: 30px;
}
.text2 {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 44px;
  line-height: 70px;
  padding: 70px;
  margin-top: 200px;
}
@media (max-width: 1366px) {
  .text2 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 44px;
    line-height: 70px;
    padding: 70px;
    margin-top: 50px;
  }
}

@media (max-width: 1050px) {
  .text2 {
    font-size: 37px;
    line-height: 50px;
  }
}
@media (max-width: 1000px) {
  .text2 {
    color: transparent;
  }
  #wrapper {
    background-size: cover;
  }
}
@media (max-width: 576px) {
  #wrapper {
    background-image: none;
    height: 0px;
  }
  .image {
    background: none;
  }
  #main {
    padding: 5px;
    padding-top: 20px;
  }
}
</style>
