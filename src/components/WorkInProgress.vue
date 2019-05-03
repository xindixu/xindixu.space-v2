<template>
  <div id="workInProgress">
    <div class="row">
      <div class="col">
        <div>
          <img src="/img/share/wip.jpg" alt>
        </div>
      </div>
      <div class="col">
        <h3>Sorry, work in progress...Please check back later</h3>

        <p>You could bookmark this page and I will keep you updated.</p>
        <n-button type="primary" round @click="addToFavorate">Add to Favorite</n-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Button } from '@/components';

export default {
  name: 'WorkInProgress',
  data: () => ({}),
  components: {
    [Button.name]: Button
  },
  methods: {
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
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
