<template>
  <div id="scrollDown" v-if="show">
    <a @click="toggleScrollTo" :style="{ color: color }">
      <div>
        <transition
          name="slideDown"
          enter-active-class="animated slideInDown"
          leave-active-class="animated fadeOut "
        >
          <i class="fa fa-angle-down" v-if="animated" aria-hidden="true"></i>
        </transition>
        <p id="text" class="tada">Scroll Down</p>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'ScrollDown',
  props: {
    color: {
      type: String,
      default: '#FFFFFF'
    },
    scrollTo: {
      type: Number,
      default: 1000
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
  methods: {
    toggleScrollTo() {
      // if (typeof this.scrollTo === 'number') {
      window.scroll({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });
      // } else {
      //   console.log(this.scrollTo);
      //   this.scrollTo.scrollIntoView(true, { behavior: 'smooth' });
      // }
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
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 2vh;
  text-align: center;

  a {
    text-decoration: none;

    #text {
      animation-duration: 3s;
      animation-iteration-count: infinite;
      cursor: pointer;
    }
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
