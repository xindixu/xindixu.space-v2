<template>
  <footer class="footer">
    <QuickMenu
      :menu-count="count"
      :icon-class="icons"
      :menu-url-list="list"
      :position="position"
      :backgroundColor="backgroundColor"
    ></QuickMenu>
  </footer>
</template>
<script>
import { QuickMenu } from '@/components';
import { Github, Linkedin, Email, Youtube } from '../assets/svg';

export default {
  props: {
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      count: 4,
      icons: [Github, Linkedin, Email, Youtube],
      list: [
        {
          isLink: false,
          url: 'https://github.com/xindixu',
        },
        {
          isLink: false,
          url: 'https://www.linkedin.com/in/xindi-xu/',
        },
        {
          isLink: false,
          url: 'mailto:xindixu@utexas.edu',
        },
        {
          isLink: false,
          url: 'https://www.youtube.com/channel/UCWnA13M9WCIXbl9yl4qs6_Q',
        },
      ],
      position: 'bottom-left',
      backgroundColor: '#E2B4BD',
    };
  },
  components: {
    QuickMenu,
    Github,
    Linkedin,
    Email,
    Youtube,
  },
};
</script>
<style>
footer {
  z-index: 100;
}
</style>
