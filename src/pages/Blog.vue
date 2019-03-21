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
    <b-container> <WorkInProgress></WorkInProgress> </b-container>
  </div>
</template>

<script>
import { parallax, WorkInProgress, ScrollDown } from '@/components';
export default {
  name: '',
  data: () => ({}),
  components: {
    parallax,
    WorkInProgress,
    ScrollDown
  }
};
</script>
<style lang="scss" scoped></style>
