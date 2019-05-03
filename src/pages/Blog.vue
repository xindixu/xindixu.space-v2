<template>
  <div>
    <div class="page-header" style="background-image: url('img/bg/bg22.jpg')">
      <div class="content-center">
        <div class="container">
          <h1 class="title">Blog</h1>
        </div>
      </div>
      <ScrollDown></ScrollDown>
    </div>

    <div class="fluid-container mt-5 px-5">
      <section>
        <div class="row">
          <div class="col-sm">
            <img src="img/bg/bg1.jpg">
          </div>
          <div class="col-sm">
            <!-- TODO: add search bar -->
            <h3>Search bar</h3>
            <!-- TODO: make the list smaller -->

            <div class="list-group list-group-flush">
              <div
                v-for="article in categories['life']"
                :key="article.title"
                href="#"
                class="list-group-item flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5>{{ article.title }}</h5>

                  <h5>
                    <small>{{ article.date }}</small>
                  </h5>
                </div>

                <p class="mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <badge v-for="tag in article.tags" :key="tag" type="success">{{ tag }}</badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <!-- TODO: change it to collection + layout 3 cols -->
        <h2>Collection ---------</h2>
        <div class="card-deck">
          <div class="card" v-for="category in categoryList" :key="category">
            <h2 slot="header" class="mb-1 ml-3">{{ category }}</h2>
            <div class="list-group list-group-flush">
              <div
                v-for="article in categories[category]"
                :key="article.title"
                href="#"
                class="list-group-item flex-column align-items-start"
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
                <badge v-for="tag in article.tags" :key="tag" type="success">{{ tag }}</badge>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Category ---------</h2>

        <div class="card-deck">
          <div
            class="card"
            header-tag="header"
            v-for="(category, index) in categoryList"
            :key="category"
          >
            <div slot="header" class="mb-1 ml-3">
              <h3>
                <i :class="'now-ui-icons ' + icons[index]"></i>
                {{ category }}
              </h3>
            </div>

            <div class="list-group list-group-flush">
              <div
                v-for="article in categories[category]"
                :key="article.title"
                href="#"
                class="list-group-item flex-column align-items-start"
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
                <badge v-for="tag in article.tags" :key="tag" type="success">{{ tag }}</badge>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Tags ---------</h2>

        <n-button
          round
          size="sm"
          v-for="tag in tags"
          :key="tag"
          type="primary"
          class="mx-1"
        >{{ tag }}</n-button>
      </section>
    </div>
  </div>
</template>

<script>
import { Button, Badge, ScrollDown } from '@/components';
import blogList from '../assets/json/blog.json';

export default {
  name: 'Blog',
  data: () => ({
    blog: blogList,
    categoryList: ['life', 'coding'],
    icons: ['transportation_air-baloon', 'education_atom'],
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
    getBookmarks() {
      this.$http
        .get('https://api.medium.com/v1/users/xindixu/bookmarks')
        .then(response => {
          console.log(response.json());
          return response.json();
        })
        .then(data => {
          const result = [];
          for (let key in data) {
            result.push(data[key]);
          }
          console.log(result);
        });
    }
  },
  computed: {},
  components: {
    Badge,
    ScrollDown,
    [Button.name]: Button
  },
  created() {
    this.generate();
    //lthis.getBookmarks();
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/now-ui-kit/variables.scss';

.page-header {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
img {
  width: 100%;
}
section h2 {
  margin-top: 40px;
}
.card header {
  background-color: white;

  h3 {
    position: absolute;
    top: -30px;
    left: -25px;
    text-transform: capitalize;
    z-index: 20;
    width: auto;

    border-color: $primary-color;
    background-color: white;
    border-radius: 80px;
    padding: 8px;
    color: $primary-color;
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);

    i {
      margin: 5px 2px;
    }
  }
}
</style>
