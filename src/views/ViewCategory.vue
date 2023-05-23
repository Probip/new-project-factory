<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/valid-v-for -->
<template>
  <AppSlider />
  <div class="main" id="category-main-content">
    <div class="news-list-item">
      <h2>News</h2>
    </div>
    <CategoryPostNews
      v-for="(post, i) in news"
      :headline="post.headline"
      :date="post.date"
      :author="post.author"
      :text="post.text"
      :comments="post.comments"
      :img="post.img"
      :i="i"
    />
    <div class="page-number row">
      <div
        class="number"
        v-for="n in 10"
        :key="n"
        :id="n"
        :class="n == current_page_number ? 'active' : ''"
        @click="changeCurrentpage"
      >
        {{ n }}
      </div>
    </div>
  </div>
  <AppBanner class="banner-md" />
</template>
<script>
import AppSlider from "../components/AppSlider.vue";
import CategoryPostNews from "../components/CategoryPostNews.vue";
export default {
  name: "ViewCategory",
  components: {
    CategoryPostNews,
    AppSlider,
  },
  data() {
    return {
      current_page_number: 4,
      news: [
        {
          headline: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          date: "August 26, 2013",
          author: "Matej Sudar",
          comments: 1,
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
          img: "Layer 59.png",
        },
        {
          headline: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          date: "August 26, 2013",
          author: "Matej Sudar",
          comments: 12,
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
          img: "Layer 59.png",
        },
        {
          headline: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          date: "August 26, 2013",
          author: "Matej Sudar",
          comments: 12,
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
          img: "Layer 59.png",
        },
        {
          headline: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          date: "August 26, 2013",
          author: "Matej Sudar",
          comments: 12,
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
          img: "Layer 59.png",
        },
        {
          headline: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          date: "August 26, 2013",
          author: "Matej Sudar",
          comments: 12,
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
          img: "Layer 59.png",
        },
        {
          headline: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          date: "August 26, 2013",
          author: "Matej Sudar",
          comments: 12,
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. ",
          img: "Layer 59.png",
        },
      ],
    };
  },
  methods: {
    changeCurrentpage(e) {
      this.current_page_number = parseFloat(e.target.id);
    },
  },
};
</script>
