<template>
  <div>
    <div class="page-header" style="background-image: url('img/bg/bg22.jpg')">
      <div class="content-center">
        <div class="container"><h1 class="title">Blog</h1></div>
      </div>
      <ScrollDown></ScrollDown>
    </div>
    <b-container> <WorkInProgress></WorkInProgress> </b-container>
  </div>
</template>

<script>
import { WorkInProgress, ScrollDown } from '@/components';
export default {
  name: '',
  data: () => ({}),
  components: {
    WorkInProgress,
    ScrollDown
  }
};
</script>
<style lang="scss" scoped>
.page-header {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
