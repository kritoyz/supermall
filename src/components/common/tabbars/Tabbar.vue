<template>
  <div id="tabbar">
    <slot ></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
};
</script>

<style>
#tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 1px 1px 5px silver;
}
</style>