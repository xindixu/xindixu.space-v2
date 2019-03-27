<template>
  <div>
    <div class="page-header" style="background-image: url('img/bg/bg22.jpg')">
      <div class="content-center">
        <div class="container"><h1 class="title">Blog</h1></div>
      </div>
      <ScrollDown></ScrollDown>
    </div>

    <b-card-group deck>
      <b-card
        no-body
        v-for="(category, index) in categoryList"
        :header="'<h1>' + category + '</h1>'"
      >
        <b-list-group flush>
          <b-list-group-item
            v-for="article in categories[category]"
            href="#"
            class="flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{ article.title }}</h5>
              <small>{{ article.date }}</small>
            </div>

            <p class="mb-1">{{ article.title }} ...........</p>

            <small>Donec id elit non mi porta.</small>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { WorkInProgress, ScrollDown } from '@/components';
import blogList from '../assets/json/blog.json';

export default {
  name: '',
  data: () => ({
    blog: blogList,
    sortedWorkList: [],
    categoryList: ['life', 'coding', 'marketing'],
    categories: { life: [], coding: [], marketing: [] },
    tags: []
  }),
  methods: {
    filterByCategory() {
      for (let b of this.blog) {
        for (let c in this.categories) {
          if (b.category === c.toString()) {
            this.categories[c].push(b);
          }
        }
      }
      console.log(this.categories);
    }
  },
  computed: {},
  components: {
    WorkInProgress,
    ScrollDown
  },
  created() {
    this.filterByCategory();
  }
};
</script>
<style lang="scss" scoped>
.page-header {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
