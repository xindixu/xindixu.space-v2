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

    <b-container class="mt-5">
      <!-- md to html tool -->
      <vue-showdown
        id="mdContent"
        :markdown="md"
        :options="options"
      ></vue-showdown>

      <!-- real content -->
      <div id="htmlContent" v-html="html"></div>
    </b-container>

    <TableOfContent></TableOfContent>
    <SocialSideBar :path="id"></SocialSideBar>
  </div>
</template>
<script>
import { Badge, TableOfContent, SocialSideBar } from '@/components';
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
    filter: '',
    path: '',
    options: {
      omitExtraWLInCodeBlocks: false,
      noHeaderId: false,
      prefixHeaderId: false,
      rawPrefixHeaderId: false,
      ghCompatibleHeaderId: false,
      rawHeaderId: false,
      headerLevelStart: false,
      parseImgDimensions: false,
      simplifiedAutoLink: false,
      excludeTrailingPunctuationFromURLs: false,
      literalMidWordUnderscores: false,
      literalMidWordAsterisks: false,
      strikethrough: false,
      tables: false,
      tablesHeaderId: false,
      ghCodeBlocks: true,
      tasklists: false,
      smoothLivePreview: false,
      smartIndentationFix: false,
      disableForced4SpacesIndentedSublists: false,
      simpleLineBreaks: false,
      requireSpaceBeforeHeadingText: false,
      ghMentions: false,
      ghMentionsLink: 'https://github.com/{u}',
      encodeEmails: true,
      openLinksInNewWindow: false,
      backslashEscapesHTMLTags: false,
      emoji: false,
      underline: false,
      completeHTMLDocument: false,
      metadata: false,
      splitAdjacentBlockquotes: false
    }
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
    }
  },
  components: {
    Badge,
    TableOfContent,
    SocialSideBar
  },
  mounted() {
    //do something after mounting vue instance
    this.getWorkObj();
    //this.getMd();
    this.getHtml();
    this.getFilter();
  }
};
</script>

<style lang="scss" scoped>
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
</style>
