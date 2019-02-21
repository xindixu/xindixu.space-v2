<template>
  <div>
    <div class="page-header">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg/bg22.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container"><h1 class="title">Blog</h1></div>
      </div>
      <ScrollDown></ScrollDown>
    </div>
    <WorkInProgress></WorkInProgress>
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
<style lang="scss" scoped></style>
