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
    <div v-for="message in messages" :key="message.id">
      <div>{{message.text}}</div>
    </div>
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
    messageText: ""
  }),
  computed: {
    ...mapState({
      chats: state => state.chat.chats,
      users: state => state.users.users
    }),
    ...mapGetters(["chatMessages"]),
    messages() {
      return this.$store.state.chat.messages.filter(
        m => m.to === this.userChatId || m.from === this.userChatId
      );
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions(["sendMessage", "getUsers"]),
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
