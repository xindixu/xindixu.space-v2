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
          <a :href="'#' + header.id" class="scrollactive-item">
            {{ header.innerHTML }}
          </a>
        </div>
      </scrollactive>
    </b-card>
  </div>
</template>
<script>
export default {
  name: 'TableOfContent',
  data: () => ({
    headers: []
  }),
  mounted() {
    this.headers = document.getElementsByTagName('h2');
    // console.log(this.headers);
  }
};
</script>
<style lang="scss" scoped>
#tableOfContent {
  position: sticky;
  width: 150px;
  right: 10px;
  bottom: 100px;
  display: flex;
  flex-direction: column;

  a:hover,
  a:focus {
    text-decoration: none;
  }

  .item {
    width: 150px;
    height: 35px;
  }

  .is-active {
    color: red;
  }
}
</style>
