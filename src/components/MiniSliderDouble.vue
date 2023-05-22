<template>
  <div class="slick-slider slider4 row">
    <TransitionGroup :name="`fade-${direction}`">
      <div
        class="column single-item"
        v-for="(img, index) in imgs"
        :key="index"
        :id="index"
        v-show="index == current_slide || index == next_slide"
      >
        <img :src="require(`../assets/${img}`)" alt="slika" />
        <p class="date">August 26, 2013</p>
        <RouterLink to="/single"
          ><p class="headline">
            For Obama, MLK's shadow looms large ahead of speech
          </p></RouterLink
        >
      </div>
    </TransitionGroup>
  </div>
</template>
<script>
export default {
  name: "MiniSLiderDouble",
  props: ["current_slide", "next_slide", "direction"],
  data() {
    return {
      slideInterval: null,
      imgs: ["Layer 52.png", "img-1.jpg", "img-2.jpg", "img-3.png"],
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
.slider4 {
  overflow: hidden;
  min-height: max-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  //height: 240px;
  .single-item {
    &.column {
      grid-column: span 1;
      grid-row-start: 1;
      grid-row-end: 1;
      &:nth-child(2) {
        z-index: 5;
      }
    }
    .headline {
      width: 90%;
    }
    img {
      min-width: 100%;
    }
  }
}
.fade-slide-in-enter-active,
.fade-slide-in-leave-active,
.fade-slide-out-enter-active,
.fade-slide-out-leave-active {
  transition: all 1s linear;
}
.fade-slide-in-enter-from {
  transform: translateX(100%);
}
.fade-slide-in-leave-to {
  transform: translateX(-100%);
}
.fade-slide-out-enter-from {
  transform: translateX(-100%);
}
.fade-slide-out-leave-to {
  transform: translateX(100%);
}
</style>
