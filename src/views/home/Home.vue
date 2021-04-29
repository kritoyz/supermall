<template>
  <div>
    <navbar>
      <div slot="navbar-left"></div>
      <div slot="navbar-center">寻好物</div>
      <div slot="navbar-right"></div>
    </navbar>

    <HomeSwiper :banner="banner"></HomeSwiper>
    <RecommendView :list="recommend"></RecommendView>
    <FetureView></FetureView>
    <TabControl
      :title="['流行', '新款', '精选']"
      @tabClick="itemClick"
    ></TabControl>
    <GoodsList :goods="goods[currentArr[currentIndex]].list"></GoodsList>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/Navbar.vue";
import { getHomemultiData, getHomeGoods } from "@/network/home.js";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";

import FetureView from "./childComps/FeatureView";
import TabControl from "@/components/content/tabControl/TabControl.vue";

import GoodsList from "@/components/content/goods/GoodsList";
export default {
  name: "Home",
  components: {
    navbar,
    HomeSwiper,
    RecommendView,
    FetureView,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentIndex: 0,
      currentArr:['pop', 'new', 'sell']
    };
  },
  created() {
    this.getHomemultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    //获取首页数据
    getHomemultiData() {
      getHomemultiData().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    //获取商品图片数据 by currentType
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    itemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style>
#navbar {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  margin-bottom: 1%;
}
.tab-control {
  position: sticky;
  top: 38px;
  z-index: 9;
}
</style>