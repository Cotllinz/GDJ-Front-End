<template>
  <div>
    <div v-if="chatMode === true">
      <b-card class="card-style p-0">
        <h6 class="title space-card">{{ chatActive.username }}</h6>
        <hr />
        <div class="space-card">
          <div class="left-conversation">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            at eaque ex. Quas tenetur, alias,
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
    <div v-else>
      <b-card class="card-style p-0">
        <h6 class="title space-card"></h6>
        <hr />
        <div
          style="display:flex;align-items:center;justify-content:center;margin-top:200px"
        >
          Pilih Chat untuk memulai
        </div>
        <div class="space-card"></div>
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import io from 'socket.io-client'
export default {
  name: 'ChatConversation',
  data() {
    return {
      chat: 1,
      socket: io(`http://${process.env.VUE_APP_PORT}`, {
        withCredentials: true,
        extraHeaders: {
          'terbangin-header': 'ini terbangin header'
        }
      }),
      message: '',
      URL: `http://${process.env.VUE_APP_URL}`
    }
  },
  created() {
    this.getUserProfile(this.user.userId)
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      chatMode: 'getterChatMode',
      chatActive: 'getterChatActive',
      activeRoom: 'getterActiveRoom',
      messages: 'getterMessages',
      messagesHistory: 'getterMessagesHistory',
      profile: 'setProfile'
    })
  },
  methods: {
    ...mapActions(['sendMessages', 'getChatRoom', 'getUserProfile']),
    sendMessage() {
      const setData = {
        sender: this.user.userId,
        message: this.message,
        room: this.chatActive.roomIdUniq,
        senderPic: this.profile.profileImage,
        receiverPic: this.chatActive.profileImage
      }
      this.socket.emit('roomMessage', setData)
      const dataMessage = {
        roomIdUniq: this.chatActive.roomIdUniq,
        sender: this.user.userId,
        receiver: this.chatActive.userId,
        message: this.message
      }
      this.sendMessages(dataMessage)
      this.message = ''
      this.getChatRoom(this.user.userId)
    }
  }
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
