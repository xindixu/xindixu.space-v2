<template>
  <div id="tableOfContent">
    <button
      :class="isShow ? 'btn-shown' : 'btn-hidden'"
      type="button"
      class="btn btn-icon btn-round btn-primary"
      @click="isShow = !isShow;"
    >
      <i
        class="now-ui-icons"
        :class="isShow ? 'arrows-1_minimal-up' : 'arrows-1_minimal-down'"
      ></i>
    </button>
    <transition
      enter-active-class="animated slideInDown"
      leave-active-class="animated bounceOutUp"
    >
      <b-card id="card" v-if="isShow">
        <scrollactive
          ref="scrollactive"
          :offset="50"
          :duration="800"
          :modifyUrl="false"
          bezierEasingValue=".5,0,.35,1"
        >
          <div class="item" v-for="header in headers" :key="header.id">
            <a
              :href="'#' + header.id"
              class="scrollactive-item"
              :class="header.tagName === 'H3' ? 'sub' : ''"
            >
              {{ header.innerHTML }}
            </a>
          </div>
        </scrollactive>
      </b-card>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'TableOfContent',
  data: () => ({
    headers: [],
    allHeaders: [],
    isShow: true
  }),
  mounted() {
    let content = document.getElementById('mdContent');
    this.allHeaders = content.childNodes;
    console.log(this.allHeaders);
  },
  watch: {
    allHeaders() {
      for (let el of this.allHeaders) {
        if (el.tagName == 'H2' || el.tagName == 'H3') {
          this.headers.push(el);
        }
      }
      console.log(this.headers);
    }
  },
  updated() {
    //do something after updating vue instance
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/now-ui-kit/variables.scss';

#tableOfContent {
  z-index: 50;
  width: 200px;
  display: flex;
  flex-direction: column;

  .item {
    width: 200px;

    a {
      line-height: 35px;

      &:hover,
      &:focus {
        text-decoration: none;
        color: $brand-warning;
      }
    }
    .sub {
      margin-left: 20px;
    }
    .is-active {
      color: $brand-success;
    }
  }

  .btn {
    z-index: 100;
    &-shown {
      /*       margin-top: -50px;
     */
    }
  }

  #placeholder {
    height: 100px;
  }
}
/*
.slide-enter,
.slide-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
.slide-enter-active {
  animation: slide-down 1s ease;
  transition: opacity 0.5s;
}

.slide-leave-active {
  animation: slide-up 1s ease;
  transition: opacity 0.5s;
}

@keyframes slide-up {
  from {
    transform: translateY(-1000px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-down {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(100px);
  }
} */
</style>
