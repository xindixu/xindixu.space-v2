<template>
  <div>
    <div class="page-header" style="background-image:url('img/bg/bg7.jpg')">
      <div class="content-center">
        <div class="container">
          <h1 class="title">Work</h1>
        </div>
      </div>
      <ScrollDown/>
    </div>
    <Card>
      <Tabs
        ref="tabs"
        slot="raw-content"
        type="primary"
        square
        centered
        tab-content-classes="tab-subcategories text-center"
        @input="updateHash();"
      >
        <TabPane
          v-for="category in categories"
          :key="category.index"
          class="text-center"
          :label="category"
        >
          <template slot="label">{{ category }}</template>
          <div class="row">
            <div v-for="data in sortedWorkList[category]" :key="data.index">
              <router-link :to="'/work/' + data.id">
                <Card class="work-card grow">
                  <template slot="image">
                    <img :src="'img/work/' + data.id + '.png'" :alt="data.id">
                    <!--
                      <BlurLazyImage
                        class="work-card-img"
                        :src="'img/work/' + data.id + '.png'"
                        :src-placeholder="
                          'img/work/placeholder' + data.id + '.png'
                        "
                      ></BlurLazyImage>
                    -->
                  </template>

                  <template slot="raw-content">
                    <h4 class="my-4">{{ data.title }}</h4>
                  </template>
                </Card>
              </router-link>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </Card>
  </div>
</template>
<script>
import { Card, Tabs, TabPane, ScrollDown } from '@/components';
import workList from '../assets/json/work.json';

export default {
  name: 'Work',
  data: () => {
    return {
      sortedWorkList: [],
      categories: ['development', 'marketing', 'creative', 'craft'],
      tags: [],
      tab: ''
    };
  },
  components: {
    Card,
    Tabs,
    TabPane,
    ScrollDown
  },
  methods: {
    updateHash() {
      this.$router.replace(`work#${this.$refs.tabs.activatedTab}`);
    }
  },
  created() {
    for (let category of this.categories) {
      const arr = workList.filter(obj => {
        return obj.category === category;
      });
      this.sortedWorkList[category] = arr;
    }
  },
  mounted() {
    if (this.$route.hash) {
      const str = this.$route.hash;
      const label = str.substring(1, str.length);
      this.$refs.tabs.findAndActivateTab(label);
    }
  },
  beforeDestroy() {
    this.$eventBus.$off('loading_script');
  },
  head: {
    title: {
      inner: 'Work'
    },
    script: [
      {
        type: 'text/javascript',
        src: 'https://e.issuu.com/embed.js',
        async: true,
        body: true
      }
    ]
  }
};
</script>
<style scoped lang="scss">
.page-header {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
img {
  width: 100%;
  height: auto;
}
.card {
  width: 98%;
  margin: 1%;

  .row {
    margin-left: auto;
    margin-right: auto;
    padding: 1%;
    max-width: 95vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: minmax(280px, auto);
    grid-gap: 1rem 2rem;
  }

  .work-card {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
  }
}
a:hover,
.card-title:hover {
  text-decoration: none;
  cursor: pointer;
}
.grow {
  transition: all 0.2s ease-in-out;
}
.grow:hover {
  transform: scale(1.05);
}
</style>
