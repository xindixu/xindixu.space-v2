<!-- vue-gallery-slideshow -->
<template>
  <div id="imgContainer" class="center-text">
    <transition appear enter-active-class="animated bounceIn">
      <h2>Dr. Capser Meowspy!</h2>
    </transition>

    <button @click="shuffle">Shuffle</button>
    <masonry :cols="5" :gutter="30">
      <transition-group name="move">
        <div v-for="(img, index) in imgArr" :key="index">
          <img class="image" :src="img" />
        </div>
      </transition-group>
    </masonry>
  </div>
</template>
<script>
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
    shuffle: function() {
      let length = this.imgArr.length,
        pos,
        temp,
        clone = [...this.imgArr];
      for (let i = 0; i < length; i++) {
        pos = Math.floor(Math.random() * length);
        temp = clone[i];
        clone[i] = clone[pos];
        clone[pos] = temp;
      }
      this.imgArr = clone;
      console.log(this.imgArr);
    }
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

  .image {
    width: 100%;
    height: 100%;
    margin: 10px;
    border-radius: 3px;
  }
}

.move {
  transition: all 1s;
}
</style>
