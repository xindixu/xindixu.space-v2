<template>
  <div id="tableOfContent">
    <transition
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <button
        v-if="isContentShown"
        :class="isTOCShown ? 'btn-shown' : 'btn-hidden'"
        type="button"
        class="btn btn-icon btn-round btn-info"
        @click="userToggleClose = !userToggleClose;"
      >
        <i
          class="now-ui-icons"
          :class="isTOCShown ? 'arrows-1_minimal-up' : 'arrows-1_minimal-down'"
        ></i>
      </button>
    </transition>
    <transition
      enter-active-class="animated slideInDown"
      leave-active-class="animated bounceOutUp"
    >
      <b-card id="card" v-show="isTOCShown">
        <scrollactive
          v-on:itemchanged="onItemChanged"
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
    isContentShown: false,
    userToggleClose: false
  }),
  mounted() {
    let content = document.getElementById('htmlContent');
    this.allHeaders = content.childNodes;
    //  console.log(this.allHeaders);
  },
  watch: {
    allHeaders() {
      for (let el of this.allHeaders) {
        if (el.tagName == 'H2' || el.tagName == 'H3') {
          el.id = el.innerHTML;
          //  console.log(el);
          this.headers.push(el);
        }
      }
    },
    isContentShown() {
      this.sendData();
    }
  },
  computed: {
    isTOCShown() {
      return this.isContentShown && !this.userToggleClose ? true : false;
    }
  },
  methods: {
    onItemChanged(event, currentItem, lastActiveItem) {
      //console.log(currentItem);
      if (typeof currentItem == 'undefined') {
        this.isContentShown = false;
      } else {
        this.isContentShown = true;
      }
    },
    sendData() {
      this.$eventBus.$emit('workContentVisible', this.isContentShown);
    }
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
      color: $brand-info;

      &:hover,
      &:focus {
        text-decoration: none;
        color: $brand-success;
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
    margin-left: 160px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  }

  #placeholder {
    height: 100px;
  }
}
</style>
