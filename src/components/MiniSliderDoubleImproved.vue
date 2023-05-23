<template>
  <div class="slick-slider slider4 slider-double row">
    <div id="double-slides">
      <div
        class="column single-item"
        v-for="(img, index) in imgs"
        :key="index"
        :id="index"
        :class="`${direction}`"
      >
        <img :src="require(`../assets/${img}`)" alt="slika" />
        <p class="date">August 26, 2013</p>
        <RouterLink to="/single"
          ><p class="headline">
            For Obama, MLK's shadow looms large ahead of speech
          </p></RouterLink
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MiniSLiderDoubleImproved",
  props: ["current-slide", "direction"],
  data() {
    return {
      slideInterval: null,
      imgs: ["Layer 52.png", "Layer 52.png", "Layer 52.png", "Layer 52.png"],
      imgss: ["Layer 52.png", "img-1.jpg", "img-2.jpg", "img-3.png"],
    };
  },
  methods: {
    mounted() {
      this.slideInterval = setInterval(() => {
        console.log("aaa");
      }, 2000);
    },
  },
};
</script>
<style lang="scss">
.slider-double {
  overflow: hidden;
  min-height: max-content;
  position: relative;
  height: 240px;
  #double-slides {
    position: absolute;
    display: flex;
    min-width: 210%;
    width: 210%;
    max-width: 210%;
    justify-content: space-between;
    .single-item {
      max-width: 22%;
      &.double-animate {
        animation-name: double-slider;
        animation-duration: 1s;
      }
      &.double-animate-slide-out {
        animation-name: double-slider-slide-out;
        animation-duration: 1s;
      }
      &.column {
        margin-right: 25px;
        max-width: 270px;
      }
      .headline {
        width: 90%;
      }
      img {
        width: 100%;
      }
    }
  }
}

@keyframes double-slider {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-110%);
  }
}

@keyframes double-slider-slide-out {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
