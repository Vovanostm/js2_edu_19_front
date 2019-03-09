<template>
  <div>
    <h1>Наше приложение</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/">Новости</router-link>
        </li>
        <li>
          <router-link to="/chat">Чат</router-link>
        </li>
        <li>
          <router-link to="/store">Магазин</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>
