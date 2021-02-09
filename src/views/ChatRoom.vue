<template>
  <div>
    <div class="profiles fontstyle">
      <Navbar />
      <div class="page">
        <b-container>
          <b-row>
            <b-col sm="12" md="4" lg="4">
              <ListChat />
            </b-col>
            <b-col sm="12" md="8" lg="8">
              <ConversationChat />
              <!-- <Notif /> -->
            </b-col>
          </b-row>
        </b-container>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import ListChat from '../components/_base/ChatRoom/ChatList'
// import Notif from '../components/_base/Nofitication/Notif'
import ConversationChat from '../components/_base/ChatRoom/ChatConversation'
import Navbar from '../components/NavigationBar'
import Footer from '../components/Footer'
export default {
  name: 'ChatRoom',
  components: {
    // Notif,
    ListChat,
    ConversationChat,
    Navbar,
    Footer
  },
  created() {},
  data() {
    return {
      type: 1
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
.page {
  background: linear-gradient(180deg, #5e50a1 3%, #f6f7f8 40%);
  padding: 40px 0px 80px 0px;
}
.fontstyle {
  font-family: 'Open Sans', sans-serif;
}
.card-style {
  border-radius: 8px;
  border: none;
  padding: 10px;
  margin-top: 30px;
}
</style>
