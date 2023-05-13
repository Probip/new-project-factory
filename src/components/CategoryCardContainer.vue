<template>
  <div class="category">
    <!-- ako je proslijeđen parametar category treba postojati link See all-->
    <div class="card-name row space-between top" v-if="category">
      <slot name="card-name">
        <h2>{{ category }}</h2>
        <router-link to="/category">See all</router-link>
      </slot>
    </div>
    <!-- ako je nije proslijeđen parametar category, 
            tada se proslijeđuje parametar carouselheadline i trebaju biti prikazane strelice -->
    <div class="carousel-arrows row space-between top" v-else>
      <slot name="carousel-arrows">
        <h2>{{ carouselheadline }}</h2>
        <div class="row arrows">
          <span class="arrow">
            <img
              v-if="class_color == 'tech'"
              :src="require('../assets/Shape 1.png')"
              alt="arrow-left"
              class="icon prev4"
              @click="$emit('previous')"
            />
            <img
              v-else
              :src="require('../assets/Shape 1-1.png')"
              alt="arrow-left"
              class="icon prev4"
              @click="$emit('previous')"
            />
          </span>
          <span class="arrow">
            <img
              v-if="class_color == 'tech'"
              :src="require('../assets/Shape 1-2.png')"
              alt="arrow-right"
              class="icon next4"
              @click="$emit('next')"
            />
            <img
              v-else
              :src="require('../assets/Shape 1-3.png')"
              alt="arrow-right"
              class="icon next4"
              @click="$emit('next')"
            />
          </span>
        </div>
      </slot>
    </div>

    <slot></slot>
  </div>
</template>
<script>
require("../assets/Shape 1-2.png");
require("../assets/Shape 1.png");
require("../assets/Shape 1-1.png");
require("../assets/Shape 1-3.png");
export default {
  name: "CategoryCardContainer",
  props: ["category", "carouselheadline", "class_color"],
  data() {
    return {
      toggle: false,
      current_slide: 0,
      direction: "slide-in",
      slideInterval: null,
      isSlideAnimating: false,
    };
  },
};
</script>
