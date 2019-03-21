<template>
  <div id="commentSection">
    <h2>Share your thoughts...</h2>
    <form @submit.prevent="checkForm">
      <div class="row">
        <div class="col-sm-6 col-lg-6">
          <fg-input
            v-model="name"
            addon-left-icon="now-ui-icons users_single-02"
            placeholder="Casper Meowspy"
          >
          </fg-input>
        </div>
        <div class="col-sm-6 col-lg-6">
          <fg-input
            v-model="email"
            addon-left-icon="now-ui-icons ui-1_email-85"
            placeholder="casper.meow@gmail.com"
          >
          </fg-input>
        </div>
      </div>

      <b-row id="editor">
        <textarea v-model="md" :rows="md.split('\n').length + 4"> </textarea>
        <vue-showdown
          id="result"
          :markdown="md"
          :options="options"
          v-model="md"
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
    name: null,
    email: null,
    md: `# Yay! You've found this great way of sharing thoughts! :tada:

I really like your website! :smile::cat::heart_eyes:

<hr/>
THINK ... before you submit
- [x] Is it true?
- [x] Is it helpful?
- [x] Is it insightful?
- [x] Is it nice?
- [x] Is it kind?
`,
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
      const newMessage = {
        name: this.name,
        email: this.email,
        message: this.md
      };
      const json = JSON.stringify(newMessage);
      console.log(json);
      const filename = `../../assets/json/${this.work}.json`;

      let blob = new Blob([json], { type: 'text/plain;charset=utf-8;' });
      if (navigator.msSaveBlob) {
        // IE 10+
        navigator.msSaveBlob(blob, filename);
      } else {
        let link = document.createElement('a');
        if (link.download !== undefined) {
          // feature detection
          // Browsers that support HTML5 download attribute
          let url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', filename);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
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
