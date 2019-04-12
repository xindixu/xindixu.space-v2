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

    <div class="container mt-5">
      <!-- real content -->
      <div ref="htmlContent" id="htmlContent" v-html="html"></div>
      <WorkInProgress v-if="!html"></WorkInProgress>
      <div class="spacer"></div>

      <router-link :to="{ name: 'work' }">
        <n-button type="primary">
          <i class="now-ui-icons arrows-1_minimal-left"></i> &nbsp; Go Back
        </n-button>
      </router-link>
      <CommentSection class="my-5" :work="id"></CommentSection>
    </div>

    <TableOfContent></TableOfContent>
    <SocialSideBar :path="id"></SocialSideBar>
  </div>
</template>
<script>
import {
  Badge,
  TableOfContent,
  SocialSideBar,
  CommentSection,
  WorkInProgress,
  Button
} from '@/components';
import workList from '../assets/json/work.json';

export default {
  name: 'WorkDetail',
  data: () => ({
    works: workList,
    work: '',
    html: '',
    title: '',
    tags: [],
    md: '',
    filter: '',
    path: '',
    is_script_loading: false
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
    },
    getHtml() {
      this.html = require(`../assets/html/${this.work[0].id}.html`);
    },
    addIssuuScript() {
      let self = this;
      return new Promise((resolve, reject) => {
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
          /* emit to global event bus to inform other components
           * we are already loading the script */
          this.$eventBus.$emit('script_loaded');
          resolve();
        };

        document.head.appendChild(script);
      });
    }
  },
  components: {
    Badge,
    TableOfContent,
    SocialSideBar,
    CommentSection,
    WorkInProgress,
    [Button.name]: Button
  },
  created() {
    this.$eventBus.$on('loading_script', e => {
      this.is_script_loading = true;
    });

    this.getWorkObj();
    //this.getMd();
    this.getHtml();
    this.getFilter();
  }
};
</script>

<style lang="scss">
.badge {
  margin-left: 5px;
  margin-right: 5px;
}

#tableOfContent {
  position: fixed;
  top: 60px;
  right: 10px;
}

#socialSideBar {
  position: fixed;
  top: 20vh;
  left: 10vw;
}
#htmlContent {
  p,
  strong,
  a,
  li,
  code {
    &::selection {
      background: lighten(#e2b4bd, 6%);
    }
  }

  p {
    text-align: justify;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 60px;
  }
}

.spacer {
  margin-top: 200px;
}
/* iframe*/
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
  border: none;
}
.gameWrapper {
  position: relative;
  padding-bottom: 70.31%; /* 1024:720 */
  padding-top: 25px;
  height: 0;
}
.gameWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
div[id^='issuu-embed-container-'] {
  position: relative;
  max-width: 100%;
  margin: 12px 0px;
}
#issuu-embed-container-texas-central,
#issuu-embed-container-clif,
#issuu-embed-container-brand-safty,
#issuu-embed-container-triobike,
#issuu-embed-container-tesla {
  padding-bottom: 77.27%;
}
#issuu-embed-container-groovy,
#issuu-embed-container-groovy2 {
  padding-bottom: 56.25%; /* set the aspect ratio here as (height / width) * 100% */
}
.issuuembed {
  position: absolute;
  border: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
/*end of iframe*/
</style>
