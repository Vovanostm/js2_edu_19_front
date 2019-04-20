import api from '@/api';

export default {
  state: {
    news: []
  },
  actions: {
    uploadImage({}, formData) {
      // Отправляем новость на сервер
      return api.axios
        .put(api.urls["uploads"] + "/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          return res.data;
        });
    }
  }
};
