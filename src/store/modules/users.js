import api from '@/api';

export default {
  state: {
    users: []
  },
  actions: {
    getUsers({commit}) {
      api.axios.get(api.urls.users)
      .then(res => {
        commit("setUsers", res.data)
        return res.data
      })

    },
    createUser({ state, commit }, user) {
        api.axios.post(api.urls.users, user)
    },
    login({ state, commit }, user) {
        api.axios.post(api.urls.login, user).then((res) => {
            localStorage.setItem('jwt', res.data)
        })
    }
  },

  mutations: {
    setUsers(state, users) {
      state.users = users
    }
  }
};
