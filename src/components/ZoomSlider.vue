<template>
  <div class="zoom-slider-container">
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
    <img
      v-for="(image, index) in imgs"
      :key="image"
      :src="index == current_slide ? require(`../assets/${image}`) : ''"
      alt=""
      class="zoom-img zoom-img-lg"
    />
    <img
      :src="require('../assets/Layer 38.png')"
      alt=""
      class="zoom-img zoom-img-gradient"
    />
    <div class="zoom-slider slick-slider">
      <div class="slides" id="slides">
        <TransitionGroup name="zoom-slide-in">
          <div
            class="zoom-slider-img-container"
            v-for="(image, index) in imgs"
            :key="image"
            :id="'img-' + index"
            :class="
              index == current_slide ? `active ${animation}` : `${animation}`
            "
            @click="activeSlide"
          >
            <img
              :src="require(`../assets/${image}`)"
              :alt="'slika zoom slider' + index"
              class="zoom-slider-img"
            />
          </div>
        </TransitionGroup>
      </div>
    </div>
    <img
      :src="require('../assets/search 1.svg')"
      alt=""
      class="zoom-img-icon zoom-img"
      @click="showModal"
    />
  </div>
  <div id="modal" class="modal">
    <div class="modal-top">
      <span class="modal-close" id="close" @click="hideModal">X</span>
      <span class="modal-zoom-in" id="zoom-in" @click="zoomIn">Zoom-in</span>
      <span class="modal-zoom-out" id="zoom-out" @click="zoomOut"
        >Zoom-out</span
      >
    </div>
    <img
      v-for="(image, index) in imgs"
      :key="image"
      :src="index == current_slide ? require(`../assets/${image}`) : ''"
      alt=""
      :class="index == current_slide ? 'modal-img' : ''"
    />
  </div>
</template>
<script>
export default {
  name: "ZoomSlider",
  data() {
    return {
      current_slide: 0,
      animation: "animate-slide-out",
      isZoomSliderAnimating: false,
      zoom: 1,
      imgs: [
        "Layer 36.png",
        "img-2.jpg",
        "Layer 39.png",
        "Layer40.png",
        "Layer41.png",
        "Layer42.png",
        "Layer43.png",
        "Layer44.png",
      ],
    };
  },
  methods: {
    nextSlide() {
      if (!this.isZoomSliderAnimating) {
        this.isZoomSliderAnimating = true;
        let active_slide = document.getElementById("slides").firstElementChild;
        active_slide.classList.remove("active");
        //set new current_slide and add class active
        let current_slide = this.current_slide;
        this.current_slide =
          current_slide == this.imgs.length - 1 ? 0 : current_slide + 1;
        this.animation = "animate";
        let all_slides = document.querySelectorAll(
          ".zoom-slider-img-container"
        );
        all_slides.forEach((slide) => {
          slide.classList.add("animate");
        });
        //append slide
        document.getElementById("slides").appendChild(active_slide);
        if (this.isZoomSliderAnimating) {
          setTimeout(() => {
            this.isZoomSliderAnimating = false;
            all_slides.forEach((slide) => {
              slide.classList.remove("animate");
            });
          }, 1000);
        }
      }
    },
    previousSlide() {
      if (!this.isZoomSliderAnimating) {
        this.isZoomSliderAnimating = true;
        let new_slide = document.getElementById("slides").lastElementChild;
        //set new current_slide and add class active
        let current_slide = this.current_slide;
        this.current_slide =
          current_slide == 0 ? this.imgs.length - 1 : current_slide - 1;
        this.animation = "animate-slide-out";
        //prepend slide
        document.getElementById("slides").prepend(new_slide);
        let all_slides = document.querySelectorAll(
          ".zoom-slider-img-container"
        );
        all_slides.forEach((slide) => {
          slide.classList.add("animate-slide-out");
        });
        if (this.isZoomSliderAnimating) {
          setTimeout(() => {
            this.isZoomSliderAnimating = false;
            all_slides.forEach((slide) => {
              slide.classList.remove("animate-slide-out");
            });
          }, 1000);
        }
      }
    },
    activeSlide(e) {
      let all_slides = document.querySelectorAll(".zoom-slider-img-container");
      all_slides.forEach((slide) => {
        slide.classList.remove("animate-slide-out");
        slide.classList.remove("animate");
      });
      this.animation = "";
      this.current_slide = parseFloat(e.target.parentElement.id.slice(4));
      document
        .querySelector(".active")
        .classList.remove(["animate", "animate-slide-out"]);
      //console.log(e.target.parentElement.id.slice(4));
    },
    showModal() {
      document.getElementById("modal").style.visibility = "visible";
      this.zoom = 1;
    },
    hideModal() {
      document.getElementById("modal").style.visibility = "hidden";
    },
    zoomIn() {
      if (this.zoom < 2.5) {
        this.zoom += 0.4;
      }
      document.querySelector(
        ".modal-img"
      ).style.transform = `scale(${this.zoom})`;
    },
    zoomOut() {
      if (this.zoom > 1) {
        this.zoom -= 0.4;
      }
      document.querySelector(
        ".modal-img"
      ).style.transform = `scale(${this.zoom})`;
    },
  },
};
</script>
<style lang="scss">
@import "../scss/mixins";
@import "../scss/var";
$slick-prev-character: url("../assets/Shape 1 copy 2.png");
$slick-next-character: url("../assets/Shape 1 copy.png");
.zoom-slider-container {
  height: 400px;
  grid-column: 1 / span 3;
  background-color: $footer-header-bg;
  background-repeat: no-repeat;
  background-size: 130%;
  background-position: 50% 50%;
  background-position-x: 50%;
  background-position-y: 50%;
  transition-timing-function: ease-in;
  background-blend-mode: color-burn;
  position: relative;
  @include flexCenter();

  .zoom-img {
    position: absolute;
    &-lg {
      z-index: 0;
      padding-left: 0;
      height: 100%;
      top: 0;
    }
    &-gradient {
      bottom: 0;
      width: 100%;
    }
    &-icon {
      cursor: pointer;
      width: 80px;
    }
  }
}
.zoom-slider {
  width: 100%;
  height: fit-content;
  margin-top: 240px;
  //border: red solid 4px;
  padding: 0 7px;
  position: relative;
  overflow: hidden;
  .slides {
    display: flex;
    //border: purple solid 4px;
    width: fit-content;
  }
  .zoom-slider-img-container {
    width: 120px;
    min-width: 120px;
    max-width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin: 6px;
    &.animate {
      animation-name: zoom-slider;
      animation-duration: 1s;
    }
    &.animate-slide-out {
      animation-name: zoom-slider-slide-out;
      animation-duration: 1s;
    }
    &.active {
      opacity: 1;
      outline: $zoom-img-active 5px solid;
      background-color: $zoom-img-active;
      transition: ease-out 0.3s;
      &:hover {
        background-color: $zoom-img-hover;
      }
      .zoom-slider-img {
        opacity: 1;
      }
    }
  }
  .zoom-slider-img {
    position: absolute;
    height: 120px;
    display: flex;
    opacity: 0.5;
    &:hover {
      opacity: 1;
      outline: 2px solid $zoom-img-hover;
    }
  }
}

.modal {
  visibility: hidden;
  background-color: rgba($color: #363f48, $alpha: 0.97);
  width: 100%;
  height: 100vh;
  padding-bottom: 150px;
  padding-top: 200px;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  z-index: 20;
  @include flexCenter();
  &-top {
    background-color: #363f48;
    position: fixed;
    top: 0;
    z-index: 100;
    height: 65px;
    width: 100%;
  }
  &-img {
    //display: none;
    padding: 80px 0;
    animation-name: zoom;
    animation-duration: 0.6s;
    max-width: 100%;
  }
  &-close,
  &-zoom-in,
  &-zoom-out {
    position: fixed;
    z-index: 21;
    top: 0;
    padding: 20px;
    margin: 0 30px;
    cursor: pointer;
    font-family: "Varela Round";
    font-size: 28px;
    color: $white;
  }
  &-close {
    right: 0;
  }
  &-zoom-out,
  &-zoom-in {
    font-size: 12px;
    padding: 10px 20px;
    border: $white solid 2px;
    top: 20px;
    border-radius: 3px;
    left: 50vw;
  }
  &-zoom-in {
    cursor: zoom-in;
    padding-right: 30px;
    margin-left: -80px;
  }
  &-zoom-out {
    cursor: zoom-out;
  }
}

@keyframes zoom-slider {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes zoom-slider-slide-out {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
