<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <!--  HOME CONTENT START  -->

  <!-- slider -->
  <AppSlider />

  <!-- main -->
  <div class="main main-index">
    <CategoryCardContainer class="news" category="News">
      <div class="column" v-for="post in posts">
        <img :src="require('../assets/Layer 59.png')" alt="slika" />
        <p class="date">{{ post.date }}</p>
        <RouterLink to="/single"
          ><p class="headline">{{ post.headline }}</p></RouterLink
        >
      </div>
    </CategoryCardContainer>
    <CategoryCardContainer class="sport" category="Sports">
      <div class="column" v-for="post in posts">
        <img :src="require('../assets/Layer 59.png')" alt="slika" />
        <p class="date">{{ post.date }}</p>
        <RouterLink to="/single"
          ><p class="headline">{{ post.headline }}</p></RouterLink
        >
      </div>
    </CategoryCardContainer>

    <!-- banner-md -->
    <AppBanner class="banner-md" />

    <CategoryCardContainer class="business" category="Business">
      <div class="row business-content" v-for="post in posts_business">
        <img :src="require('../assets/Layer 59.png')" alt="slika" />
        <div>
          <p class="date">{{ post.date }}</p>
          <RouterLink to="/single"
            ><p class="headline">{{ post.headline }}</p></RouterLink
          >
        </div>
      </div>
    </CategoryCardContainer>

    <!-- banner-md -->
    <AppBanner class="banner-md" />
    <CategoryCardContainer
      class="tech"
      carouselheadline="News Carousel"
      class_color="tech"
    >
      <div class="slick-slider slider4 row">
        <div class="column single-item">
          <img :src="require('../assets/Layer 52.png')" alt="slika" />
          <p class="date">August 26, 2013</p>
          <RouterLink to="/single"
            ><p class="headline">
              For Obama, MLK's shadow looms large ahead of speech
            </p></RouterLink
          >
        </div>
        <div class="column single-item">
          <img :src="require('../assets/Layer 52.png')" alt="slika" />
          <p class="date">August 26, 2013</p>
          <RouterLink to="/single"
            ><p class="headline">
              For Obama, MLK's shadow looms large ahead of speech
            </p></RouterLink
          >
        </div>
        <!--<div class="column single-item">
                        <img src="imgs/Layer 52.png" alt="slika">
                        <p class="date">August 26, 2013</p>
                        <router-link to="/single"><p class="headline">For Obama, MLK's shadow looms large ahead of speech</p></router-link>
                    </div>
                    <div class="column single-item">
                        <img src="imgs/Layer 52.png" alt="slika">
                        <p class="date">August 26, 2013</p>
                        <router-link to="/single"><p class="headline">For Obama, MLK's shadow looms large ahead of speech</p></router-link>
                    </div>-->
      </div>
    </CategoryCardContainer>
    <!-- MiniSliders-->
    <CategoryCardContainer
      class="travel col-span-1"
      v-for="(slider, i) in mini_sliders"
      :id="`mini-slider-${i}`"
      :carouselheadline="slider.headline"
      class_color="travel"
      @next="nextSlide(i)"
      @previous="previousSlide(i)"
    >
      <MiniSlider
        :current_slide="this.mini_sliders[i].current_slide"
        :direction="direction"
      />
    </CategoryCardContainer>

    <!-- main (closing-tag) -->
  </div>

  <!-- banner-lg -->
  <AppBanner class="banner-lg" />

  <!-- zoom-slider -->
  <ZoomSlider />

  <!--    HOME CONTENT END  -->
</template>

<script>
import AppBanner from "../components/AppBanner.vue";
import AppSlider from "../components/AppSlider.vue";
import CategoryCardContainer from "../components/CategoryCardContainer.vue";
import ZoomSlider from "../components/ZoomSlider.vue";
import MiniSlider from "../components/MiniSlider.vue";
export default {
  name: "ViewHome",
  components: {
    AppBanner,
    AppSlider,
    CategoryCardContainer,
    ZoomSlider,
    MiniSlider,
  },
  data() {
    return {
      current_slide: 0,
      direction: "slide-in",
      isSlideAnimating1: false,
      slideInterval: null,
      posts: [
        {
          date: "August 26, 2013",
          headline: "For Obama, MLK's shadow looms large ahead of speech",
          img: "Layer 59.png",
        },
        {
          date: "August 27, 2013",
          headline: "NASA releases portrait of a planet waving at Saturn",
          img: "Layer 59.png",
        },
        {
          date: "August 28, 2013",
          headline: "Patriotsvv make cuts ... and Tim Tebow survives (so far)",
          img: "Layer 59.png",
        },
      ],
      posts_business: [
        {
          date: "August 26, 2013",
          headline: "For Obama, MLK's shadow looms large ahead of speech",
          img: "Layer 59.png",
        },
        {
          date: "August 26, 2013",
          headline: "For Obama, MLK's shadow looms large ahead of speech",
          img: "Layer 59.png",
        },
        {
          date: "August 26, 2013",
          headline: "For Obama, MLK's shadow looms large ahead of speech",
          img: "Layer 59.png",
        },
        {
          date: "August 26, 2013",
          headline: "For Obama, MLK's shadow looms large ahead of speech",
          img: "Layer 59.png",
        },
      ],
      mini_sliders: [
        {
          headline: "Editorials",
          isSlideAnimating: false,
          current_slide: 0,
          slideInterval: null,
        },
        {
          headline: "Local News",
          isSlideAnimating: false,
          current_slide: 0,
          slideInterval: null,
        },
      ],
    };
  },
  methods: {
    nextSlide(i) {
      let isSlideAnimating = this.mini_sliders[i].isSlideAnimating;
      if (!isSlideAnimating) {
        isSlideAnimating = true;
        const index =
          this.mini_sliders[i].current_slide == 3 - 1
            ? 0
            : this.mini_sliders[i].current_slide + 1;
        this.mini_sliders[i].current_slide = index;
        this.direction = "slide-in";
        //console.log("Metoda nextSlide u ViewHome.");
        if (isSlideAnimating) {
          setTimeout(() => {
            isSlideAnimating = false;
          }, 1300);
        }
      }
    },
    previousSlide(i) {
      let isSlideAnimating = this.mini_sliders[i].isSlideAnimating;
      if (!isSlideAnimating) {
        isSlideAnimating = true;
        const index =
          this.mini_sliders[i].current_slide == 0
            ? 3 - 1
            : this.mini_sliders[i].current_slide - 1;
        this.mini_sliders[i].current_slide = index;
        this.direction = "slide-out";
        //console.log("Metoda previousSlide u ViewHome.");
        if (this.isSlideAnimating) {
          setTimeout(() => {
            this.isSlideAnimating = false;
          }, 1300);
        }
      }
    },
  },
  mounted() {
    for (let i = 0; i < 2; i++) {
      let isSlideAnimating = this.mini_sliders[i].isSlideAnimating;
      if (!isSlideAnimating) {
        this.mini_sliders[i].slideInterval = setInterval(() => {
          if (!isSlideAnimating) {
            this.nextSlide(i);
          }
        }, 12000);
      }
    }
  },
};
</script>
