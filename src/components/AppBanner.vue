<template>
  <div class="banner">banner</div>
</template>
<script>
export default {
  name: "AppBanner",
};
</script>
<style lang="scss">
@import "../scss/mixins";
@import "../scss/var";
.banner {
  border: solid $border-color 1px;
  color: $text-light;
  height: 120px;
  background-color: $white;
  font-family: "Varela Round";
  font-size: 14px;
  @include flexCenter();
  &-lg {
    grid-column: span 3;
  }
  &-md {
    grid-column: span 2;
  }
  &-sm {
    grid-column: span 1;
  }
  &-xs {
    width: 120px;
    height: 120px;
  }
}
.container-banner-xs {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 20px;
  background-color: $bg-banner-container;
}
</style>
