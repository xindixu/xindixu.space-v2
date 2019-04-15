<template>
  <div id="app" v-cloak>
    <router-view name="header" />
    <div><router-view v-transition /></div>
    <router-view name="scroll" />
    <router-view name="footer" />
  </div>
</template>
<script>
export default {};
</script>
<style media="screen">
v-cloak {
  display: none;
}
</style>
