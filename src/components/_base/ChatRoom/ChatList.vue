<template>
  <div>
    <b-card class="card-style p-0">
      <h6 class="title space-card">Chat</h6>
      <hr />
      <div v-if="chat.length !== 0" class="chat-list">
        <b-row
          class="space-chat"
          v-for="(item, index) in chat"
          :key="index"
          @click="chatThisUser(item)"
        >
          <b-col cols="2">
            <div class="img-chat">
              <b-img
                rounded="circle"
                alt="Not Chat"
                :src="require('../../../assets/img/photo.png')"
                class="img-round"
              ></b-img>
            </div>
          </b-col>
          <b-col cols="10">
            <div class="chat-info">
              <div class="chat-name">
                <h6 style="font-weight:bold">{{ item.username }}</h6>
                <h6 class="chat-text" style="color:#939393">
                  {{ item.createdAt.slice(0, 10) }}
                </h6>
              </div>
              <div class="chat-text" style="color:#666666">
                {{ item.message.slice(0, 20) }} ..
              </div>
            </div>
            <hr />
          </b-col>
        </b-row>
      </div>
      <div v-else>
        <div class="centered">
          <b-img
            rounded="0"
            alt="Not Chat"
            :src="require('../../../assets/img/no-chat-img.png')"
            class="img"
          ></b-img>
          <h6 class="title" style="margin-top:10px">Belum ada chat</h6>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import io from 'socket.io-client'
export default {
  name: 'ChatList',
  data() {
    return {
      role: 0,
      socket: io(`https://${process.env.VUE_APP_URL}`, {
        path: '/gdj/socket.io',
        transports: ['websocket']
      }),
      room: '',
      oldRoom: '',
      roomId: null,
      URL: `https://${process.env.VUE_APP_URL}`
    }
  },
  created() {
    this.getChatRoom(this.user.id_user)
    this.socket.on('chatMessage', async data => {
      this.pushMessages(data)
      await this.getChatRoom(this.user.id_user)
    })
  },
  computed: {
    ...mapGetters({
      chat: 'getChatRoom',
      user: 'getUserData'
    })
  },
  methods: {
    ...mapActions([
      'changeChatActive',
      'createRoomChat',
      'getRoomId',
      'getChatRoom',
      'getMessagesHistory'
    ]),
    ...mapMutations(['clearMessages', 'pushMessages']),

    async makeRoom(item) {
      const setData = {
        sender: this.user.id_user,
        receiver: item.id_user
      }
      await this.createRoomChat(setData)
        .then(result => {
          this.$toasted.success(result)
          this.getChatRoom(this.user.id_user)
        })
        .catch(error => {
          this.$toasted.error(error)
        })
    },
    chatThisUser(item) {
      this.changeChatActive(item)
      const data = item.roomIdUniq
      this.getMessagesHistory(data)
      if (this.oldRoom) {
        this.clearMessages()
        this.socket.emit('changeRoom', {
          username: this.user.fullName,
          room: data,
          oldRoom: this.oldRoom
        })
        this.oldRoom = item.roomIdUniq
      } else {
        this.clearMessages()
        this.socket.emit('joinRoom', {
          username: this.user.fullName,
          room: data
        })
        this.oldRoom = data
      }
    }
  }
}
</script>

<style scoped>
.chat-list {
  cursor: pointer;
}
.chat-info {
  margin-left: 10px;
  margin-top: 6px;
}
.chat-name {
  display: flex;
  justify-content: space-between;
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
.img {
  width: 100%;
  height: auto;
  max-width: 200px;
}
.img-round {
  width: auto;
  height: 55px;
}
.centered {
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 450px;
  flex-direction: column;
}
</style>
