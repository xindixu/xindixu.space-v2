<template>
  <div>
    <Card>
      <div>
        <div class="inital">{{ inital }}</div>
        <div class="info">
          <h6>{{ name }}</h6>
          <p class="small">{{ email }}</p>
        </div>
      </div>
      <hr />
      <div class="card-body">
        <VueShowdown
          id="result"
          :markdown="message"
          :options="options"
        ></VueShowdown>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from '@/components';
import { VueShowdown } from 'vue-showdown';

export default {
  name: 'Message',
  data: () => ({
    options: {
      omitExtraWLInCodeBlocks: false,
      noHeaderId: false,
      prefixHeaderId: false,
      rawPrefixHeaderId: false,
      ghCompatibleHeaderId: false,
      rawHeaderId: false,
      headerLevelStart: 5,
      parseImgDimensions: false,
      simplifiedAutoLink: true,
      excludeTrailingPunctuationFromURLs: false,
      literalMidWordUnderscores: false,
      literalMidWordAsterisks: false,
      strikethrough: false,
      tables: false,
      tablesHeaderId: false,
      ghCodeBlocks: true,
      tasklists: true,
      smoothLivePreview: false,
      smartIndentationFix: false,
      disableForced4SpacesIndentedSublists: false,
      simpleLineBreaks: false,
      requireSpaceBeforeHeadingText: false,
      ghMentions: false,
      ghMentionsLink: 'https://github.com/{u}',
      encodeEmails: true,
      openLinksInNewWindow: true,
      backslashEscapesHTMLTags: false,
      emoji: true,
      underline: false,
      completeHTMLDocument: false,
      metadata: false,
      splitAdjacentBlockquotes: false
    },
    inital: null
  }),
  props: ['name', 'email', 'message'],
  methods: {
    getInital() {
      let nameArr = this.name.split(' ');
      let inital = nameArr[0].substring(0, 1) + nameArr[1].substring(0, 1);
      this.inital = inital;
    }
  },
  created() {
    this.getInital();
  },
  components: { Card, VueShowdown }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/now-ui-kit/variables.scss';
.card {
  .inital {
    border-radius: 50%;
    background-color: $warning-color;
    width: 50px;
    height: 50px;
    text-transform: uppercase;
    color: white;
    text-align: center;
    line-height: 50px;
    display: inline-block;
  }
  .info {
    height: 50px;
    margin-left: 25px;
    display: inline-block;
    position: absolute;
    top: 18%;
    transform: translateY(-18%);

    h6 {
      margin-bottom: 0;
    }
  }
}
</style>
