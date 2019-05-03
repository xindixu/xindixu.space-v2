<template>
  <div id="commentSection">
    <h3>Share your thoughts...</h3>
    <form @submit.prevent="checkForm">
      <div class="row">
        <div class="col-sm-6 col-lg-6">
          <fg-input
            v-model="comment.name"
            type="text"
            addon-left-icon="now-ui-icons users_single-02"
            placeholder="Casper Meowspy"
          >
          </fg-input>
          <Alert type="info" :visible="nameError">Name is required.</Alert>
        </div>
        <div class="col-sm-6 col-lg-6">
          <fg-input
            v-model="comment.email"
            type="email"
            addon-left-icon="now-ui-icons ui-1_email-85"
            placeholder="casper.meow@gmail.com"
          >
          </fg-input>
          <Alert type="info" :visible="emailError"
            >Valid email is required.</Alert
          >
        </div>
      </div>

      <div class="row" id="editor">
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
      </div>
      <Alert type="info" :visible="messageError">Please enter your own message.</Alert>

      <div class="text-right">
        <input
          class="btn btn-primary btn-sm"
          @click="checkForm();"
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
    <Modal
      :show.sync="modalOn"
      class="modal-primary"
      :show-close="false"
      headerClasses="justify-content-center"
      type="mini"
    >
      <div slot="header" class="modal-profile">
        <img src="/img/share/avatar.jpg" class="rounded-circle img-raised" />
      </div>
      <div class="text-center">
        <h5>Yay! You just posted your comment! Refresh to check it out!</h5>
        {{ response }}
      </div>

      <template slot="footer">
        <div class="text-center"></div>
      </template>
    </Modal>
  </div>
</template>
<script>
import { Button, FormGroupInput, Modal, Alert } from '@/components';
import { VueShowdown } from 'vue-showdown';

export default {
  name: 'Editor',
  data: () => ({
    comment: {
      name: null,
      email: null,
      message: `# Yay! You've found this great way of sharing thoughts! :tada:

I really like your website and Casper! :heart_eyes_cat:`
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
    },
    modalOn: false,
    nameError: false,
    emailError: false,
    messageError: false,
    response: ''
  }),
  props: ['work'],
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Modal,
    VueShowdown,
    Alert
  },
  methods: {
    checkForm() {
      if (this.comment.email && this.comment.name) {
        this.submit();
      }

      if (!this.comment.name) {
        this.nameError = true;
      } else {
        this.nameError = false;
      }

      if (!this.comment.email) {
        this.emailError = true;
      } else if (!this.validEmail(this.comment.email)) {
        this.emailError = true;
      } else {
        this.emailError = false;
      }

      if (
        this.comment.message ===
        `# Yay! You've found this great way of sharing thoughts! :tada:

I really like your website and Casper! :heart_eyes_cat:`
      ) {
        this.messageError = true;
      } else {
        this.messageError = false;
      }
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    submit() {
      this.$http
        .post(
          `https://xindixuspace-v2.firebaseio.com/comment/${this.work}.json`,
          this.comment
        )
        .then(
          response => {
            this.modalOn = true;
            this.response = response;
          },
          error => {
            this.modalOn = true;
            this.response = error;
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
    margin: 0 0 10px 0;
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
      border-radius: 10px 0 0 10px;
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
