<template>
  <div id="socialSideBar">
    <transition-group
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <div v-show="isShow" v-for="(icon, index) in icons" :key="index">
        <n-button type="info" round icon @click="process(index);">
          <i class="now-ui-icons" :class="icon"></i>
        </n-button>
      </div>
    </transition-group>
    <!--
      <button class="btn btn-info btn-icon btn-round" @click="modalOn = true;">
        <i class="now-ui-icons arrows-1_share-66"></i>
      </button>
    -->
    <modal
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
        <h5>Want to share my article to your social network?</h5>
        <a
          v-for="(so, index) in socialIcons"
          :key="index"
          :href="so.link"
          target="_blank"
          class="btn btn-success btn-icon btn-round socialLinks"
        >
          <i class="fab" :class="so.name"></i>
        </a>
      </div>

      <template slot="footer">
        <div class="text-center"></div>
      </template>
    </modal>
  </div>
</template>
<script>
import { Modal, Button } from '@/components';
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
        name: 'fa-facebook-f',
        link: ''
      },
      {
        name: 'fa-linkedin-in',
        link: ''
      },
      {
        name: 'fa-twitter',
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
          break;
        case 2:
          this.modalOn = true;
          break;
        case 3:
          break;
      }
    },
    generateLink() {
      // http://www.sharelinkgenerator.com/
      const fullPath = `http://xindixu.space/work/${this.path}`;
      const facebookPath = `https://www.facebook.com/sharer/sharer.php?u=${fullPath}`;
      const twitterPath = `https://twitter.com/home?status=Just%20saw%20a%20cool%20project%20created%20by%20Xindi!%0A${fullPath}`;
      const linkedinPath = `https://www.linkedin.com/shareArticle?mini=true&url=${fullPath}&title=Here%20is%20a%20cool%20project%20created%20by%20Xindi&summary=&source=`;

      this.socialIcons[0].link = facebookPath;
      this.socialIcons[1].link = linkedinPath;
      this.socialIcons[2].link = twitterPath;
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
    [Button.name]: Button
  }
};
</script>
<style lang="scss" scoped>
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
    }
  }
}
</style>
