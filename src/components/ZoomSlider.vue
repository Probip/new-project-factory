<template>
  <div class="zoom-slider-container">
    <img
      :src="require('../assets/Layer 36.png')"
      alt=""
      class="zoom-img zoom-img-lg"
    />
    <img
      :src="require('../assets/Layer 38.png')"
      alt=""
      class="zoom-img zoom-img-gradient"
    />
    <div class="zoom-slider slick-slider">
      <img
        :src="require('../assets/Layer 36.png')"
        alt="slika zoom slider 1"
        class="zoom-slider-img active ml-n30"
      />
      <img
        :src="require('../assets/img-2.jpg')"
        alt="slika zoom slider 2"
        class="zoom-slider-img ml-n30"
      />
      <img
        :src="require('../assets/Layer 39.png')"
        alt="slika zoom slider 3"
        class="zoom-slider-img"
      />
      <img
        :src="require('../assets/Layer40.png')"
        alt="slika zoom slider 4"
        class="zoom-slider-img"
      />
      <img
        :src="require('../assets/Layer41.png')"
        alt="slika zoom slider 5"
        class="zoom-slider-img"
      />
      <img
        :src="require('../assets/Layer42.png')"
        alt="slika zoom slider 6"
        class="zoom-slider-img"
      />
      <img
        :src="require('../assets/Layer43.png')"
        alt="slika zoom slider 7"
        class="zoom-slider-img"
      />
      <img
        :src="require('../assets/Layer44.png')"
        alt="slika zoom slider 8"
        class="zoom-slider-img"
      />
    </div>
    <img
      :src="require('../assets/search 1.svg')"
      alt=""
      class="zoom-img-icon zoom-img"
    />
  </div>
</template>
<script>
export default {
  name: "ZoomSlider",
};
</script>
<style lang="scss">
@import "../scss/mixins";
@import "../scss/var";
$slick-prev-character: url("../assets/Shape 1 copy 2.png");
$slick-next-character: url("../assets/Shape 1 copy.png");
.zoom-slider-container {
  position: relative;
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
  //overflow: hidden;
  @include flexCenter();

  .slick-slider {
    padding: 0 20px;
  }
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
  height: 100%;
  .slick-track {
    margin-top: 260px;
  }
  .slick-slide {
    margin-right: 10px;
    margin-bottom: 20px;
    overflow: hidden;
    img {
      height: 120px;
      min-width: min-content;
      cursor: pointer;
      display: flex;
      opacity: 0.5;
      &:hover {
        opacity: 1;
        outline: 2px solid $zoom-img-hover;
      }
      &.active {
        padding: 5px 0;
        background-color: $zoom-img-active;
        opacity: 1;
        transition: ease-out 0.3s;
        &:hover {
          background-color: $zoom-img-hover;
        }
      }
      &.ml-n30 {
        margin-left: -30%;
        //margin: 0;
      }
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
    display: none;
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
    //top: 30%;
    cursor: zoom-in;
    padding-right: 30px;
    margin-left: -80px;
  }
  &-zoom-out {
    //top: 40%;
    cursor: zoom-out;
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
