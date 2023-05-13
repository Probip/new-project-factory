<template>
  <AppHeader />
  <div class="container">
    <AppBanner class="banner-lg" />
    <RouterView />
    <AppSidebar />
  </div>
  <div id="modal" class="modal">
    <div class="modal-top">
      <span class="modal-close" id="close">X</span>
      <span class="modal-zoom-in" id="zoom-in">Zoom-in</span>
      <span class="modal-zoom-out" id="zoom-out">Zoom-out</span>
    </div>
    <img :src="require('./assets/Layer 39.png')" alt="" class="modal-img" />
  </div>
  <AppFotter />
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import AppFotter from "./components/AppFotter.vue";
import AppSidebar from "./components/AppSidebar.vue";
import AppBanner from "./components/AppBanner.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFotter,
    AppSidebar,
    AppBanner,
  },
};
</script>
<style lang="scss">
@import "./scss/mixins";
@import "./scss/var";
@font-face {
  font-family: "Bitter";
  src: url(./fonts/Bitter-Regular.ttf);
}
@font-face {
  font-family: "Varela Round";
  src: url(./fonts/VarelaRound-Regular.ttf);
}
@font-face {
  font-family: "Bitter bold";
  font-style: bold;
  src: url(./fonts/Bitter-Bold.ttf);
}
@font-face {
  font-family: "Bitter italic";
  font-style: italic;
  src: url(./fonts/Bitter-Italic.ttf);
}

[v-cloak] {
  display: none;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: $bg-body;
}
.row {
  display: flex;
  flex-direction: row;
}
.column {
  display: flex;
  flex-direction: column;
}
.space-between {
  justify-content: space-between;
}
.space-around {
  justify-content: space-around;
}
.container {
  width: 940px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  font-family: "Varela Round";
}
.purple {
  height: 20px;
  background-color: $bg-categories;
}
ul {
  display: flex;
  li {
    list-style: none;
    @include flexCenter();
    a {
      color: $white;
      text-decoration: none;
    }
  }
}
.categories li {
  &:hover {
    @include purpleHover();
  }
  &.active:hover {
    background-color: $category-news;
  }
}
h2 {
  font-family: "Bitter bold";
  font-size: 24px;
  color: $text-dark;
  line-height: 28.8px;
}
a {
  font-family: "Varela Round";
  color: $link;
  font-size: 14px;
}
.headline {
  font-family: "Bitter bold";
  font-size: 14px;
  color: $text-dark;
}
.date {
  @include date();
}
.category.col-span-1 {
  grid-column: span 1;
}
.category.tech {
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  .column {
    padding: 0;
    margin: 0;
    img {
      width: 260px;
      height: 150px;
      margin-right: 0;
    }
  }
}
.main {
  grid-column: 1 / span 2;
  grid-template-columns: repeat(2, 1fr);
  background-color: $white;
  padding-top: 0;
  display: grid;
  row-gap: 20px;
  column-gap: 20px;
  padding-bottom: 0;
  margin-bottom: 0;
  &-index {
    background-color: $bg-body;
  }
  .news-list-item {
    grid-column: 1/-1;
    padding-left: 30px;
    padding-right: 10px;
    h2:first-of-type {
      margin: 15px 0;
    }
    h2 {
      margin-top: 25px;
    }
    .date {
      font-size: 12px;
      font-family: "Varela Round";
      line-height: 14.45px;
      margin: 15px 30px 15px 0;
      &:first-of-type {
        margin-top: 10px;
      }
      img {
        margin-right: 4px;
      }
    }
    .row-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      p {
        grid-column: 2 / span 2;
        color: $text-news-p;
        font-family: "Bitter";
        font-size: 14px;
        line-height: 22px;
      }
      .btn-news {
        grid-column-start: 2;
        background-color: $bg-categories;
        border: none;
        padding: 8px 20px;
        margin-top: 20px;
        margin-bottom: 65px;
        width: 120px;
        cursor: pointer;
        a {
          font-family: "Varela Round";
          font-size: 14px;
          line-height: 16.86px;
          color: $white;
          text-decoration: none;
        }
      }
    }
  }
  .line {
    margin: 0;
    border: $bg-banner-container solid 1px;
    grid-column: 1/-1;
  }
  .page-number {
    height: 95px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    margin-top: -20px;
    .number {
      font-family: "Varela Round";
      font-size: 14px;
      line-height: 17px;
      width: 30px;
      height: 30px;
      @include flexCenter();
      background-color: $bg-banner-container;
      color: $bg-categories;
      margin-right: 5px;
      cursor: pointer;
      &.active {
        background-color: $bg-categories;
        color: $white;
        font-family: "Varela Round";
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
}
.category {
  grid-column: 1 / span 2;
  background-color: $white;
  border-left: 10px solid;
  padding: 30px;
  padding-top: 0;
  display: grid;
  row-gap: 30px;
  a {
    text-decoration: none;
  }
  &.sport,
  &.news {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
  }
  &.sport.row,
  &.news.row {
    padding-right: 30px;
  }
  &.business {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 90px 90px;
    div {
      margin-left: 15px;
    }
  }
  &.tech {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
  &.tech,
  &.travel {
    .icon {
      width: 16px;
      height: 22px;
      margin-left: 14px;
    }
    .column img {
      height: 150px;
      width: 230px;
    }
  }
  .top {
    grid-column: 1/-1;
    padding-top: 30px;
    h2 {
      margin-top: -10px;
    }
  }
}
.news {
  border-color: $category-news;
  &.active,
  &.active:hover {
    background-color: $category-news;
  }
}
.business {
  border-color: $category-business;
  &.active,
  &.active:hover {
    background-color: $category-business;
  }
}
.sport {
  border-color: $category-sport;
  &.active,
  &.active:hover {
    background-color: $category-sport;
  }
}
.life {
  border-color: $category-life;
  &.active,
  &.active:hover {
    background-color: $category-life;
  }
}
.tech {
  border-color: $category-tech;
  &.active,
  &.active:hover {
    background-color: $category-tech;
  }
}
.travel {
  border-color: $category-travel;
  &.active,
  &.active:hover {
    background-color: $category-travel;
  }
}
</style>
