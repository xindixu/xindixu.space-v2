<template>
  <div>
    <router-link :to="link" tag="a">
      <slot/>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'SquareLink',
  props: {
    link: {
      type: String,
      default: ''
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
  color: black;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    text-decoration: none;
    color: black;
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
