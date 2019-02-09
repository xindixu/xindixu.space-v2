<template>
  <div>
    <div class="page-header clear-filter" :filter-color="filter">
      <div
        class="page-header-image"
        style="background-image: url('img/bg/bg23.jpg')"
      ></div>
      <div class="content-center">
        <div class="container">
          <h1 class="title">{{ title }}</h1>
          <div class="text-center">
            <badge v-for="tag in tags" :key="tag" type="success">
              {{ tag }}
            </badge>
          </div>
        </div>
      </div>
    </div>

    <b-container class="mt-5">
      <VueShowdown id="mdContent" :markdown="md"></VueShowdown>
    </b-container>
    <TableOfContent></TableOfContent> <SocialSideBar></SocialSideBar>
  </div>
</template>
<script>
import { Badge, TableOfContent, SocialSideBar } from '@/components';
import { VueShowdown } from 'vue-showdown';
import workList from '../assets/work/data.json';

export default {
  name: 'WorkDetail',
  data: () => ({
    works: workList,
    work: '',
    html: '',
    title: '',
    tags: [],
    md: '',
    filter: ''
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
      this.tags = this.work[0].tags;
    },
    getMd() {
      this.md = require(`../assets/markdown/${this.work[0].id}.md`);
    },
    getFilter() {
      let arr = ['pink', 'red', 'purple', 'blue'];
      let i = Math.floor(Math.random() * arr.length);
      this.filter = arr[i];
    }
  },
  components: { Badge, TableOfContent, SocialSideBar, VueShowdown },
  mounted() {
    //do something after mounting vue instance
    this.getWorkObj();
    this.getMd();
    this.getFilter();
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
#tableOfContent {
  position: fixed;
  top: 60px;
  right: 10px;
}

.badge {
  margin-left: 5px;
  margin-right: 5px;
}

#socialSideBar {
  position: fixed;
  top: 20vh;
  left: 10vw;
}

/* iframes & issuu embed */
.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
