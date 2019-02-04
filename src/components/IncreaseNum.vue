<template>
  <div id="">
    <transition name="" appear>
      <h2 v-observe-visibility="visibilityChanged">{{ tweeningValue }}</h2>
    </transition>
  </div>
</template>
<script>
import TWEEN from '@tweenjs/tween.js';

export default {
  name: 'IncreaseNum',
  props: ['start', 'end'],
  data: () => {
    return {
      isVisible: false,
      tweeningValue: 0
    };
  },
  watch: {
    isVisible() {
      if (this.isVisible) {
        return this.tween(0, this.end);
      }
    }
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible;
    },
    tween: function(startValue, endValue) {
      var vm = this;
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }

      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 1000)
        .onUpdate(function(object) {
          vm.tweeningValue = object.tweeningValue.toFixed(0);
        })
        .start();

      animate();
    }
  }
};
</script>
<style lang="scss" scoped>
h2 {
  margin-top: 15px;
  margin-left: 15px;
}
</style>
