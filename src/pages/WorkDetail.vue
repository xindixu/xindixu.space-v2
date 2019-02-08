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
          <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <b-container>
      <VueShowdown id="mdContent" :markdown="md"></VueShowdown>
    </b-container>
    <TableOfContent></TableOfContent>
  </div>
</template>
<script>
import { TableOfContent, Badge } from '@/components';
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
      let arr = ['pink', 'orange', 'purple', 'blue', 'yellow', 'green'];
      let i = Math.floor(Math.random() * arr.length);
      this.filter = arr[i];
    }
  },
  components: {
    TableOfContent,
    VueShowdown,
    Badge
  },
  mounted() {
    //do something after mounting vue instance
    this.getWorkObj();
    this.getMd();
    this.getFilter();
  }
};
</script>

<style lang="scss" scoped>
#tableOfContent {
  position: fixed;
  top: 60px;
  left: 10px;
}

.badge {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
