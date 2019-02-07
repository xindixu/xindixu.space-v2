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
    <div class="container"><VueShowdown :markdown="md"></VueShowdown></div>
  </div>
</template>
<script>
import { Parallax } from '@/components';
import { VueShowdown } from 'vue-showdown';

import workList from '../assets/work/data.json';
import { nokiaDemoCenter, stayAtHome } from '../assets/markdown';

export default {
  name: 'workDetail',
  data: () => ({
    works: workList,
    html: '',
    work: '',
    title: '',
    md: ''
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
    }
  },
  components: {
    Parallax,
    VueShowdown
  },
  mounted() {
    this.getWorkObj();
    this.getMd();
  }
};
</script>
<style lang="scss" scoped></style>
