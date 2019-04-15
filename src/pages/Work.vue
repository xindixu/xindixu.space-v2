<template>
  <div>
    <div class="page-header" style="background-image:url('img/bg/bg7.jpg')">
      <div class="content-center">
        <div class="container"><h1 class="title">Work</h1></div>
      </div>
      <ScrollDown />
    </div>
    <Card>
      <Tabs
        ref="tabs"
        slot="raw-content"
        type="primary"
        square
        centered
        tab-content-classes="tab-subcategories text-center"
      >
        <TabPane
          v-for="category in categories"
          :key="category.index"
          class="text-center"
          :label="category"
        >
          <template slot="label">
            {{ category }}
          </template>
          <div class="row">
            <div v-for="data in sortedWorkList[category]" :key="data.index">
              <div class="card-deck text-center">
                <router-link :to="'/work/' + data.id">
                  <Card class="work-card grow">
                    <template slot="image">
                      <!--
                        <img :src="'img/work/' + data.id + '.png'" alt="" />
                      -->

                      <BlurLazyImage
                        class="work-card-img"
                        :src="'img/work/' + data.id + '.png'"
                        :src-placeholder="
                          'img/work/placeholder' + data.id + '.png'
                        "
                      ></BlurLazyImage>
                    </template>

                    <template slot="raw-content">
                      <h4 class="my-4">{{ data.title }}</h4>
                    </template>
                  </Card>
                </router-link>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </Card>
  </div>
</template>
<script>
import { Card, Tabs, TabPane, ScrollDown, BlurLazyImage } from '@/components';
import workList from '../assets/json/work.json';

export default {
  name: 'Work',
  data: () => {
    return {
      sortedWorkList: [],
      categories: ['development', 'marketing', 'creative', 'craft'],
      tags: [],
      tab: '',
      is_script_loading: false
    };
  },
  components: {
    Card,
    Tabs,
    TabPane,
    ScrollDown,
    BlurLazyImage
  },
  methods: {
    addIssuuScript() {
      let self = this;
      return new Promise(resolve => {
        // if script is already loading via another component
        if (self.is_script_loading) {
          // Resolve when the other component has loaded the script
          this.$root.$on('script_loaded', resolve);
          return;
        }

        let script = document.createElement('script');
        script.setAttribute('src', 'https://e.issuu.com/embed.js');
        script.async = true;
        this.$eventBus.$emit('loading_script');
        script.onload = () => {
          this.$eventBus.$emit('script_loaded');
          resolve();
        };

        document.head.appendChild(script);
      });
    }
  },
  created() {
    for (let category of this.categories) {
      const arr = workList.filter(obj => {
        return obj.category === category;
      });
      this.sortedWorkList[category] = arr;
    }
    this.$eventBus.$on('loading_script', e => {
      this.is_script_loading = true;
    });
    console.log(this.sortedWorkList);
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
