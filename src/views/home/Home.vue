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
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/Navbar.vue";
import { getHomemultiData } from "@/network/home.js";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FetureView from "./childComps/FeatureView";
export default {
  name: "Home",
  components: {
    navbar,
    HomeSwiper,
    RecommendView,
    FetureView,
  },
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },
  created() {
    getHomemultiData().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>