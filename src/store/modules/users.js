import api from '@/api';

export default {
  state: {},
  actions: {
    createUser({ state, commit }, user) {
        api.axios.post(api.urls.users, user)
    },
    login({ state, commit }, user) {
        api.axios.post(api.urls.login, user).then((res) => {
            localStorage.setItem('jwt', res.data)
        })
    }
  }
};
