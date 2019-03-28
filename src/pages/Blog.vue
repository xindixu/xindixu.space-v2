<template>
  <div>
    <div class="page-header" style="background-image: url('img/bg/bg22.jpg')">
      <div class="content-center">
        <div class="container"><h1 class="title">Blog</h1></div>
      </div>
      <ScrollDown></ScrollDown>
    </div>

    <b-container fluid class="mt-5 px-5">
      <section>
        <b-row>
          <b-col cols="sm"> <img src="img/bg/bg1.jpg" /> </b-col>
          <b-col cols="sm">
            <h1>Search bar</h1>
            <div v-for="i of [1, 2, 3]">skjdfhskjdf</div>
          </b-col>
        </b-row>
      </section>

      <section>
        <!-- TODO: change it to collection + layout 3 cols -->
        <h2>Collection ---------</h2>
        <b-card-group deck>
          <b-card no-body v-for="category in categoryList" :key="category">
            <h2 slot="header" class="mb-1 ml-3">{{ category }}</h2>
            <b-list-group flush>
              <b-list-group-item
                v-for="article in categories[category]"
                :key="article.title"
                href="#"
                class="flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5>{{ article.title }}</h5>

                  <h5>
                    <small>{{ article.date }}</small>
                  </h5>
                </div>

                <p class="mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  repellat, deserunt minus ullam ut quam aspernatur quod
                  voluptatem accusamus laborum.
                </p>
                <badge v-for="tag in article.tags" :key="tag" type="success">
                  {{ tag }}
                </badge>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-card-group>
      </section>
      <section>
        <h2>Category ---------</h2>
        <card>
          <tabs
            slot="raw-content"
            type="primary"
            square
            centered
            tab-content-classes="tab-content-padding text-center"
          >
            <tab-pane
              v-for="(category, index) in categoryList"
              :key="category"
              class="text-center"
            >
              <template slot="label">
                <i :class="'now-ui-icons ' + icons[index]"></i>{{ category }}
              </template>

              <h2 slot="header" class="mb-1 ml-3">{{ category }}</h2>
              <b-list-group flush>
                <b-list-group-item
                  v-for="article in categories[category]"
                  :key="article.title"
                  href="#"
                  class="flex-column align-items-start"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5>{{ article.title }}</h5>

                    <h5>
                      <small>{{ article.date }}</small>
                    </h5>
                  </div>

                  <p class="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nisi repellat, deserunt minus ullam ut quam aspernatur quod
                    voluptatem accusamus laborum.
                  </p>
                  <badge v-for="tag in article.tags" :key="tag" type="success">
                    {{ tag }}
                  </badge>
                </b-list-group-item>
              </b-list-group>
            </tab-pane>
          </tabs>
        </card>
      </section>
      <section>
        <h2>Tags ---------</h2>
        <b-row>
          <n-button
            round
            size="sm"
            v-for="tag in tags"
            :key="tag"
            type="primary"
            class="mx-1"
            >{{ tag }}</n-button
          >
        </b-row>
      </section>
    </b-container>
  </div>
</template>

<script>
import { Button, Card, Tabs, TabPane, Badge, ScrollDown } from '@/components';
import blogList from '../assets/json/blog.json';

export default {
  name: 'Blog',
  data: () => ({
    blog: blogList,
    categoryList: ['life', 'coding'],
    icons: ['transportation_air-ballon', 'education-atom'],
    categories: { life: [], coding: [] },
    collections: [],
    tags: []
  }),
  methods: {
    generate() {
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
    Card,
    Tabs,
    TabPane,
    Badge,
    ScrollDown,
    [Button.name]: Button
  },
  created() {
    this.generate();
  }
};
</script>
<style lang="scss" scoped>
.page-header {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
img {
  width: 100%;
}
</style>
