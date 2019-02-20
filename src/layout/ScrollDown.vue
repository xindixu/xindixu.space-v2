<template>
  <div id="scrollDown">
    <div class="text-center">
      <i class="fa fa-angle-down" aria-hidden="true"></i>
      <p>Scroll Down</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ScrollDown',
  data: () => ({})
};
</script>
<style lang="scss" scoped>
#scrollDown {
  z-index: 90;
  color: white;
  position: absolute;
  left: 50vw;
  bottom: 2vh;
}
</style>
