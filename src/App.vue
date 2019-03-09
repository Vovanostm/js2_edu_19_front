<template>
  <div>
    <layout></layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
export default {
  name: "App",
  components: { Layout },
  data: () => ({
    page: "chat"
  })
};
</script>
