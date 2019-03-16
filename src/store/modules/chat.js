export default {
  state: {
    chats: [
      {
        id: 0,
        title: "Чат с Егором"
      },
      {
        id: 1,
        title: "Чат с Оксаной"
      }
    ],
    messages: [
      {
        id: 0,
        from: 1,
        chat: 0,
        text: "Привет, Егор"
      },
      {
        id: 1,
        from: 2,
        chat: 0,
        text: "Здравствуйте, ВА"
      }
    ]
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
    sendMessage({ state, commit }, message) {
      // Отправляем новость на сервер
      // Ждём ответа
      // Вызываем мутацию
    }
  },

  mutations: {
    setMessages(state, news) {
      state.news = news;
    }
  }
};
