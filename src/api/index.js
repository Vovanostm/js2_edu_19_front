import axios from 'axios';

const endpoint = "/api";

axios.interceptors.request.use(
  function(config) {
    config.headers["Authorization"] = localStorage.getItem("jwt");
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default {
  urls: {
    news: endpoint + "/news",
    users: endpoint + "/users",
    login: endpoint + "/auth/login",
    logout: endpoint + "/auth/logout",
    uploads: endpoint + "/uploads",
    chats: endpoint + "/chats",
    messages: endpoint + "/chats/messages"
  },
  axios: axios
};
