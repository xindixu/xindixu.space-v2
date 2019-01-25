<template>
<div>
<app-navbar></app-navbar>
  <el-container>
    <el-aside width="200px" class="hidden-md-and-down">
      <app-sidebar></app-sidebar>
    </el-aside>
    <el-main>
      <Content />
    </el-main>
  </el-container>
  <app-footer></app-footer>
</div>
</template>

<script>
import AppNavbar from '../../components/AppNavbar.vue';
import AppFooter from '../../components/AppFooter.vue';
import AppSidebar from '../../components/AppSidebar.vue';

export default {
  components: {
    AppNavbar,
    AppFooter,
    AppSidebar
  }
};
</script>

<style lang="scss">
</style>
