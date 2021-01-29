<template>
  <div>
    <navbar>
      <div slot="navbar-left"></div>
      <div slot="navbar-center">寻好物</div>
      <div slot="navbar-right"></div>
    </navbar>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/Navbar.vue";
import {getHomemultiData} from '@/network/home.js'
export default {
  name: "Home",
  components: {
    navbar,
  },
  data(){
    return {
      banner:[],
      recommend:[]
    }
  },
  created(){
    getHomemultiData().then(res=>{
      this.banner=res.data.banner.list;
      this.recommend=res.data.recommend.list;
    })
  }
};
</script>

<style>
</style>