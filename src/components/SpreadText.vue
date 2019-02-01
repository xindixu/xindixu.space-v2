<template>
  <div>
    <transition name="spread" appear type="animation">
      <h1 class="display">{{ text }}</h1>
    </transition>
  </div>
</template>
<script>
export default {
  name: "SpreadText",
  props: ['text'],
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
.spread-enter{
  opacity: 0;
}
.spread-enter-active{
  animation: spread-in 3s ease-out forwards;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

@keyframes spread-in{
  0%{
    letter-spacing: -10px;
    opacity: 0;
  }
  30%{
    letter-spacing: 2px;
    opacity: 1;
  }
  100%{
    letter-spacing: normal;
    opacity: 1;
  }
}

</style>
