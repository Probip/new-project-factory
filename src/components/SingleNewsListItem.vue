<template>
  <div class="news-list-item">
    <p>
      {{ text1 }}
    </p>
    <img :src="require(`../assets/${img}`)" alt="book" />
    <p>
      {{ text2 }}
    </p>
    <div class="social-media-interactions-container">
      <img :src="require('../assets/Layer 69.png')" alt="icons social media" />
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleNewsListItem",
  props: ["text1", "img", "text2"],
};
</script>
