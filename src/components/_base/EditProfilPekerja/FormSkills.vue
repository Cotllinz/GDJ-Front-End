<template>
  <div>
    <b-card class="card-style">
      <h5 style="font-weight:bold" class="card-margin">Skill</h5>
      <hr />
      <div class="card-margin input-color">
        <b-input-group>
          <b-form-input
            v-model="skill"
            type="text"
            required
            placeholder="Javascript"
            class="input-style skill"
          ></b-form-input>
          <b-input-group-append>
            <b-button @click="addSkill(skill)" class="btn-style"
              >Simpan</b-button
            >
          </b-input-group-append>
        </b-input-group>
        <b-button-group
          v-for="(item, index) in listSkill"
          :key="index"
          class="group-list-skill"
        >
          <b-button variant="warning" class="list-skill" size="sm">{{
            item
          }}</b-button>
          <b-button
            @click="removeSkill(index)"
            variant="outline-danger"
            class="list-skill"
            size="sm"
            >x</b-button
          >
        </b-button-group>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'FormDataSkils',
  data() {
    return {
      skill: '',
      listSkill: []
    }
  },
  methods: {
    addSkill(input) {
      this.listSkill.push(input)
    },
    removeSkill(index) {
      this.listSkill.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.btn-style {
  border: none;
  color: white;
  background-color: #fbb017;
}
.card-style {
  border-radius: 8px;
  border: none;
  padding: 10px 10px 0px 10px;
  margin-top: 30px;
  padding: 0px;
}
.card .card-body {
  padding: 0px;
}
.card-margin {
  margin: 30px 30px 20px 30px;
}
.input-style {
  padding: 25px 20px 25px 20px;
  margin-bottom: 30px;
}
.input-style:focus {
  box-shadow: 0 0 0 0.2rem rgba(169, 125, 240, 0.384);
  border-color: #5e50a1;
}
.skill:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 188, 87, 0.384);
  border-color: #fbb017;
}
.input-color {
  color: #b3b8bd;
}
.list-skill {
  background-color: #fdd074;
  border: 1px solid #fbb017;
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 10px;
}
.group-list-skill {
  margin: 20px 10px 5px 0px;
}
</style>
