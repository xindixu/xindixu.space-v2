<template>
  <div id="tableOfContent">
    <b-card>
      <scrollactive
        ref="scrollactive"
        :offset="50"
        :duration="800"
        :modifyUrl="false"
        :highlightFirstItem="true"
        bezierEasingValue=".5,0,.35,1"
      >
        <a
          v-for="header in headers"
          :key="header.id"
          :href="'#' + header.id"
          class="scrollactive-item"
        >
          {{ header.innerHTML }}
        </a>
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
    console.log(this.headers);
  }
};
</script>
<style lang="scss" scoped>
#tableOfContent {
  position: sticky;
  width: 200px;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: column;

  .scrollactive-item {
    width: 200px;
  }

  .is-active {
    color: red;
  }
}
</style>
