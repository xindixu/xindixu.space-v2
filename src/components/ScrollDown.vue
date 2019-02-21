<template>
  <div id="scrollDown" v-if="show" :style="{ color: color }">
    <div class="text-center">
      <transition
        name="slideDown"
        enter-active-class="animated slideInDown"
        leave-active-class="animated fadeOut "
      >
        <i class="fa fa-angle-down" v-if="animated" aria-hidden="true"></i>
      </transition>
      <p id="text" class="tada">Scroll Down</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ScrollDown',
  props: {
    color: {
      type: String,
      default: '#FFFFFF'
    }
  },
  data: () => ({
    animated: false
  }),
  computed: {
    show() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (scrollValue < 500) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.animated = !this.animated;
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
<style lang="scss" scoped>
#scrollDown {
  z-index: 90;
  position: absolute;
  left: 50vw;
  bottom: 2vh;

  #text {
    animation-duration: 3s;
    animation-iteration-count: 10;
  }
}

@keyframes tada {
  from {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  5% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  10%,
  30%,
  50% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  20%,
  40%,
  60% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  70%,
  80%,
  90%,
  to {
    transform: scale3d(0.9, 0.9, 0.9);
  }
}

.tada {
  animation-name: tada;
}
</style>
