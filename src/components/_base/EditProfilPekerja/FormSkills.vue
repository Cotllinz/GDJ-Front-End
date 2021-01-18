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
            <b-button @click="addSkill()" class="btn-style">Simpan</b-button>
          </b-input-group-append>
        </b-input-group>
        <b-button-group
          v-for="(item, index) in skillPekerja"
          :key="index"
          class="group-list-skill"
        >
          <b-button variant="warning" class="list-skill" size="sm">{{
            item.skill_name
          }}</b-button>
          <b-button
            @click="removeSkill(index, item.id)"
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
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'FormDataSkils',
  data() {
    return {
      results: '',
      skill: '',
      idUser: 1,
      listSkill: []
    }
  },
  created() {
    this.getSkills(1)
  },
  computed: {
    ...mapGetters(['skillPekerja'])
  },
  methods: {
    ...mapActions(['addSkillPekerja', 'deleteSkill', 'getSkills']),
    addSkill() {
      const data = {
        skill_name: this.skill,
        id_pekerja: this.idUser
      }
      this.listSkill.push(data)
      this.addSkillPekerja(this.listSkill)
        .then(result => {
          this.results = result
          this.listSkill = []
          this.getSkills(1)
        })
        .catch(error => {
          console.log(error)
        })
    },
    removeSkill(index, id) {
      const data = {
        id_pekerja: this.idUser,
        id: id
      }
      this.deleteSkill(data)
        .then(result => {
          this.getSkills(1)
          this.results = result
        })
        .catch(error => {
          console.log(error)
        })
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
