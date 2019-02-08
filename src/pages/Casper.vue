<template>
  <b-container fluid>
    <b-row>
      <b-col cols="4">
        <b-navbar v-b-scrollspy:scrollspy-nested class="flex-column">
          <b-nav pills class="flex-column">
            <b-nav-item v-for="h in headers" :key="h" :href="'#' + h">{{
              h
            }}</b-nav-item>
          </b-nav>
        </b-navbar>
      </b-col>
      <b-col cols="8">
        <div id="scrollspy-nested" v-for="h in headers" :key="h">
          <h4 :id="h">{{ h }}</h4>
          <p>{{ text }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      text: `
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
        tempor. Laborum consequat non elit enim exercitation cillum aliqua
        consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
        laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
        Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
        nisi sit est tempor laborum mollit labore officia laborum excepteur
        commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
        ipsum commodo tempor sunt in proident.
      `,
      headers: ['item1', 'item2', 'item3']
    };
  }
};
</script>
<!-- scrollspy-nested-1.vue -->

<style lang="scss" scoped>
#scrollspy-nested {
  position: relative;
  height: 500px;
  overflow-y: auto;
}
</style>
