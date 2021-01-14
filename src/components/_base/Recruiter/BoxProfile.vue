<template>
  <div>
    <div>
      <b-card class="card-style">
        <div class="ubahLatar">
          <img src="../../../assets/images/icons/pencilEdit.png" /> Ubah Latar
        </div>
        <div class="insideComponent">
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
            <h4 style="font-weight:600">PT. Martabat Jaya Abadi</h4>
            <p>Financial</p>
            <div style="font-size:15px;color:#AAACB0">
              <p>
                <img src="@/assets/images/icons/map.png" /> Purwokerto, Jawa
                Tengah
              </p>
              <b-card-text style="margin-top:20px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </b-card-text>
            </div>
          </div>
          <b-button class="btnstyle" block @click="moveToEdit"
            >Edit Profile</b-button
          >
        </div>
        <div class="contactWrapper">
          <div class="contact">
            <p>
              <img src="@/assets/images/icons/mail.png" />
              martabatjaya@gmail.com
            </p>
            <p>
              <img src="@/assets/images/icons/instagram.png" />
              martabat_jaya
            </p>
            <p><img src="@/assets/images/icons/phone1.png" /> 0821-8190-1821</p>
            <p>
              <img src="@/assets/images/icons/mail.png" /> Martabat Jaya Abadi
            </p>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  methods: {
    moveToEdit() {
      this.$router.push('/edit-company')
    }
  }
}
</script>

<style scoped>
.ubahLatar {
  position: absolute;
  color: white;
  right: 40px;
  top: 180px;
}
.card-style {
  border-radius: 8px;
  border: none;
  padding: 10px;
  margin: 10px 10% 0px 10%;
  background: linear-gradient(180deg, #5e50a1 220px, #f6f7f8 10%);
  text-align: center;
  box-shadow: 0px 15px 20px rgba(66, 66, 66, 0.432);
}
.insideComponent {
  padding-right: 20%;
  padding-left: 20%;
}
.images {
  margin-top: 100px;
}

.btnstyle {
  background-color: #5e50a1;
  font-weight: 700;
  border: none;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: 40px auto 40px auto;
  width: 80%;
}
.profile-img {
  width: 155px;
  height: 155px;
  margin-top: 15px;
  margin-bottom: 30px;
}

.contactWrapper img {
  margin-right: 10px;
}
.contact {
  color: #9ea0a5;
  margin: auto;
  padding-bottom: 20px;
  display: inline-block;
  text-align: left;
}
@media screen and (max-width: 700px) {
  .ubahLatar {
    right: 20px;
    top: 30px;
  }
  .insideComponent {
    padding-right: 2%;
    padding-left: 2%;
  }
}
@media screen and (max-width: 500px) {
  .insideComponent {
    padding-right: 0;
    padding-left: 0;
  }
  .images {
    margin-top: 40px;
  }
  .card-style {
    padding: 0;
    margin: 0 3% 0 3%;
    background: linear-gradient(180deg, #5e50a1 160px, #f6f7f8 10%);
  }
}
</style>
