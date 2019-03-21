<template>
  <div id="commentSection">
    <h3>Share your thoughts...</h3>
    <form @submit.prevent="checkForm">
      <div class="row">
        <div class="col-sm-6 col-lg-6">
          <fg-input
            v-model="comment.name"
            addon-left-icon="now-ui-icons users_single-02"
            placeholder="Casper Meowspy"
          >
          </fg-input>
        </div>
        <div class="col-sm-6 col-lg-6">
          <fg-input
            v-model="comment.email"
            addon-left-icon="now-ui-icons ui-1_email-85"
            placeholder="casper.meow@gmail.com"
          >
          </fg-input>
        </div>
      </div>

      <b-row id="editor">
        <textarea
          v-model="comment.message"
          :rows="comment.message.split('\n').length + 4"
        >
        </textarea>
        <vue-showdown
          id="result"
          :markdown="comment.message"
          :options="options"
          v-model="comment.message"
        ></vue-showdown>
      </b-row>
      <div class="text-right">
        <input
          class="btn btn-primary btn-sm"
          type="submit"
          name=""
          value="Submit"
        />
        <input
          class="btn btn-danger btn-sm"
          type="reset"
          name=""
          value="Clear All"
        />
      </div>
    </form>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'Editor',
  data: () => ({
    comment: {
      name: null,
      email: null,
      message: `# Yay! You've found this great way of sharing thoughts! :tada:

I really like your website! :smile::cat::heart_eyes:

<hr/>
THINK ... before you submit
- [x] Is it true?
- [x] Is it helpful?
- [x] Is it insightful?
- [x] Is it nice?
- [x] Is it kind?
`
    },
    options: {
      omitExtraWLInCodeBlocks: false,
      noHeaderId: false,
      prefixHeaderId: false,
      rawPrefixHeaderId: false,
      ghCompatibleHeaderId: false,
      rawHeaderId: false,
      headerLevelStart: 4,
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
    }
  }),
  props: ['work'],
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  methods: {
    checkForm() {
      this.submit();
      console.log('check');
    },
    submit() {
      //https://medium.com/codingthesmartway-com-blog/vue-js-2-firebase-e4b2479e35a8
      //use firebase storage instead

      this.$http
        .post(
          `https://xindixuspace-v2.firebaseio.com/comment/${this.work}.json`,
          this.comment
        )
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/scss/now-ui-kit/variables.scss';
#commentSection {
  #editor {
    margin: 0;
    height: 100%;
    border: 1px solid $primary-color;
    border-radius: 10px;

    textarea,
    #result {
      display: inline-block;
      width: 49%;
      height: 100%;
      vertical-align: top;
      box-sizing: border-box;
      padding: 0 20px;
    }

    textarea {
      border: none;
      border-right: 1px solid #ccc;
      resize: none;
      outline: none;
      background-color: #f6f6f6;
      font-size: 14px;
      font-family: 'Monaco', courier, monospace;
      padding: 20px;
    }

    code {
      color: #f66;
    }
  }
  .btn-sm {
    margin-left: 10px;
    width: 100px;
  }
}
</style>
