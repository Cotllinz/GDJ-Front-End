<template>
  <footer class="mb-2 border-top">
    <b-container>
      <b-row>
        <b-col lg="12">
          <div class="footer_desc mt-lg-4 p-lg-3 mt-2 p-3 border-bottom">
            <div class="footer_logos">
              <img
                class="logos"
                src="../assets/images/icons/WhiteGDJicon.png"
                alt="logo"
              />
              G<span>et</span>D<span>ream</span>J<span>ob</span>
            </div>
            <p class="mt-lg-3 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </div>
        </b-col>

        <b-col>
          <div class="d-flex bd-highlight flex-column flex-lg-row">
            <div class="p-2 mt-lg-2 flex-grow-1 footer_descBottom bd-highlight">
              <p>2021 GetDreamJob. All right reserved</p>
            </div>
            <div class="mobile_footer">
              <div class="p-2 bd-highlight footer_descBottom mt-lg-2">
                <a href="tel:+62898928XXX">Telepon</a>
              </div>
              <div class="p-2 bd-highlight ml-lg-5 footer_descBottom mt-lg-2">
                <a href="mailto: teamGDJ@example.com">Email</a>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
footer {
  background: #5e50a1;
}
.footer_logos {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 25px;
  text-decoration: none;
  color: #ffffff;
}
.footer_descBottom p {
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
}
.footer_descBottom a {
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
}
.footer_desc p {
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  padding-right: 65%;
}
.footer_logos span {
  font-size: 20px;
  font-weight: 500;
}
.logos {
  width: 50px;
  object-fit: contain;
}
@media (max-width: 576px) {
  .footer_desc p {
    padding-right: 0;
  }
  .footer_descBottom p {
    margin: 0;
  }
  .mobile_footer {
    display: flex;
  }
}
</style>
