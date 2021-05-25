<template>
  <div class="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'uniApp'
};
</script>

<style>
  @import url(./assets/css/base.css);
</style>