<template>
  <div>
    <div class="page-header">
      <Parallax
        class="page-header-image"
        style="background-image:url('img/bg/bg7.jpg')"
      ></Parallax>
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
        >
          <template slot="label">
            {{ category }}
          </template>
          <b-row>
            <div
              v-if="category === data.category"
              v-for="data in works"
              :key="data.index"
            >
              <b-card-group deck class="text-center">
                <router-link :to="'/work/' + data.id">
                  <b-card
                    :title="data.title"
                    class="work-card grow"
                    :img-src="'img/work/' + data.id + '.png'"
                  >
                  </b-card>
                </router-link>
              </b-card-group>
              <br />
            </div>
          </b-row>
        </tab-pane>
      </tabs>
    </card>
  </div>
</template>
<script>
import { Parallax, Card, Tabs, TabPane, ScrollDown } from '@/components';
import workList from '../assets/work/data.json';
export default {
  data: function() {
    return {
      works: workList,
      sortedWorkList: [],
      categories: ['Development', 'Advertising', 'Marketing', 'Craft'],
      tags: []
    };
  },
  components: {
    Parallax,
    Card,
    Tabs,
    TabPane,
    ScrollDown
  }
};
</script>
<style scoped lang="scss">
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
