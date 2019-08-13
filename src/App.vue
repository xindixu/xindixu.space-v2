<template>
  <div id="app" v-cloak>
    <router-view name="header" />
    <div><router-view v-transition /></div>
    <router-view name="scroll" />
    <router-view name="footer" />
  </div>
</template>
<script>
export default {};
</script>
<style>
v-cloak {
  display: none;
}
body {
  overflow: hidden;
}
.swiper-pagination-bullet-active {
  background: #e2b4bd !important;
}
</style>
