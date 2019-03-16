export default {
  state: {
    news: [
      {
        title: "Хранилище",
        text: "Ура, сложная задача",
        img: ""
      },
      {
        title: "Хранилище",
        text: "Ура, сложная задача",
        img: ""
      }
    ]
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
