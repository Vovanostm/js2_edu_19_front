import api from '@/api';

export default {
  state: {
    news: []
  },
  actions: {
    addNews({ state, commit }, article) {
      // Отправляем новость на сервер
      api.axios.put(api.urls["news"], article).then(res => {
        // Ждём ответа
        article = res.data;
        let newNews = state.news.concat(); // Создание копии массива
        // State можно изменять только в mutations!!!
        newNews.push(article); // Добавляем новую новость в конец массива
        commit("setNews", newNews); // Изменяем состояние
      });
    },
    getNews({ state, commit }) {
      api.axios.get(api.urls["news"]).then(res => {
        commit("setNews", res.data);
      });
    }
  },

  mutations: {
    setNews(state, news) {
      state.news = news;
    }
  }
};
