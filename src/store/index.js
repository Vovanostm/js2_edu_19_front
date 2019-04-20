import Vue from 'vue';
import Vuex from 'vuex';

import chat from './modules/chat';
import files from './modules/files';
import news from './modules/news';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    news,
    chat,
    users,
    files
  }
});
