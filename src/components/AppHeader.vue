<template>
  <header class="header">
    <div class="container">
      <nav class="header-nav">
        <ul class="logo">
          <li>
            <router-link to="/"
              ><div class="header-nav-icon-container">
                <img
                  :src="require('../assets/Shape 2.svg')"
                  alt="Logo Kenaz"
                  class="header-nav-icon"
                /></div
            ></router-link>
          </li>

          <li><router-link to="/">Kenaz</router-link></li>
        </ul>
        <ul>
          <li><router-link to="/">Media</router-link></li>
          <li><router-link to="/">Marketing</router-link></li>
          <li><router-link to="/">Contact</router-link></li>
          <li>
            <router-link to="/"
              ><div class="header-nav-icon-container">
                <img
                  :src="require('../assets/search 1.svg')"
                  alt="search"
                  class="header-nav-icon-search"
                /></div
            ></router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="categories">
    <div class="container">
      <nav>
        <ul>
          <li
            class="border-bottom"
            v-for="(category, i) in categories"
            :key="category"
            :id="i"
            :class="
              current_category == i ? `active ${category}` : `${category}`
            "
          >
            <router-link to="/category" @click="showCategory">{{
              category.toUpperCase()
            }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
  data() {
    return {
      current_category: 0,
      categories: ["news", "business", "sport", "life", "tech", "travel"],
    };
  },
  methods: {
    showCategory(e) {
      this.current_category = parseFloat(e.target.parentNode.id);
      /*if (e.target.nodeName == "A") {
        this.current_category = parseFloat(e.target.parentNode.id);
      } else {
        this.current_category = parseFloat(e.target.id);
      }*/
    },
  },
};
</script>
<style lang="scss">
@import "../scss/mixins";
@import "../scss/var";
.header {
  background-color: $footer-header-bg;
  color: $white;
  nav {
    grid-column: 1/-1;
    a {
      line-height: 27px;
      font-family: "Varela Round";
      font-size: 14px;
    }
  }
  &-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $footer-header-bg;
    & ul:last-child li {
      padding-left: 40px;
    }
    .logo {
      a {
        font-family: "Bitter";
        font-size: 24px;
        @include flexCenter();
        margin-right: 10px;
      }
    }
    &-icon {
      &-container {
        display: inline-block;
        @include flexCenter();
        width: 60px;
        height: 50px;
        background-color: rgba(255, 255, 255, 0.05);
        &:hover {
          background-color: #424242;
          transition: ease-in 0.5s;
        }
      }
      &-search {
        width: 20px;
      }
    }
  }
}
.categories {
  background-color: $bg-categories;
  color: $white;
  margin-bottom: 20px;
  li {
    @include flexCenter();
    height: 50px;
    padding: 0 20px;
    cursor: auto;
    a {
      font-family: "Bitter bold";
      font-size: 18px;
    }
  }
}
.border-bottom {
  border-bottom: 4px solid;
}
</style>
