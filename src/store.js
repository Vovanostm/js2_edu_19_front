import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [
      {
        title: "Хранилище",
        text: "Ура, сложная задача",
        img: ""
      }
    ]
  },
  mutations: {
    setNews(state, news) {
      state.news = news;
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
  }
});
