<template lang="html">
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Home</el-menu-item>
      <el-submenu index="2">
        <template slot="title"
          >Highlighted</template
        >
        <el-menu-item index="2-1">Coding Crush</el-menu-item>
        <el-menu-item index="2-2">Media Mind</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">Coding Crush</el-menu-item>
      <el-menu-item index="4">Media Mind</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'app-navbar',
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped></style>
