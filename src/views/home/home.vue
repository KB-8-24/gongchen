<template>
  <div class="home">
    <navHeader></navHeader>
    <div class="content clear-fix">
      <NavMenu class="left" v-show="isShow"></NavMenu>
      <keep-alive>
        <router-view class="left" @NavMenuShow="NavMenuShow"></router-view>
      </keep-alive>
    </div>
    <navFooter></navFooter>
  </div>
</template>

<script>
import navHeader from '@/components/common/navHeader';
import navFooter from '@/components/common/navFooter';
import NavMenu from '@/components/common/NavMenu';

export default {
  name: "UniappHome",
  components: {
    navHeader,
    navFooter,
    NavMenu,
  },
  data() {
    return {
      isShow: ''
    };
  },
  methods: {
    NavMenuShow(index) {
      this.isShow = index
    }
  },
};
</script>

<style scoped>
  .content {
    width: 1200px;
    margin: auto;
    margin-bottom: 260px;
  }
</style>
