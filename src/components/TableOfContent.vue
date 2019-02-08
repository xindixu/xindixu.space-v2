<template>
  <div id="scrollspy">
    <b-navbar>
      <b-nav v-b-scrollspy:scrollspy-nested="80" class="flex-column">
        <b-nav-item
          v-for="header in headers"
          :key="header.id"
          :href="'#' + header.id"
        >
          {{ header.innerHTML }}
        </b-nav-item>
      </b-nav>
    </b-navbar>
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
#scrollspy {
  position: sticky;
  width: 200px;
  right: 10px;
  bottom: 10px;

  .navbar {
    width: 200px;
    .nav-item {
      text-align: left;
      a:not(.btn):not(.dropdown-item) {
        color: black;
      }
    }
    .active {
      a:not(.btn):not(.dropdown-item) {
        color: red;
      }
    }
  }
}
</style>
