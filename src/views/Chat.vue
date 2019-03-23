<template>
  <div>
    <h2>Чат</h2>
    <div v-for="chat in chats" :key="chat.id">
      {{chat}}
      <v-btn flat color="orange" @click="chatId = chat.id">Открыть чат</v-btn>
    </div>
    <h2>Сообщения</h2>
    <div v-if="chatId >= 0">
      <div v-for="message in chatMessages(chatId)" :key="message.id">
        <div>{{message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Chat",
  data: () => ({
    chatId: -1
  }),
  computed: {
    ...mapState({
      chats: state => state.chat.chats
    }),
    ...mapGetters(["chatMessages"])
  },
  methods: {
    ...mapActions(["sendMessage"])
  }
};
</script>
