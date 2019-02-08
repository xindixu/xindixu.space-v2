<template>
  <div id="socialSideBar">
    <transition-group
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <div v-show="isShow" v-for="icon in icons" :key="icon">
        <a href="#" class="btn btn-info btn-icon btn-round" @onclick="process">
          <i class="now-ui-icons" :class="icon"></i>
        </a>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: 'SocialSideBar',
  data: () => ({
    icons: ['ui-2_like', 'location_bookmark', 'ui-1_email-85'],
    isShow: false
  }),
  methods: {
    process() {}
  },
  created() {
    //do something after creating vue instance
    this.$eventBus.$on('workContentVisible', isVisible => {
      this.isShow = isVisible;
    });
  }
};
</script>
<style lang="scss" scoped>
#socialSideBar {
  z-index: 50;

  .btn {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  }
}
</style>
