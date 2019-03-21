<template>
  <div><Editor :work="work" /></div>
</template>

<script>
import { Editor } from '@/components';
export default {
  name: 'CommentSection',
  data: () => ({}),
  props: ['work'],
  components: {
    Editor
  },
  methods: {
    createJSON() {}
  }
};
</script>

<style lang="css" scoped></style>
