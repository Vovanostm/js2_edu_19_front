<template>
  <div>
    <h2>Чат</h2>
    <div>
      <h4>Список пользователей:</h4>
      <div v-for="(user, key) in users" :key="key">
        <v-btn @click="userChatId = user._id">{{user.username}}</v-btn>
      </div>
    </div>
    <h3>Вы общаетесь с {{userChatId}}</h3>
    <div v-for="chat in chats" :key="chat.id">
      {{chat}}
      <v-btn flat color="orange" @click="chatId = chat.id">Открыть чат</v-btn>
    </div>
    <h2>Сообщения</h2>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card  v-for="message in messages" :key="message.id" class="ma-2">
          <v-card-title primary-title :class="{'is-my': message.from === currentUserId }">
              <div> {{ message.text }} </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-text-field v-model="messageText" type="text"></v-text-field>
    <v-btn @click="send">Отправить</v-btn>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Chat",
  data: () => ({
    chatId: -1,
    userChatId: null,
    messageText: "",
    users: [],
    currentUserId: -1,
    username: ""
  }),
  computed: {
    ...mapState({
      chats: state => state.chat.chats,
    }),
    ...mapGetters(["chatMessages"]),
    messages() {
      return this.$store.state.chat.messages.filter(
        m => m.to === this.userChatId || m.from === this.userChatId
      );
    }
  },
  created() {
    this.username = localStorage.getItem('username')
    this.getUsers().then((res) => {
      console.log(this.username)
      this.users = this.$store.state.users.users.filter(user => user.username !== this.username)
      this.currentUserId = this.$store.state.users.users.find(user => user.username === this.username)._id
    });
    this.getMessages();
    
  },
  methods: {
    ...mapActions(["sendMessage", "getUsers", "getMessages"]),
    send() {
      this.sendMessage({
        to: this.userChatId,
        chat: "",
        text: this.messageText
      });
    }
  }
};
</script>

<style>
.is-my {
  background: rgb(213, 236, 255);
  text-align: right;
  width: 100%;
  justify-content: right;
}
</style>

