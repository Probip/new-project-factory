<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="sidebar sidebar-category">
    <div class="tabs">
      <ul class="tabs-list">
        <li class="active">Popular</li>
        <li>Top Rated</li>
        <li>Comments</li>
      </ul>
      <div class="tabs-content active" v-for="i in 3" :id="`tab-${i}`">
        <div class="tabs-content-item row">
          <div class="column">
            <span class="comments date"
              ><img
                :src="require('../assets/comment ico.svg')"
                alt="comment icon"
              />
              5</span
            >
            <p class="date">August 26, 2013</p>
            <a href="./single.html"
              ><p class="headline">
                Palestinians call off peace talks after clash
              </p></a
            >
          </div>
          <img :src="require('../assets/Layer 5.png')" alt="article image" />
        </div>
        <hr class="line" />
        <div class="tabs-content-item row">
          <div class="column">
            <span class="comments date"
              ><img
                :src="require('../assets/comment ico.svg')"
                alt="comment icon"
              />
              5</span
            >
            <p class="date">August 26, 2013</p>
            <a href="./single.html"
              ><p class="headline">
                Palestinians call off peace talks after clash
              </p></a
            >
          </div>
          <img :src="require('../assets/Layer 5.png')" alt="article image" />
        </div>
        <hr class="line" />
        <div class="tabs-content-item row">
          <div class="column">
            <span class="comments date"
              ><img
                :src="require('../assets/comment ico.svg')"
                alt="comment icon"
              />
              5</span
            >
            <p class="date">August 26, 2013</p>
            <a href="./single.html"
              ><p class="headline">
                Palestinians call off peace talks after clash
              </p></a
            >
          </div>
          <img :src="require('../assets/Layer 5.png')" alt="article image" />
        </div>
        <hr class="line" />
        <div class="tabs-content-item row">
          <div class="column">
            <span class="comments date"
              ><img
                :src="require('../assets/comment ico.svg')"
                alt="comment icon"
              />
              5</span
            >
            <p class="date">August 26, 2013</p>
            <a href="./single.html"
              ><p class="headline">
                Palestinians call off peace talks after clash
              </p></a
            >
          </div>
          <img :src="require('../assets/Layer 5.png')" alt="article image" />
        </div>
        <hr class="line" />
        <div class="tabs-content-item row">
          <div class="column">
            <span class="comments date"
              ><img
                :src="require('../assets/comment ico.svg')"
                alt="comment icon"
              />
              5</span
            >
            <p class="date">August 26, 2013</p>
            <a href="./single.html"
              ><p class="headline">
                Palestinians call off peace talks after clash
              </p></a
            >
          </div>
          <img :src="require('../assets/Layer 5.png')" alt="article image" />
        </div>
        <hr class="line" />
      </div>
    </div>
    <div class="social">
      <h2>Social</h2>
      <div class="social-media">
        <img :src="require('../assets/Facebook.svg')" alt="Facebook" />
        <button class="social-media-btn">
          <a href="https://web.facebook.com/envato/">Like</a>
        </button>
        <p class="fans">25041 Fans</p>
      </div>
      <div class="social-media">
        <img :src="require('../assets/twitter.svg')" alt="twitter" />
        <button class="social-media-btn">
          <a href="https://twitter.com/envato">Follow</a>
        </button>
        <p class="fans">25041 Followers</p>
      </div>
      <div class="social-media">
        <img :src="require('../assets/You tube.svg')" alt="Youtube" />
        <button class="social-media-btn">
          <a href="https://www.youtube.com/Envato">Subscribe</a>
        </button>
        <p class="fans">941 Subscribers</p>
      </div>
    </div>
    <div class="kenaz-tv">
      <h2>Kenaz TV</h2>
      <iframe
        width="300"
        height="150"
        src="https://www.youtube.com/embed/l-epKcOA7RQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p class="date">August 26, 2013</p>
      <p class="headline">NASA releases portrait of a planetwaving at Saturn</p>
    </div>
    <div class="container-banner-xs">
      <div class="banner banner-xs">banner</div>
      <div class="banner banner-xs">banner</div>
    </div>
    <div id="envato" class="envato">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fenvato&tabs=timeline&width=300&height=520&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=1523858621411349"
        width="300"
        height="520"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppSidebar",
};
</script>
<style lang="scss">
@import "../scss/mixins";
@import "../scss/var";
.sidebar {
  grid-column: 3 / span 1;
  grid-row: 3 / span 7;
  //grid-row: 3/-1;
  display: grid;
  row-gap: 20px;
  grid-auto-rows: min-content;
  &-category {
    grid-row: 3 / span 1;
  }
  .tabs {
    height: 665px;
    position: relative;
    background-color: $bg-categories;
    padding-bottom: 40px;
    a {
      text-decoration: none;
    }
    &-list {
      height: 50px;
      background-color: $bg-categories-dark;
      justify-content: space-around;
      display: flex;
      li {
        text-decoration: underline;
        color: $white;
        font-family: "Varela Round";
        font-size: 14px;
        line-height: 16.68px;
        cursor: pointer;
        padding: 0 5px;
        z-index: 5;
        &.active {
          color: $text-tab-active;
        }
      }
    }
    &-content {
      background-color: $bg-categories;
      position: absolute;
      &.active {
        z-index: 2;
      }
      /*
      &#tab-2 {
        background-color: #435282;
      }
      &#tab-3 {
        background-color: #754382;
      }*/
      &-item {
        z-index: 1;
        padding: 20px 30px;
        .comments {
          color: $text-tab-date;
          text-align: end;
          padding-right: 30px;
          img {
            width: 11px;
            height: 10px;
            outline: none;
          }
        }
        .date {
          color: $text-tab-date;
        }
        p {
          color: $white;
        }
        img {
          width: 70px;
          height: 70px;
          outline: $white 2px solid;
          margin-left: 4px;
        }
        &:hover {
          background-color: $bg-categories-dark;
        }
      }
    }
    .line {
      border: $bg-categories-dark 1px solid;
    }
  }
  .social {
    h2 {
      margin-bottom: 15px;
    }
    .social-media {
      height: 40px;
      margin-bottom: 10px;
      display: flex;
      flex-wrap: nowrap;
      &:last-of-type {
        margin-bottom: 0;
      }
      img {
        width: 40px;
        background-color: $white;
      }
      &-btn {
        cursor: pointer;
        border: none;
        width: 120px;
        background-color: $bg-banner-container;
        padding-left: 15px;
        text-align: left;
        a {
          text-decoration: none;
          font-family: "Bitter Bold";
          font-size: 18px;
          line-height: 18px;
          color: $text-dark;
        }
      }
      .fans {
        @include flexCenter();
        width: 140px;
        color: $white;
        background-color: $bg-categories;
        font-family: "Varela Round";
        font-size: 14px;
        line-height: 16.86px;
      }
    }
  }
  .kenaz-tv {
    background-color: $white;
    padding-bottom: 25px;
    h2 {
      margin-top: 15px;
      margin-left: 30px;
      margin-bottom: 30px;
    }
    .date {
      margin-top: 17px;
    }
    .headline,
    .date {
      margin-left: 30px;
    }
  }
}
</style>
