<template>
  <Tabbar>
    <TabbarItem
      v-for="(item, index) in bottomItems"
      :key="index"
      :path="item.path"
    >
      <img slot="tabbar-item-icon" :src="item.icon" class="tabbar-item-icon" />
      <img
        slot="tabbar-item-icon-active"
        :src="item.activeIcon"
        class="tabbar-item-icon active"
      />
      <span slot="tabbar-item-text">{{ item.text }}</span>
    </TabbarItem>
  </Tabbar>
</template>

<script>
import Tabbar from "../common/tabbars/Tabbar";
import TabbarItem from "../common/tabbars/TabbarItem";
export default {
  name: "mainTabbar",
  data() {
    return {
      bottomItems: [
        {
          icon: require("@/assets/img/tabbar/home.svg"),
          activeIcon: require("@/assets/img/tabbar/home_active.svg"),
          path: "/home",
          text: "首页",
        },
        {
          icon: require("@/assets/img/tabbar/fenlei.svg"),
          activeIcon: require("@/assets/img/tabbar/fenlei_active.svg"),
          path: "/classification",
          text: "分类",
        },
        {
          icon: require("@/assets/img/tabbar/gouwuche.svg"),
          activeIcon: require("@/assets/img/tabbar/gouwuche_active.svg"),
          path: "/shoppingCart",
          text: "购物车",
        },
        {
          icon: require("@/assets/img/tabbar/wode.svg"),
          activeIcon: require("@/assets/img/tabbar/wode_active.svg"),
          path: "/my",
          text: "我的",
        },
      ],
      activeIndex: 0,
    };
  },
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style>
.tabbar-item-text-active {
  color: dodgerblue;
}
</style>