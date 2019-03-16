<template>
  <v-app>
    <div>
      <layout></layout>
    </div>
  </v-app>
</template>

<script>
import Layout from "@/views/Layout";
export default {
  name: "App",
  components: { Layout },
  data: () => ({})
};
</script>
