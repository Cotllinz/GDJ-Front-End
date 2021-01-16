<template>
  <div>
    <b-card class="card-style p-0">
      <h6 class="title space-card">Firman Azhar R</h6>
      <hr />
      <div class="space-card">
        <div class="left-conversation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident at
          eaque ex. Quas tenetur, alias,
        </div>
        <div class="right-conversation">
          sint vel officiis atque
        </div>
      </div>
      <div class="enter-chat space-chat centered">
        <b-form-input
          type="text"
          class="input-chat"
          placeholder="Write your message here ..."
        ></b-form-input>
        <div style="font-size: 35px;">
          <b-icon
            icon="cursor-fill"
            class="rounded-circle p-2"
            style="background-color:#5E50A1"
            variant="light"
          ></b-icon>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'ChatConversation',
  data() {
    return {
      chat: [1, 2, 3]
    }
  },
  methods: {}
}
</script>

<style scoped>
.left-conversation {
  float: left;
  max-width: 550px;
  background-color: #f6f7f8;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.right-conversation {
  float: right;
  max-width: 550px;
  background-color: #867cb8;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  color: white;
}
.centered {
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 650px;
  width: 730px;
}
.input-chat {
  border-radius: 20px;
  margin-right: 20px;
}

.chat-text {
  font-size: 13.5px;
}
.card-style {
  border-radius: 5px;
  border: none;
  padding: 10px 10px 0px 10px;
  margin-top: 30px;
  height: 600px;
}
.title {
  font-weight: 600;
}
.card-body {
  padding: 0px;
}
.space-card {
  padding: 20px 20px 0px 20px;
}
.space-chat {
  padding: 0px 20px 0px 20px;
}

@media screen and (max-width: 600px) {
  .left-conversation {
    float: left;
    max-width: 250px;
  }
  .right-conversation {
    float: right;
    max-width: 250px;
  }
  .centered {
    height: 550px;
    width: 320px;
  }
}
</style>
