<template>
  <div>
    <input v-model="username" type="text" placeholder="username">
    <input v-model="password" type="text" placeholder="password">
    <button @click="register">Зарегистрироваться</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Registration",
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    ...mapActions(["createUser"]),
    register() {
      this.createUser({
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

<style>
</style>
