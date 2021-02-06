<template>
  <div class="Notification">
    <b-card class="Notif_hire">
      <b-body>
        <div class="title d-flex align-content-center">
          <h5>Notification</h5>
          <a class="clear_notif ml-auto">Clear</a>
        </div>
        <div class="notif_body pr-2">
          <div class="d-flex align-items-center">
            <img
              class="image_setting"
              src="https://images.unsplash.com/photo-1586554993921-b670f27646d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
              alt="images"
            />
            <section class="desc_title mt-lg-2 ml-2">
              <h5 class="pt-lg-2">Hi, I'm from Arkademy</h5>
              <p>I wan't recruit you to join in my company for Fulltime</p>
            </section>
            <section class="time_desc">
              <p>18.00</p>
            </section>
          </div>
        </div>
      </b-body>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'Notif'
}
</script>
<style scoped>
.Notification {
  position: absolute;
  z-index: 1;
  top: 40px;
  left: -140px;
}
.Notif_hire {
  border-radius: 13px;
  width: 450px;
}
.notif_body {
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.notif_body::-webkit-scrollbar {
  width: 5px;
}
.notif_body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.notif_body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.image_setting {
  width: 60px;
  object-fit: cover;
  background-size: cover;
  object-position: 45%;
  border-radius: 10px;
}
.desc_title {
  font-family: 'Poppins', sans-serif;
}
.desc_title h5 {
  font-size: 17px;
}
.desc_title p {
  font-size: 15px;
}
.title {
  font-family: 'Poppins', sans-serif;
}
.title a {
  text-decoration: none;
}
.time_desc p {
  font-family: 'Poppins', sans-serif;
  margin-top: -33px;
}
</style>
