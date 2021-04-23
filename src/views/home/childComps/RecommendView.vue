<template>
  <div class="recommend">
    <a
      v-for="(item, index) in list"
      :href="item.link"
      :key="index"
      class="recommendItem"
    >
      <img :src="item.image" />
      <div>{{ item.title }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  font-size: 10px;
  width: 100%;
}
.recommendItem {
  flex: 1;
}
.recommend img {
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
}
</style>