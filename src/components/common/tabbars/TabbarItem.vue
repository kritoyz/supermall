<template>
  <div class="tabbar-item" @click="itemClick()">
    <slot v-if="!isActive" name="tabbar-item-icon" ></slot>
    <slot v-else name="tabbar-item-icon-active" ></slot>
    <div :class="{active:isActive}">
      <slot name="tabbar-item-text" ></slot>
    </div>
    <!-- <img class="tabbar-item-icon" src="../../assets/img/home.svg" />
    首页 -->
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  props:{
    path:{
      type:String
    }
  },
  computed:{
    isActive(){
      return this.$route.path==this.path
    }
  },
  methods:{
    itemClick:function(){
      // console.log(this.path);
      this.$router.push(this.path);
      // this.isActive=!this.isActive;
    }
  }
};
</script>

<style>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tabbar-item-icon {
  width: 20px;
  height: 20px;
  display: block;
  margin: auto;
  margin-top: 10%;
}
.active{
  color:dodgerblue;
}
</style>