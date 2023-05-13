<template>
  <!--  SINGLE CONTENT START  -->
  <div class="headline-img-container">
    <img
      :src="require(`../assets/${single_posts[0].headline_img}`)"
      alt="article image"
    />
    <div class="bottom-container">
      <div class="text">
        <p class="date">{{ single_posts[0].date }}</p>
        <h2>{{ single_posts[0].headline }}</h2>
      </div>
      <img :src="require('../assets/Layer 66.png')" alt="article image" />
    </div>
  </div>

  <div class="main single p-0">
    <SingleNewsListItem
      :text1="single_posts[0].text1"
      :text2="single_posts[0].text2"
      :img="single_posts[0].img"
    />

    <!-- banner-md -->
    <AppBanner class="banner-md" />

    <!-- author -->
    <div class="news-list-item" v-if="single_posts[0].author.text">
      <h2>About the Author</h2>
      <div class="row author p-0">
        <img
          :src="require(`../assets/${single_posts[0].author.img}`)"
          alt="author image"
        />
        <p>{{ single_posts[0].author.text }}</p>
      </div>
    </div>

    <!-- comments -->
    <SingleComments />
  </div>
  <!--  SINGLE CONTENT END  -->
</template>
<script>
import SingleNewsListItem from "../components/SingleNewsListItem.vue";
import AppBanner from "../components/AppBanner.vue";
import SingleComments from "../components/SingleComments.vue";
export default {
  name: "ViewSingle",
  components: {
    SingleNewsListItem,
    AppBanner,
    SingleComments,
  },
  data() {
    return {
      single_posts: [
        {
          id: 0,
          headline_img: "Layer 65.png",
          date: "August 26, 2013",
          headline: "2013'Margot' breathlessly reimagines Anne Frank's sister",
          text1:
            " Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo.",
          img: "Layer 67.png",
          text2:
            " Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem. Ac magna lobortis non, vulputate vitae viverra. Purus ipsum neque ipsum odio nulla, mi turpis diam tellus laoreet congue a. Rhoncus maecenas, sit suspendisse, condimentum purus convallis dui hendrerit. Purus ipsum neque ipsum odio nulla, mi turpis diam tellus laoreet congue. ",
          author: {
            img: "Layer 68.png",
            text: "Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem. ",
          },
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../scss/mixins";
@import "../scss/var";
.m-50-30-0-30 {
  margin: 0 30px;
  margin-top: 50px;
}
.headline-img-container {
  grid-column: 1/-1;
  position: relative;
  .bottom-container {
    position: absolute;
    background-image: url("../assets/Layer\ 66.png");
    background-repeat: no-repeat;
    bottom: 0;
    .text {
      position: absolute;
      bottom: 35px;
      left: 30px;
      h2 {
        font-family: "Bitter Bold";
        font-size: 44px;
        line-height: 52.8px;
        margin-top: 30px;
      }
      h2,
      p {
        color: $text-single-headline;
      }
    }
  }
}
.main.single {
  display: grid;
  row-gap: 20px;
  background-color: $bg-body;
  .news-list-item {
    background-color: $white;
  }
  p {
    grid-column: 1 / span 2;
    padding: 37px 0px 43px 30px;
    margin-right: 15px;
    color: $text-news-p;
    font-family: "Bitter";
    font-size: 14px;
    line-height: 22px;
  }
  .social-media-interactions-container {
    height: 42px;
    align-items: center;
    padding-left: 10px;
    //border: blue solid 2px;
    margin-bottom: 20px;
  }
  .news-list-item {
    grid-column: 1/-1;
    padding: 0;
    h2 {
      margin-left: 30px;
      margin-bottom: 30px;
    }
  }
  .row img {
    width: 110px;
    height: 110px;
  }
  .row {
    padding-left: 30px;
    p {
      padding: 0;
      padding-left: 20px;
      padding-bottom: 40px;
      padding-right: 10px;
      font-family: "Varela Round";
      font-size: 13px;
      color: $text-news-p;
    }
  }
  .comments {
    // height: 1015px;
    h2 {
      margin-bottom: 0;
    }
    .add-your-comment {
      margin-top: 35px;
    }
    .pt-45 {
      padding-top: 45px;
    }
    .p-0 {
      padding: 0;
      margin: 0;
    }
    img {
      width: 55px;
      height: 55px;
      border: $white 2px solid;
      outline: $text-footer 1px solid;
      margin-right: 20px;
    }
    .user {
      font-family: "Bitter";
      font-size: 18px;
      line-height: 20px;
      color: $bg-categories;
    }
    .date {
      margin: 0;
      padding: 0;
      margin-left: 10px;
      margin-top: 1px;
      font-size: 11px;
      line-height: 20px;
      font-family: "Varela Round";
    }
    .row {
      padding: 0;
      width: 100%;
      padding-right: 20px;
      a {
        margin-right: 30px;
        color: $bg-categories;
        cursor: pointer;
        font-family: "Varela Round";
        font-size: 14px;
        line-height: 17px;
        padding-left: 100px;
      }
    }
    .text-comment {
      font-family: "Varela Round";
      font-size: 13px;
      line-height: 20px;
      &-2 {
        padding: 0 30px;
        margin: 25px 0;
      }
    }
  }
  .form-comments {
    font-size: 14px;
    padding: 0 30px;
    input,
    input:active,
    input:focus,
    input:hover,
    input:valid,
    button,
    textarea {
      padding: 10px 0 15px 20px;
      border: none;
      outline: none;
      font-family: "Varela Round";
    }
    input,
    textarea {
      width: 300px;
      background-color: $bg-banner-container;
      color: $text-date;
      margin-bottom: 10px;
    }
    textarea {
      width: 100%;
      min-width: 100%;
      margin-bottom: 0;
      height: 185px;
    }
    button.submit {
      margin: 30px 0;
      width: 150px;
      height: 50px;
      padding: 0;
      color: $white;
      background-color: $bg-categories;
      cursor: pointer;
      &:hover {
        @include purpleHover();
      }
    }
  }
}
</style>
