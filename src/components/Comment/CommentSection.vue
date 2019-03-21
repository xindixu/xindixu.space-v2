<template>
  <div>
    <h2>Comments</h2>
    <div v-for="m in messages" :key="m.name">
      <Message :name="m.name" :email="m.email" :message="m.message" />
    </div>
    <Editor :work="work" />
  </div>
</template>

<script>
import { Editor, Message } from '@/components';
export default {
  name: 'CommentSection',
  data: () => ({
    messages: []
  }),
  props: ['work'],
  components: {
    Editor,
    Message
  },
  methods: {
    getMessages() {
      this.$http
        .get(`https://xindixuspace-v2.firebaseio.com/comment/${this.work}.json`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const result = [];
          for (let key in data) {
            result.push(data[key]);
          }
          this.messages = result;
        });
    }
  },
  created() {
    this.getMessages();
  }
};
</script>

<style lang="css" scoped></style>
