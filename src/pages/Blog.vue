<template>
  <div>
    <div class="page-header" style="background-image: url('img/bg/bg22.jpg')">
      <div class="content-center">
        <div class="container"><h1 class="title">Blog</h1></div>
      </div>
      <ScrollDown></ScrollDown>
    </div>
    <b-container fluid class="mt-5">
      <b-card-group deck>
        <b-card no-body v-for="category in categoryList" :key="category">
          <h1 slot="header" class="mb-1 ml-3">{{ category }}</h1>
          <b-list-group flush>
            <b-list-group-item
              v-for="article in categories[category]"
              href="#"
              class="flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5>{{ article.title }}</h5>
                <h5>
                  <small>{{ article.date }}</small>
                </h5>
              </div>

              <p class="mb-1">{{ article.title }} ...........</p>
              <badge v-for="tag in article.tags" :key="tag" type="success">
                {{ tag }}
              </badge>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-card-group>
      <h2>Tags</h2>
      <b-row>
        <badge v-for="tag in tags" :key="tag" type="primary"> {{ tag }} </badge>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Badge, ScrollDown } from '@/components';
import blogList from '../assets/json/blog.json';

export default {
  name: '',
  data: () => ({
    blog: blogList,
    categoryList: ['life', 'coding', 'marketing'],
    categories: { life: [], coding: [], marketing: [] },
    collections: [],
    tags: []
  }),
  methods: {
    filter() {
      for (let b of this.blog) {
        for (let c in this.categories) {
          if (b.category === c.toString()) {
            this.categories[c].push(b);
          }
        }
      }
      this.tags = [
        ...new Set(
          this.blog
            .map(item => {
              return item.tags;
            })
            .flat()
        )
      ];

      this.collections = [...new Set(this.blog.map(item => item.collection))];
      console.log(this.tags);
      console.log(this.collections);
    },
    getSlug() {}
  },
  computed: {},
  components: {
    Badge,
    ScrollDown
  },
  created() {
    this.filter();
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
