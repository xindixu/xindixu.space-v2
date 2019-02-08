<!--
  add readme https://www.jianshu.com/p/c324711f12b5
  github style css https://www.npmjs.com/package/github-markdown-css
-->
<!--
  dynamic components https://blog.csdn.net/qq20004604/article/details/52479435?locationNum=2&fps=1
-->
<template>
  <div>
    <div class="page-header page-header-small">
      <Parallax
        class="page-header-image"
        style="background-image: url('img/bg/bg15.jpg')"
      >
      </Parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">{{ title }}</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <VueShowdown
        id="scrollspy-nested"
        :markdown="md"
        :options="options"
      ></VueShowdown>
    </div>
    <TableOfContent></TableOfContent>
  </div>
</template>
<script>
import { Parallax, TableOfContent } from '@/components';
import { VueShowdown } from 'vue-showdown';
import workList from '../assets/work/data.json';

export default {
  name: 'workDetail',
  data: () => ({
    works: workList,
    html: '',
    work: '',
    title: '',
    md: '',
    headers: [],
    options: {
      prefixHeaderId: 'xindi'
    }
  }),
  props: ['id'],
  watch: {
    $route(to) {
      this.id = to.params.id;
    }
  },
  computed: {},
  methods: {
    getWorkObj() {
      this.work = workList.filter(work => work.id === this.id);
      this.title = this.work[0].title;
    },
    getMd() {
      this.md = require(`../assets/markdown/${this.work[0].id}.md`);
    },
    getHeaders() {
      this.headers = document.getElementsByTagName('h2');
    }
  },
  components: {
    Parallax,
    TableOfContent,
    VueShowdown
  },
  mounted() {
    //do something after mounting vue instance
    this.getWorkObj();
    this.getMd();
  },
  updated() {
    //do something after updating vue instance
    this.getHeaders();
  }
};
</script>
<style lang="scss" scoped></style>
