<template>
  <div>
    <list
      v-for="(item, index) in titleList"
      :key="index"
      :itemdata="itemData[index]"
    >
      <template #header>
        <div class="header">
          <h2>{{ item }}</h2>
          <a>更多</a>
        </div>
      </template>
    </list>
  </div>
</template>

<script>
import { getPersonalized, getDJ, getAlbum } from "@/api";
import List from "@/components/List";
export default {
  data() {
    return {
      titleList: ["推荐歌单", "推荐专辑", "推荐电台"],
      itemData: []
    };
  },
  components: {
    List
  },
  methods: {
    loadData() {
      getPersonalized({
        limit: 10
      }).then(data => {
        this.itemData.push(data.result);
      });

      getAlbum({
        area: "EA",
        limit: 10
      }).then(data => {
        this.itemData.push(data.albums);
      });

      getDJ().then(data => {
        this.itemData.push(data.result);
      });
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 25px;

  h2 {
    font-size: 2em;
  }

  a {
    font-size: 12px;
  }
}
</style>
