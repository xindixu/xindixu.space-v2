<template>
  <div>
    <a>{{ text }}</a>
  </div>
</template>
<script>
export default {
  name: 'SquareLink',
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    }
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
a {
  margin: 8px 10px 0px 0px;
  outline: none;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
  }

  &::before,
  &::after {
    opacity: 0;
    transition: transform 0.3s, opacity 0.2s;
  }

  &::before {
    margin-right: 10px;
    content: '[';
    transform: translateX(20px);
  }

  &::after {
    margin-left: 10px;
    content: ']';
    transform: translateX(-20px);
  }

  &:hover::before,
  &:hover::after,
  &:focus::before,
  &:focus::after {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
