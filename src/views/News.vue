<template>
  <div>
    <h2>
      Новости
      <button @click="getNews">Обновить</button>
    </h2>
    <v-card v-for="(item, key) in news" :key="key" style="margin:20px">
      <v-img :src="item.img"></v-img>

      <v-card-title primary-title>
        <div class="center">
          <h3 class="headline mb-0">{{ item.title }}</h3>
          <div>{{ item.text }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>
    <form action="/uploads" @submit.prevent="addArticle">
      <label>Название:<input v-model="title" type="text"></label>
      <label>Текст:<input v-model="text" type="text"></label>
      <input ref="inputFile" type="file">
      <button type="submit">Добавить новость</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "News",
  data: () => ({
    number: 2,
    preview: "",
    title: "",
    text: ""
  }),
  computed: {
    // Подключение state из vuex и получение нужных ключей
    ...mapState({
      news: state => state.news.news
    })
  },
  methods: {
    // Подключение actions из vuex и получение нужных действий
    ...mapActions(["addNews", "getNews", "uploadImage"]),

    addArticle() {
      let formData = new FormData();
      formData.append("image", this.$refs.inputFile.files[0]);
      this.uploadImage(formData).then(src => {
        console.log(src)
        let article = {
          title: this.title,
          text: this.text,
          img: src
        };
        this.addNews(article);
      });
    }
  }
};
</script>

<style>
.center {
  text-align: center;
  width: 100%;
}
</style>
