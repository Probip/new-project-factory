<!-- eslint-disable vue/require-v-for-key -->
<template>
  <footer class="footer">
    <div class="purple"></div>
    <div class="container pt-60 pb-60">
      <div class="footer-kenaz-column">
        <div class="row logo">
          <img
            :src="require(`../assets/Vector Smart Objecta 1.svg`)"
            alt="logo kenaz blue"
          />
          <p class="logo-text">Kenaz</p>
        </div>
        <p class="lorem-ipsum">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo
          ante.
        </p>
        <div class="row icons">
          <a href="#"><img :src="require(`../assets/Rss.svg`)" alt="Rss" /></a>
          <a href="#">
            <img
              :src="require(`../assets/Facebook.svg`)"
              alt="Facebook"
              class="special"
          /></a>
          <a href="#">
            <img
              :src="require(`../assets/twitter.svg`)"
              alt="Twitter"
              class="special"
          /></a>
          <a href="#">
            <img :src="require(`../assets/dribble.svg`)" alt="Dribble"
          /></a>
          <a href="#">
            <img :src="require(`../assets/Linkedin.svg`)" alt="Linkedin"
          /></a>
          <a href="#">
            <img
              :src="require(`../assets/You tube.svg`)"
              alt="Youtube"
              class="special"
          /></a>
          <a href="#"
            ><img :src="require(`../assets/Skype.svg`)" alt="Skype"
          /></a>
        </div>
      </div>
      <div class="newsletter">
        <h2>Newsletter</h2>
        <p class="lorem-ipsum">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo
          ante...
        </p>
        <form action="" method="POST" class="form-newsletter row">
          <input type="email" name="email" id="email" placeholder="Your mail" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div class="footer-tags-column">
        <h2>Tags Widget</h2>
        <div class="tag-container">
          <span v-for="(tag, index) in tags" @click="toggleActiveTag">
            <button class="tag-item" v-if="index != 5">{{ tag }}</button>
            <button class="tag-item active" v-else>{{ tag }}</button>
          </span>
        </div>
      </div>
      <div class="posts-footer pt-60">
        <h2>Featured</h2>
        <span v-for="i in 3">
          <div class="row">
            <div>
              <p class="date">August 26, 2013</p>
              <router-link to="/single"
                ><p class="headline">
                  Palestinians call off peace talks after clash
                </p></router-link
              >
            </div>
            <img :src="require(`../assets/Layer 39.png`)" alt="" />
          </div>
          <hr class="line" v-if="i != 3" />
        </span>
      </div>
      <div class="posts-footer pt-60">
        <h2>Random Posts</h2>
        <span v-for="i in 3">
          <div class="row">
            <div>
              <p class="date">August 26, 2013</p>
              <router-link to="/single"
                ><p class="headline">
                  Palestinians call off peace talks after clash
                </p></router-link
              >
            </div>
            <img :src="require(`../assets/Layer 39.png`)" alt="" />
          </div>
          <hr class="line" v-if="i != 3" />
        </span>
      </div>
      <div class="posts-footer pt-60 posts-footer-twitter-timeline">
        <h2>Twitter Feed</h2>
        <a
          class="twitter-timeline"
          data-width="270"
          data-height="360"
          data-theme="dark"
          href="https://twitter.com/envato?ref_src=twsrc%5Etfw"
          data-chrome="nofooter noborders noheader transparent noscrollbar"
          data-aria-polite="assertive"
          data-tweet-limit="3"
          >Tweets by envato</a
        >
        <!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->
      </div>
    </div>
    <hr class="line" />
    <div class="container bottom">
      <p id="year">
        © 2022 - Kenaz Template - Proudly made at Plava tvornica Croatia
      </p>
      <p id="pages">Typography - Templates - Contact Form - 404 Page</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "AppFotter",
  data() {
    return {
      tags: [
        "assueverit",
        "utroquoe",
        "probo",
        "assuev",
        "probo",
        "assuevverit",
        "titl",
        "assuevverit",
        "assuevverit",
        "utroquoe",
        "probo",
        "assuevverit",
        "utroquoe",
      ],
    };
  },
  methods: {
    toggleActiveTag(event) {
      //samo jednom tag-u je dodijeljena klasa active
      document.querySelector(".tag-item.active").classList.remove("active");
      event.target.classList.add("active");
    },
  },
};
</script>
<style lang="scss">
@import "../scss/mixins";
@import "../scss/var";
.footer {
  a {
    text-decoration: none;
  }
  margin-top: 20px;
  height: 992px;
  background-color: $footer-header-bg;
  .pt-60 {
    padding-top: 60px;
  }
  .pb-60 {
    padding-bottom: 60px;
  }
  .container {
    color: $text-light;
    background-color: $footer-header-bg;
    font-family: "Bitter";
  }
  .icons img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    &.special {
      background-color: $white;
    }
  }
  div {
    p,
    h2 {
      margin-bottom: 30px;
    }
  }
  h2 {
    color: $text-footer;
  }
  .lorem-ipsum {
    color: $text-date;
    font-size: 14px;
    margin-top: 20px;
  }
  .logo {
    &-text {
      font-size: 28px;
      font-family: "Bitter";
      color: $kenaz-logo;
      margin: auto 15px;
    }
  }
  .form-newsletter {
    font-size: 16px;
    input,
    input:active,
    input:focus,
    input:hover,
    input:valid,
    button {
      padding: 20px;
      border: none;
      outline: none;
      font-family: "Varela Round";
    }
    input {
      background-color: $footer-features-bg;
      color: $text-light;
    }
    button {
      width: 112px;
      background-color: $bg-categories;
      color: $text-footer;
      cursor: pointer;
      &:hover {
        @include purpleHover();
      }
    }
  }
  .tag {
    &-item {
      background-color: $footer-features-bg;
      color: $text-date;
      border: none;
      padding: 6px 8px;
      margin: 3px 1px;
      margin-left: 0;
      font-size: 12px;
      font-family: "Varela Round";
      cursor: pointer;
      &:hover {
        background-color: $footer-features-bg-hover;
        transition: 0.5s ease-in;
      }
      &.active {
        background-color: $bg-categories;
        color: $text-footer;
        &:hover {
          @include purpleHover();
        }
      }
    }
  }
  .posts-footer {
    h2 {
      color: $white;
    }
    img {
      width: 70px;
      height: 70px;
      outline: $white 2px solid;
      box-shadow: 0px 3px 1px rgba(0, 0, 1, 0.3);
      margin-left: 30px;
      margin-bottom: 20px;
    }
    .headline {
      color: $text-footer;
    }
    .date {
      margin: 0;
    }
    .line {
      margin-bottom: 20px;
    }
  }
  .line {
    border: $footer-features-bg solid 1px;
  }
  .bottom {
    font-size: 12px;
    font-family: "Varela Round";
    padding-top: 20px;
    margin-bottom: 100px; //još provjeriti za padding-bottom
    #year {
      grid-column: 1 / span 2;
    }
  }
}
</style>
