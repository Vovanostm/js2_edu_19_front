<template>
  <div>
    <input v-model="username" type="text" placeholder="username">
    <input v-model="password" type="text" placeholder="password">
    <button @click="login({username, password})">Войти</button>
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
    ...mapActions(["login"])
  }
};
</script>

<style>
</style>
