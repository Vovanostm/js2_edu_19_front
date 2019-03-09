<template>
  <div>
    <h2>Новости</h2>
    <v-card v-for="(item, key) in news" :key="key" style="margin:20px">
      <v-img :src="item.img"></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ item.title }}</h3>
          <div>{{ item.text }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "News",
  data: () => ({
    news: [
      {
        title: "Заголовок",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nobis molestiae deserunt autem ea eum enim nisi",
        img: ""
      },
      {
        title: "Заголовок",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nobis molestiae deserunt autem ea eum enim nisi",
        img: ""
      },
      {
        title: "Заголовок",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nobis molestiae deserunt autem ea eum enim nisi",
        img: ""
      }
    ]
  })
};
</script>
