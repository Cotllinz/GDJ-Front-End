<template>
  <div>
    <div>
      <b-card class="card-style">
        <div class="images d-flex justify-content-center">
          <b-img
            rounded="circle"
            fluid
            :src="require('@/assets/img/photo.png')"
            alt="Image"
            class="profile-img"
          ></b-img>
        </div>
        <div class="editProfile">
          <img src="@/assets/images/icons/pencilEditGrey.png" />
          Edit
        </div>
        <div class="info">
          <h4 style="font-weight:600">PT. Martabat Jaya Abadi</h4>
          <p>
            Financial
          </p>
          <div style="font-size:15px;color:#AAACB0">
            <p>
              <img src="@/assets/images/icons/map.png" /> Purwokerto, Jawa
              Tengah
            </p>
          </div>
        </div>
      </b-card>
      <div class="buttonBawah">
        <button class="simpan" style="color:white; background-color:#5e50a1">
          Simpan
        </button>
      </div>
      <div class="buttonBawah">
        <button class="batal" style="  margin-top: 20px;">Batal</button>
      </div>
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
  box-shadow: 0px 10px 10px rgba(66, 66, 66, 0.432);
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
.editProfile {
  color: grey;
  text-align: center;
  margin-bottom: 20px;
}
.profile-img {
  width: 155px;
  height: 155px;
  margin-top: 15px;
  margin-bottom: 10px;
}
.text-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.buttonBawah button {
  width: 100%;
  margin-top: 25px;
  height: 55px;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0px 10px 10px rgba(66, 66, 66, 0.432);
}
.batal {
  color: #5e50a1;
  border: #5e50a1 solid 2px;
  background-color: transparent;
  margin-top: 2px;
}
</style>
