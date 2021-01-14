<template>
  <div class="wrapper">
    <div class="detail">
      <h1>Hubungi Lous Tomlinson</h1>
      <p style="margin-top: 30px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit In euismod ipsum
        et dui rhoncus auctor. In euismod ipsum et dui rhoncus auctor.
      </p>
    </div>
    <div class="form">
      <div class="inputTitle" style="margin-top: 50px">
        Tujuan tentang pesan ini
        <label for="tujuan">Example select</label>
        <select class="form-control" id="tujuan">
          <option>Projek</option>
          <option>Full Time</option>
          <option>Part-Time</option>
          <option>Internship</option>
        </select>
      </div>
      <div class="inputTitle">
        Nama Lengkap
        <div>
          <b-form-input
            class="input"
            type="text"
            placeholder="Masukan nama lengkap"
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle">
        Email
        <div>
          <b-form-input
            class="input"
            type="email"
            placeholder=" Masukan email "
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle">
        No Handpone
        <div>
          <b-form-input
            class="input"
            type="tel"
            placeholder=" Masukan no handpone "
          ></b-form-input>
        </div>
      </div>
      <div class="inputTitle">
        Deskripsi
        <div>
          <textarea
            style="width: 100%"
            class="input"
            type="textarea"
            placeholder=" Deskripsikan/jelaskan lebih detail  "
            rows="6"
          ></textarea>
        </div>
      </div>
      <button class="buttonHire">Hire</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 45px;
  padding-bottom: 10px;
  padding-top: 25px;
}
.inputTitle {
  color: #9ea0a5;
  margin-top: 20px;
}
.buttonHire {
  width: 100%;
  height: 60px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: orange;
  color: white;
}
@media screen and (max-width: 767px) {
  .wrapper {
    padding: 30px;
    margin-top: 65px;
    border-radius: 10px;
    box-shadow: 0px 15px 20px rgba(66, 66, 66, 0.432);
  }
}
</style>
