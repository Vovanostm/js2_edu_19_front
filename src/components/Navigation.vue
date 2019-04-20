<template>
  <v-navigation-drawer permanent>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">Application</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" @click="$router.push(item.path)">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      items: [
        { title: "Новости", icon: "dashboard", path: "/" },
        { title: "Чат", icon: "chat", path: "/chat" },
        { title: "Магазин", icon: "shopping_cart", path: "/store" },
        { title: "Логин", icon: "shopping_cart", path: "/login" }
      ],
      right: null
    };
  }
};
</script>