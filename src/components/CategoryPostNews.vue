<template>
  <div class="news-list-item">
    <h2>{{ headline + (i + 1) }}</h2>
    <div class="row">
      <p class="date">
        <img :src="require('../assets/calendar.svg')" alt="kalendar" />{{
          date
        }}
      </p>
      <p class="date">Author: {{ author }}</p>
      <p class="date" v-if="comments != 1">{{ comments }} Comments</p>
      <p class="date" v-else>{{ comments }} Comment</p>
    </div>
    <div class="row-grid">
      <img :src="require(`../assets/${img}`)" :alt="img" />
      <p>{{ text }}</p>
      <button class="btn-news">
        <router-link to="/single">Read article</router-link>
      </button>
    </div>
  </div>
  <hr class="line" />
</template>
<script>
export default {
  name: "CategoryPostNews",
  props: ["post", "headline", "author", "date", "comments", "text", "img", "i"],
};
</script>
