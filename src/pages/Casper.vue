<template>
  <div id="imgContainer" class="center-text">
    <transition appear enter-active-class="animated bounceIn">
      <h2>Dr. Capser Meowspy!</h2>
    </transition>

    <masonry :cols="5" :gutter="30">
      <div
        v-for="(img, index) in imgArr"
        :key="index"
        class="entranceFromTop"
        :style="{ 'animation-delay': index * 50 + 'ms' }"
      >
        <img class="image" :src="img" />
      </div>
    </masonry>
  </div>
</template>
<script>
export default {
  name: 'Casper',
  data: () => ({
    imgArr: [],
    index: null
  }),
  methods: {
    createImgArr() {
      for (let i = 1; i < 40; i++) {
        this.imgArr.push('/img/cat/' + i + '.jpeg');
      }
    }
  },
  created() {
    this.createImgArr();
  }
};
</script>
<style lang="scss" scoped>
#imgContainer {
  text-align: center;
  margin-top: 10vh;
  padding: 0 1vw 0 0;

  .image {
    width: 100%;
    height: 100%;
    margin: 10px;
    border-radius: 3px;
  }
}

.entranceFromTop {
  opacity: 0;
  animation-fill-mode: forwards;
  animation-duration: 2s;
  animation-name: entranceFromTop;
}

@keyframes entranceFromTop {
  from {
    opacity: 0;
    transform: translateY(-80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
