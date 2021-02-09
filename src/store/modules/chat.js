import axios from 'axios'

export default {
  state: {
    admin: [],
    chatActive: {},
    chatMode: false,
    messages: [],
    messagesHistory: [],
    activeRoom: null,
    chatRoom: []
  },
  mutations: {
    setChatActive(state, payload) {
      state.chatActive = payload
    },
    setChatMode(state, payload) {
      state.chatMode = payload
    },
    setActiveRoom(state, payload) {
      state.activeRoom = payload
    },
    clearMessages(state) {
      state.messages = []
      state.messagesHistory = []
    },
    setChatRoom(state, payload) {
      state.chatRoom = payload
    },
    pushMessages(state, payload) {
      state.messages.push(payload)
    },
    setMessagesHistory(state, payload) {
      state.messagesHistory = payload
    }
  },
  actions: {
    createRoomChat(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .post(`https://${process.env.VUE_APP_URL}/chat/room`, payload)
          .then(result => {
            resolve(result.data.message)
          })
          .catch(error => {
            reject(error.response.data.message)
          })
      })
    },
    changeChatActive(context, payload) {
      context.commit('setChatActive', payload)
      context.commit('setChatMode', true)
    },
    getRoomId(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://${process.env.VUE_APP_URL}/chat/rooms?sender=${payload.sender}&receiver=${payload.receiver}`
          )
          .then(result => {
            context.commit('setActiveRoom', result.data.data[0].roomIdUniq)
            resolve(result.data.data[0].roomIdUniq)
          })
          .catch(error => {
            reject(error.response.data.message)
          })
      })
    },
    getChatRoom(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_URL}/chat/room/${payload}`)
          .then(result => {
            context.commit('setChatRoom', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error.response.data.message)
          })
      })
    },
    sendMessages(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .post(`https://${process.env.VUE_APP_URL}/chat/message`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response.data.message)
          })
      })
    },
    getMessagesHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://${process.env.VUE_APP_URL}/chat/message/${payload}`)
          .then(result => {
            context.commit('setMessagesHistory', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error.response.data.message)
          })
      })
    }
  },
  getters: {
    getterChatMode(state) {
      return state.chatMode
    },
    getterChatActive(state) {
      return state.chatActive
    },
    getterActiveRoom(state) {
      return state.activeRoom
    },
    getChatRoom(state) {
      return state.chatRoom
    },
    getterMessages(state) {
      return state.messages
    },
    getterMessagesHistory(state) {
      return state.messagesHistory
    }
  }
}
