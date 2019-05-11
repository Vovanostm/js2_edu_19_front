import api from '@/api';

export default {
  state: {
    username: "Anonymus",
    users: []
  },
  getters: {
    username: () => {return localStorage.getItem('username')}
  },
  actions: {
    getUsers({commit}) {
      return api.axios.get(api.urls.users)
      .then(res => {
        commit("setUsers", res.data)
        return res.data
      })

    },
    createUser({ state, commit }, user) {
        return api.axios.post(api.urls.users, user)
    },
    login({ state, commit }, user) {
        return api.axios.post(api.urls.login, user).then((res) => {
            localStorage.setItem('jwt', res.data.token)
            localStorage.setItem('username', res.data.username)
            commit("setUsername", res.data.username)
        })
    }
  },

  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUsername(state, username) {
      state.username = username
    }
  }
};
