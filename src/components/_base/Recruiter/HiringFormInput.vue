<template>
  <div class="wrapper">
    <div class="text">
      <img
        class="mt-3 imageStyle d-block d-md-none"
        src="@/assets/images/icons/WhiteGDJicon.png"
      />
      <h1>Hubungi Lous Tomlinson</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
        ipsum et dui rhoncus auctor.
      </p>
    </div>
    <div class="form">
      <div class="inputTitle">
        Tujuan tentang pesan ini
        <div>
          <b-form-input
            class="input"
            type="text"
            placeholder="Projek"
          ></b-form-input>
        </div>
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
.buttonHire {
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: orange;
  color: white;
}
</style>
