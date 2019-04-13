import Vue from 'vue';
import Router from 'vue-router';

import Chat from './views/Chat.vue';
import Login from './views/Login.vue';
import News from './views/News.vue';
import Registration from './views/Registration.vue';
import Store from './views/Store.vue';

// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: News
    },
    {
      path: "/chat",
      component: Chat
    },
    {
      path: "/store",
      component: Store
    },
    { path: "/reg", component: Registration },
    { path: "/login", component: Login }
  ]
});
