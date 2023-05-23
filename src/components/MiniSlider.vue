<template>
  <div class="row slick-slider" :class="slider">
    <TransitionGroup :name="direction">
      <div
        class="single-item column"
        v-for="i in 3"
        :key="i"
        :id="i - 1"
        v-show="i - 1 == current_slide"
      >
        <span
          v-if="slider === 'slider4'"
          v-show="i == current_slide || i - 1 == current_slide"
        ></span>
        <img :src="require('../assets/Layer 59.png')" alt="slika" />
        <p class="date">August 26, 2013</p>
        <RouterLink to="/single">
          <p class="headline">
            {{ i }}For Obama, MLK's shadow looms large ahead of speech
          </p>
        </RouterLink>
      </div>
    </TransitionGroup>
  </div>
</template>
<script>
export default {
  name: "MiniSLider",
  props: ["current_slide", "direction", "slider"],
};
</script>
<style lang="scss">
@import "../scss/mixins";
@import "../scss/var";
.slick-slider {
  grid-column: span 3;
  display: flex;
  position: relative;
  &#slider-container {
    height: 430px;
    .single-item {
      position: relative;
    }
  }
  .single-item {
    width: 100%;
    display: inline-block;
    position: absolute;
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
.slider4 {
  display: flex;
  overflow: visible;
  .single-item {
    position: relative;
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
.slider2,
.slider4 {
  height: 240px;
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
