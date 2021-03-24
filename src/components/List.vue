<template>
  <div class="container">
    <slot name="header"></slot>
    <div class="itemList">
      <div class="item" v-for="(item, index) in itemdata" :key="index">
        <img class="itemPic hvr-grow" :src="item.picUrl" />
        <div class="itemName">{{ item.name }}</div>
        <div class="copywriter">{{ item.copywriter }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["title", "itemdata"]
};
</script>

<style lang="less" scoped>
.container {
  margin-bottom: 100px;
  padding: 0 10px;
  font-weight: bold;
}

.itemList {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: space-between;
  grid-gap: 50px;

  .item {
    width: 200px;
    font-size: 15px;
    line-height: 1.5;

    .itemPic {
      width: 100%;
      border-radius: 16px;
      object-fit: cover;
    }

    .hvr-grow {
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      -webkit-transition-duration: 0.5s;
      transition-duration: 0.5s;
      -webkit-transition-property: transform;
      transition-property: transform;

      &:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }

    .itemName {
      margin-top: 10px;
    }

    .copywriter {
      font-size: 12px;
      font-weight: normal;
    }
  }
}
</style>
