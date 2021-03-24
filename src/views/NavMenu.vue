<template>
  <div class="container">
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-demo font"
      mode="horizontal"
      active-text-color="#409EFF"
      router
      @select="handleSelect"
    >
      <el-menu-item
        v-for="(item, i) in navList"
        :key="i"
        :index="item.navRouter"
        >{{ item.navName }}</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { navRouter: "/", navName: "首页" },
        { navRouter: "/explore", navName: "发现" },
        { navRouter: "/my", navName: "我的" }
      ],
      path: "/"
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.8);

  .el-menu,
  .el-menu-item {
    border-bottom: none;
    background-color: transparent;
  }

  .el-menu-item {
    font-size: 18px;
    font-weight: bold;
    &.is-active,
    &:hover {
      background-color: transparent !important;
    }
  }
}
</style>
