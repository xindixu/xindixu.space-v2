<template>
  <div id="socialSideBar">
    <transition-group enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <div v-show="isShow" v-for="(icon, index) in icons" :key="icon">
        <n-button type="info" round icon @click="process(index);">
          <i class="now-ui-icons" :class="icon"></i>
        </n-button>
      </div>
    </transition-group>

    <Modal
      :show.sync="modalOn"
      class="modal-primary"
      :show-close="false"
      headerClasses="justify-content-center"
      type="mini"
    >
      <div slot="header" class="modal-profile">
        <img src="/img/share/avatar.jpg" class="rounded-circle img-raised">
      </div>
      <div class="text-center">
        <h5>Want to share my article to your social network?</h5>
        <a
          v-for="(so, index) in socialIcons"
          :key="index"
          :href="so.link"
          target="_blank"
          class="btn btn-success btn-icon btn-round socialLinks"
        >
          <component class="icon" :is="so.name"></component>
        </a>
      </div>

      <template slot="footer">
        <div class="text-center"></div>
      </template>
    </Modal>
  </div>
</template>
<script>
import { Modal, Button } from '@/components';
import { Facebook, Linkedin, Twitter } from '../assets/svg';

export default {
  name: 'SocialSideBar',
  data: () => ({
    icons: [
      'ui-2_like',
      'location_bookmark',
      'arrows-1_share-66',
      'ui-2_chat-round'
    ],
    socialIcons: [
      {
        name: Facebook,
        link: ''
      },
      {
        name: Linkedin,
        link: ''
      },
      {
        name: Twitter,
        link: ''
      }
    ],
    isShow: false,
    modalOn: false
  }),
  props: ['path'],
  methods: {
    process(index) {
      switch (index) {
        case 0:
          break;
        case 1:
          this.addToFavorate(this.fullPath, 'xindixu.space');
          break;
        case 2:
          this.modalOn = true;
          break;
        case 3:
          document.querySelector('#commentSection').scrollIntoView({
            behavior: 'smooth'
          });
          break;
      }
    },
    generateLink() {
      // http://www.sharelinkgenerator.com/
      this.fullPath = `http://xindi-xu.space/work/${this.path}`;
      const facebookPath = `https://www.facebook.com/sharer/sharer.php?u=${
        this.fullPath
      }`;
      const twitterPath = `https://twitter.com/home?status=Just%20saw%20a%20cool%20project%20created%20by%20Xindi!%0A${
        this.fullPath
      }`;
      const linkedinPath = `https://www.linkedin.com/shareArticle?mini=true&url=${
        this.fullPath
      }&title=Here%20is%20a%20cool%20project%20created%20by%20Xindi&summary=&source=`;

      this.socialIcons[0].link = facebookPath;
      this.socialIcons[1].link = linkedinPath;
      this.socialIcons[2].link = twitterPath;
    },
    addToFavorate(url, title) {
      if (!url) {
        url = window.location;
      }
      if (!title) {
        title = document.title;
      }
      let browser = navigator.userAgent.toLowerCase();
      if (window.sidebar) {
        // Mozilla, Firefox, Netscape
        window.sidebar.addPanel(title, url, '');
      } else if (window.external) {
        // IE or chrome
        if (browser.indexOf('chrome') == -1) {
          // ie
          window.external.AddFavorite(url, title);
        } else {
          // chrome
          alert(
            'Please use CTRL+D (or Command+D for Macs) to bookmark this page'
          );
        }
      } else if (window.opera && window.print) {
        // Opera - automatically adds to sidebar if rel=sidebar in the tag
        return true;
      } else if (browser.indexOf('konqueror') != -1) {
        // Konqueror
        alert('Please press CTRL+B to bookmark this page.');
      } else if (browser.indexOf('webkit') != -1) {
        // safari
        alert(
          'Please press CTRL+B (or Command+D for macs) to bookmark this page.'
        );
      } else {
        alert(
          'Your browser cannot add bookmarks using this link. Please add this link manually.'
        );
      }
    }
  },
  created() {
    //do something after creating vue instance
    this.$eventBus.$on('workContentVisible', isVisible => {
      this.isShow = isVisible;
    });
  },
  mounted() {
    //do something after mounting vue instance
    this.generateLink();
  },
  components: {
    Modal,
    [Button.name]: Button,
    Facebook,
    Linkedin,
    Twitter
  }
};
</script>
<style lang="scss" scoped>
html {
  scroll-behavior: smooth;
}
#socialSideBar {
  z-index: 50;

  .btn {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  }

  .modal.modal-mini {
    .modal-profile {
      line-height: 0;
    }

    .modal-body {
      a {
        margin: 5px;
      }
      .icon {
        width: 18px;
        position: absolute;
        top: 25%;
        left: 25%;
        background: transparent;
        &:before {
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
