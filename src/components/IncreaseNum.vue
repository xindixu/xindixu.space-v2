<template>
  <div id="">
    <transition name="" appear>
      <h2 v-observe-visibility="visibilityChanged">{{ displayNumber }}</h2>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'IncreaseNum',
  props: ['start', 'end'],
  data: () => {
    return {
      isVisible: false,
      displayNumber: 0,
      interal: false
    };
  },
  watch: {
    isVisible() {
      if (this.isVisible) {
        return this.animate(0, this.end);
      }
    }
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    },
    animate() {
      clearInterval(this.interval);

      if (this.end == this.displayNumber) {
        return;
      }

      this.interval = window.setInterval(
        function() {
          if (this.end != this.displayNumber) {
            let change = (this.end - this.displayNumber) / 10;
            change = change >= 0 ? Math.ceil(change) : Math.floor(change);
            this.displayNumber = this.displayNumber + change;
          }
        }.bind(this),
        40
      );
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
