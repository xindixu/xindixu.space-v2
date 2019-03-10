<template>
  <div id="app">
    <router-view name="header" />
    <div><router-view v-transition /></div>
    <router-view name="scroll" />
    <router-view name="footer" />
  </div>
</template>
<script>
export default {};
</script>
