import Vue from 'vue';
import Vuex from 'vuex';

import chat from './modules/chat';
import news from './modules/news';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    news,
    chat
  }
});
