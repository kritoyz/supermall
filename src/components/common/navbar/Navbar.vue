<template>
  <div id="navbar">
    <div class="navbar navbar-left">
      <slot name="navbar-left"></slot>
    </div>
    <div class="navbar navbar-center">
      <slot name="navbar-center"></slot>
    </div>
    <div class="navbar navbar-right">
      <slot name="navbar-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
#navbar {
  background-color: salmon;
  color: white;
  height: 38px;
  box-shadow: 1px 1px 5px silver;
}
.navbar {
  vertical-align: middle;
  text-align: center;
  display: inline-block;
  height: 38px;
  line-height: 38px;
}
.navbar-left {
  width: 20%;

}
.navbar-right {
  width: 20%;
 
}
.navbar-center {
  width: 60%;

}
</style>