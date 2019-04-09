<template>
  <div>
    <div class="page-header" style="background-image:url('img/bg/bg7.jpg')">
      <div class="content-center">
        <div class="container"><h1 class="title">Work</h1></div>
      </div>
      <ScrollDown />
    </div>
    <card>
      <tabs
        slot="raw-content"
        type="primary"
        square
        centered
        tab-content-classes="tab-subcategories text-center"
      >
        <tab-pane
          v-for="category in categories"
          :key="category.index"
          class="text-center"
          :activeTab="tab"
        >
          <template slot="label">
            {{ category }}
          </template>
          <div class="row">
            <div
              v-if="category === data.category"
              v-for="data in works"
              :key="data.index"
            >
              <div class="card-deck text-center">
                <router-link :to="'/work/' + data.id">
                  <Card class="work-card grow">
                    <template slot="image">
                      <img :src="'img/work/' + data.id + '.png'" />
                    </template>

                    <template slot="raw-content">
                      <h5 class="my-3">{{ data.title }}</h5>
                    </template>
                  </Card>
                </router-link>
              </div>
            </div>
          </div>
        </tab-pane>
      </tabs>
    </card>
  </div>
</template>
<script>
import { Card, Tabs, TabPane, ScrollDown } from '@/components';
import workList from '../assets/json/work.json';
export default {
  data: function() {
    return {
      works: workList,
      sortedWorkList: [],
      categories: ['development', 'advertising', 'marketing', 'craft'],
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
  created() {
    if (this.$route.hash) {
      const str = this.$route.hash;
      this.tab = str.substring(1, str.length);
      console.log(this.tab);
    }
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
    margin: 0%;
    padding: 1%;
    max-width: 95vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: minmax(280px, auto);
    grid-gap: 1rem 3rem;
  }

  .work-card {
    display: flex;
    flex-direction: column;
    position: relative;
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
