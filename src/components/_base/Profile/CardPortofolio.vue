<template>
  <div>
    <div
      class="portofolio"
      style="margin-top:20px;margin-bottom:20px;text-align:center"
    >
      <b-row>
        <b-col sm="12" md="6" lg="4" xl="4">
          <div class="porto-img">
            <b-img
              :src="require('../../../assets/img/portofolio1.png')"
              rounded
              alt="Rounded image"
              class="img"
            ></b-img>
            <div class="title-porto">Project management web</div>
          </div>
        </b-col>
        <b-col sm="12" md="6" lg="4" xl="4">
          <div class="porto-img">
            <b-img
              :src="require('../../../assets/img/portofolio2.png')"
              rounded
              alt="Rounded image"
              class="img"
            ></b-img>
            <div class="title-porto">Social Media App</div>
          </div>
        </b-col>
        <b-col sm="12" md="6" lg="4" xl="4">
          <div class="porto-img">
            <b-img
              :src="require('../../../assets/img/portofolio3.png')"
              rounded
              alt="Rounded image"
              class="img"
            ></b-img>
            <div class="title-porto">Reminder App</div>
          </div>
        </b-col>
        <b-col sm="12" md="6" lg="4" xl="4">
          <div class="porto-img">
            <b-img
              :src="require('../../../assets/img/portofolio4.png')"
              rounded
              alt="Rounded image"
              class="img"
            ></b-img>
            <div class="title-porto">Project management web</div>
          </div>
        </b-col>
        <b-col sm="12" md="6" lg="4" xl="4">
          <div class="porto-img">
            <b-img
              :src="require('../../../assets/img/portofolio5.png')"
              rounded
              alt="Rounded image"
              class="img"
            ></b-img>
            <div class="title-porto">Social Media App</div>
          </div>
        </b-col>
        <b-col sm="12" md="6" lg="4" xl="4">
          <div class="porto-img">
            <b-img
              :src="require('../../../assets/img/portofolio6.png')"
              rounded
              alt="Rounded image"
              class="img"
            ></b-img>
            <div class="title-porto">Reminder App</div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portofolio'
}
</script>

<style scoped>
.title-porto {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 25px;
}
.img {
  max-width: 100%;
  height: auto;
}
</style>
