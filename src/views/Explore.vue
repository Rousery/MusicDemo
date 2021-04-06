<template>
  <div>
    <div class="title">
      {{ title }}
    </div>

    <el-row>
      <el-button
        v-for="(item, index) in buttonList"
        :key="index"
        :class="{ isActive: item == activeCat }"
        @click="tabBtn(item)"
      >
        {{ item }}
      </el-button>
      <el-button @click="handleClick">更多</el-button>
    </el-row>

    <div class="categories" v-show="isDisplay">
      <div v-for="(value, index) in categories" :key="index" class="category">
        <div class="categoryTitle">{{ value }}</div>
        <div class="categoryContainer">
          <div
            class="button"
            :class="{ active: item.activity }"
            :underline="false"
            v-for="(item, i) in category[index]"
            :key="i"
            @click="handleButton(item, index)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

    <list></list>
  </div>
</template>

<script>
import List from "@/components/List";
import { getCats } from "@/api";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "发现",
      activeCat: "全部",
      categories: {},
      isDisplay: false
    };
  },
  components: {
    List
  },
  mounted() {
    this.loadData();
  },
  computed: {
    ...mapState(["buttonList"]),
    ...mapGetters(["category"])
  },
  methods: {
    ...mapMutations(["handleButton"]),
    loadData() {
      getCats().then(data => {
        this.categories = data.categories;
        localStorage.setItem("cats", JSON.stringify(data.sub));
      });
    },
    handleClick() {
      this.activeCat = null;
      this.isDisplay = !this.isDisplay;
    },
    tabBtn(item) {
      this.isDisplay = false;
      this.activeCat = item;
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 50px;
}

.el-button {
  font-weight: bold;
  &.isActive {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.categories {
  background: #eee;
  border-radius: 16px;
  margin-top: 20px;
  padding: 20px 30px;

  .category {
    display: grid;
    grid-template-columns: 100px auto;
    line-height: 40px;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    .categoryTitle {
      width: 100px;
      font-size: 20px;
      font-weight: bold;
    }

    .categoryContainer {
      display: grid;
      grid-template-columns: repeat(auto-fill, 100px);
    }
  }
}

.button {
  cursor: pointer;
  &.active {
    color: #409eff;
  }
}
</style>
