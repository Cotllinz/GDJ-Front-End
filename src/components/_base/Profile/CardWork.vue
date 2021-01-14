<template>
  <div>
    <div>
      <div class="work" style="margin-top:20px;margin-bottom:20px;">
        <b-row style="margin-bottom:20px">
          <b-col sm="2" md="2" lg="2" xl="2">
            <div class="work-img">
              <b-img
                :src="require('../../../assets/img/work1.png')"
                rounded
                alt="Rounded image"
                class="img"
              ></b-img>
            </div>
          </b-col>
          <b-col sm="10" md="10" lg="10" xl="10">
            <div class="work-exp">
              <h5 style="font-weight:600">Engineer</h5>
              <h5>Tokopedia</h5>
              <h5 style="color:#9EA0A5">July 2019 - January 2020 6 months</h5>
              <div class="work-des">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur necessitatibus cum cumque eligendi dignissimos
                nesciunt accusamus, quod blanditiis temporibus quas. Eligendi
                magni repudiandae quas sapiente voluptatum consequuntur unde
                culpa ut.
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="2" md="2" lg="2" xl="2">
            <div class="work-img">
              <b-img
                :src="require('../../../assets/img/work1.png')"
                rounded
                alt="Rounded image"
                class="img"
              ></b-img>
            </div>
          </b-col>
          <b-col sm="10" md="10" lg="10" xl="10">
            <div class="work-exp">
              <h5 style="font-weight:600">Web Developer</h5>
              <h5>Tokopedia</h5>
              <h5 style="color:#9EA0A5">July 2019 - January 2020 6 months</h5>
              <div class="work-des">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur necessitatibus cum cumque eligendi dignissimos
                nesciunt accusamus, quod blanditiis temporibus quas. Eligendi
                magni repudiandae quas sapiente voluptatum consequuntur unde
                culpa ut.
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work'
}
</script>

<style scoped>
.img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}
h5 {
  line-height: 20px;
}
.work-des {
  border-bottom: 2px solid#F0F2F6;
  padding-bottom: 20px;
  margin-top: 20px;
}
</style>
