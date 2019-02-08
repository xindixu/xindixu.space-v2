<template>
  <div id="tableOfContent">
    <b-card>
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
      <button
        id="closeBtn"
        type="button"
        class="btn btn-icon btn-round btn-primary"
      >
        <i class="now-ui-icons arrows-1_minimal-left"></i>
      </button>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'TableOfContent',
  data: () => ({
    headers: [],
    allHeaders: []
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
  position: sticky;
  width: 200px;
  right: 10px;
  bottom: 100px;
  display: flex;
  flex-direction: column;

  a:hover,
  a:focus {
    text-decoration: none;
    color: $brand-warning;
  }

  .item {
    width: 200px;
    height: 35px;

    .sub {
      margin-left: 20px;
    }
    .is-active {
      color: $brand-success;
    }
  }

  #closeBtn {
    margin: 0;
    position: absolute;
    top: 50%;
    right: -10%;
    transform: translate(0%, -50%);
  }
}
</style>
