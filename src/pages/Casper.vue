<template>
  <div id="imgContainer" class="center-text">
    <h2>Dr. Capser Meowspy!</h2>
    <masonry :cols="5" :gutter="30">
      <div v-for="(img, index) in imgArr" :key="index">
        <img class="image" :src="img" @click="incr(index);" />
      </div>
    </masonry>
    <vue-gallery-slideshow
      :images="imgArr"
      :index="index"
      @close="index = null;"
    ></vue-gallery-slideshow>
  </div>
</template>
<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  name: '',
  data: () => ({
    imgArr: [],
    index: null
  }),
  methods: {
    createImgArr() {
      for (let i = 1; i < 40; i++) {
        this.imgArr.push('/img/cat/' + i + '.jpeg');
      }
    },
    incr(i) {
      this.index = i;
    }
  },
  components: {
    VueGallerySlideshow
  },
  created() {
    //do something after creating vue instance
    this.createImgArr();
  }
};
</script>
<style lang="scss" scoped>
#imgContainer {
  text-align: center;
  margin-top: 10vh;
  padding: 0 1vw 0 0;
}
.image {
  width: 100%;
  height: 100%;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}
</style>
