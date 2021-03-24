<template>
  <div id="app">
    <nav-menu></nav-menu>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Home from "@/views/Home";
import NavMenu from "@/views/NavMenu";
import Explore from "@/views/Explore";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Home,
    NavMenu,
    Explore
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: auto;
  min-width: 1000px;
  margin: 100px 10% 0;
}

/* 滚动条*/
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #acababe5;
}
</style>
