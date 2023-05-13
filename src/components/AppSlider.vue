<template>
  <div class="slick-slider slider-container" id="slider-container">
    <img
      :src="require('../assets/Shape 1 copy 2.png')"
      alt="Previous"
      class="app-slider-arrow app-slider-arrow-prev"
      @click="previousSlide"
    />
    <img
      :src="require('../assets/Shape 1 copy.png')"
      alt="Next"
      class="app-slider-arrow app-slider-arrow-next"
      @click="nextSlide"
    />

    <transition-group :name="direction" tag="div" class="slide row">
      <div
        class="single-item-app-slider slide"
        v-for="(slide, index) in slider"
        :key="index"
        v-show="current_slide === index"
      >
        <div class="carousel-text">
          <p class="date">
            {{ slide.date }}
            <span class="comments"
              ><img
                :src="require('../assets/comment ico.svg')"
                alt="comment icon"
              />
              22Comments</span
            >
          </p>
          <h1>{{ slide.headline }}</h1>
          <button class="btn-article">
            <router-link to="/single">Read article</router-link>
          </button>
        </div>
        <img
          :src="require(`../assets/${slide.img}`)"
          alt="slide.img"
          class="img-slick-slider"
        />
      </div>
    </transition-group>
  </div>
</template>
<style></style>
<script>
export default {
  name: "AppSlider",
  data() {
    return {
      toggle: false,
      current_slide: 0,
      direction: "slide-in",
      slideInterval: null,
      isSlideAnimating: false,
      slider: [
        {
          img: "Layer 48.png",
          date: "August 26, 2013",
          headline: "'Margot' breathlessly reimagines Anne Frank's sister",
        },
        {
          img: "img-3.png",
          date: "August 26, 2013",
          headline: "'Margot' breathlessly reimagines Anne Frank's sister",
        },
        {
          img: "img-4.png",
          date: "August 26, 2013",
          headline: "'Margot' breathlessly reimagines Anne Frank's sister",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      if (!this.isSlideAnimating) {
        this.isSlideAnimating = true;
        const index =
          this.current_slide == this.slider.length - 1
            ? 0
            : this.current_slide + 1;
        this.current_slide = index;
        this.direction = "slide-in";
        //console.log("Metoda nextSlide.");
        if (this.isSlideAnimating) {
          setTimeout(() => {
            this.isSlideAnimating = false;
          }, 1300);
        }
      }
    },
    previousSlide() {
      if (!this.isSlideAnimating) {
        this.isSlideAnimating = true;
        const index =
          this.current_slide == 0
            ? this.slider.length - 1
            : this.current_slide - 1;
        this.current_slide = index;
        this.direction = "slide-out";
        //console.log("Metoda previousSlide.");
        if (this.isSlideAnimating) {
          setTimeout(() => {
            this.isSlideAnimating = false;
          }, 1300);
        }
      }
    },
  },
  mounted() {
    if (!this.isSlideAnimating) {
      this.slideInterval = setInterval(() => {
        if (!this.isSlideAnimating) {
          this.nextSlide();
        }
      }, 12000);
    }
  },
};
</script>
<style lang="scss">
@import "../scss/mixins";
@import "../scss/var";
$slick-prev-character: url("../assets/Shape\ 1\ copy\ 2.png");
$slick-next-character: url("../assets/Shape\ 1\ copy.png");
.slick-slider {
  grid-column: span 3;
  display: flex;
  position: relative;
  &#slider-container {
    height: 430px;
    .single-item-app-slider {
      position: absolute;
    }
  }
  //.slick-next::before,.slick-prev::before{background-color: red;}
  .slick-prev,
  .slick-next {
    height: 55px;
    width: 55px;
    z-index: 5;
  }
  .slick-prev {
    margin-left: 35px;
  }
  .slick-next {
    margin-right: 35px;
  }
  .single-item-app-slider {
    width: 100%;
    display: inline-block;
    position: relative;
    .img-slick-slider {
      display: flex;
      width: 100%;
    }
    .carousel-text {
      padding: 30px;
      padding-right: 15px;
      padding-top: 55px;
      height: 240px;
      width: 100%;
      background-image: url("/src/assets/gradient.png");
      position: absolute;
      bottom: 0;
      color: $text-carousel;
      .date {
        @include date();
        color: $text-carousel;
        line-height: 14.45px;
      }
      .comments {
        display: inline-block;
        img {
          display: inline;
          margin-left: 30px;
          margin-bottom: -3px;
        }
      }
      h1 {
        font-family: "Bitter bold";
        font-size: 34px;
        line-height: 40.8px;
        width: 600px;
      }
      .btn-article {
        padding: 8px 20px;
        margin-top: 15px;
        background-color: transparent;
        border-color: $text-carousel;
        a {
          color: $text-carousel;
          text-decoration: none;
          font-family: "Varela Round";
          font-size: 14px;
        }
      }
    }
  }
}
.slider-container {
  overflow: hidden;
  position: relative;
}
.slide {
  width: 100%;
  min-width: 100%;
  position: absolute;
  left: 0;
  display: flex;
  margin: 0;
  padding: 0;
}
.app-slider-arrow {
  position: absolute;
  top: 40%;
  z-index: 2;
  padding: 0 10px;
  cursor: pointer;
  &-next {
    right: 0;
  }
  &-prev {
    left: 0;
  }
}
.slider2,
.slider3,
.slider4 {
  overflow: hidden;
}
.category {
  position: relative;
  width: 100%;
  .top h2 {
    width: max-content;
  }
  .arrows {
    position: absolute;
    padding-right: 30px;
    right: 0;
    .arrow {
      cursor: pointer;
    }
  }
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(100%);
}
.slide-in-leave-to {
  transform: translateX(-100%);
}
.slide-out-enter-from {
  transform: translateX(-100%);
}
.slide-out-leave-to {
  transform: translateX(100%);
}
</style>
