import api from '@/api';

export default {
  state: {
    chats: [],
    messages: []
  },

  getters: {
    chatMessages: state => id => {
      //ф-ция chatMessages возвращает функцию, которая
      //принимает id и возвращает все сообщения в chat
      //с этим id
      return state.messages.filter(message => message.chat == id);
    }
  },

  actions: {
    getChats({commit}) {
      return api.axios.get(api.urls.chats)
      .then(res => {
        commit("setChats", res.data)
        return res.data
      })
    },
    getMessages({ state, commit }) {
      return api.axios.get(api.urls.messages)
      .then(res => {
        commit("setMessages", res.data)
        return res.data
      })
    },
    sendMessage({ state, commit }, message) {
      return api.axios.post(api.urls.messages, message)
      .then(res => {
        let messages = state.messages.concat()
        messages.push(res.data)
        commit("setMessages", messages)
        return res.data
      })
    }
  },

  mutations: {
    setChats(state, chats) {
      state.chats = chats;
    },
    setMessages(state, messages) {
      state.messages = messages;
    }
  }
};
