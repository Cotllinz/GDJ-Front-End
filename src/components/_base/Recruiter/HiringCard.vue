<template>
  <div>
    <div>
      <b-card class="card-style">
        <div class="images d-flex justify-content-center">
          <b-img
            rounded="circle"
            fluid
            :src="require('../../../assets/img/photo.png')"
            alt="Image"
            class="profile-img"
          ></b-img>
        </div>
        <div class="info">
          <h4 style="font-weight:600">Louis Tomlinson</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci.
          </p>
          <div style="font-size:15px;color:#AAACB0">
            <p>Purwokerto, Jawa Tengah</p>
            <b-card-text style="margin-top:20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
              Curabitur eu lacus fringilla, vestibulum risus at.
            </b-card-text>
          </div>
        </div>
        <div class="skills">
          <h4 style="font-weight:600; margin-top:30px;">Skill</h4>
          <b-button class="skill" size="sm">Phyton</b-button>
          <b-button class="skill" size="sm">Laravel</b-button>
          <b-button class="skill" size="sm">Golang</b-button>
          <b-button class="skill" size="sm">PHP</b-button>
          <b-button class="skill" size="sm">Cotlin</b-button>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
.card-style {
  border-radius: 8px;
  border: none;
  padding: 10px;
  box-shadow: 0px 15px 20px rgba(66, 66, 66, 0.432);
}
.btnstyle {
  background-color: #5e50a1;
  font-weight: 700;
  border: none;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.profile-img {
  width: 155px;
  height: 155px;
  margin-top: 15px;
  margin-bottom: 30px;
}
.skill {
  background-color: #fdd074;
  border: 1px solid #fbb017;
  text-align: center;
  color: white;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px 10px 10px 0px;
}
.text-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
