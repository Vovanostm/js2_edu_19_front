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
        id: 0,
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
    addNews({ state, commit }, article) {
      // Отправляем новость на сервер
      // Ждём ответа
      // Вызываем мутацию
      let newNews = state.news.concat(); // Создание копии массива
      // State можно изменять только в mutations!!!
      newNews.push(article); // Добавляем новую новость в конец массива
      commit("setNews", newNews); // Изменяем состояние
    }
  },

  mutations: {
    setNews(state, news) {
      state.news = news;
    }
  }
};
