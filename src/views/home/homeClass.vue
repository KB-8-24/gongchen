<template>
  <div class="clear-fix">
    <!-- 具体列表 -->
    <div class="page left">
      <div class="headerTitle" style="position: relative;">
        <h2>{{ buildTitle[classifyColor] }}</h2>
        <section>
          <span :class="{ tColor: flag }" @click="flag = !flag">热门精选</span>
          <span :class="{ tColor: !flag }" @click="flag = !flag">新课推荐</span>
        </section>
        <div class="lists">
          <div class="item" v-for="(item, index) in items" :key="index">
            <a href="#" @click.prevent="link">
              <img src="../../assets/img/home/listitem.png" alt="" />
              <h3>精讲：蜂窝移动通信系统</h3>
              <p>
                <span style="color: #01B846;">免费</span>
                <span style="color: #999999;">2400学习</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UniappNavleft",
  components: {},
  data() {
    return {
      areaImg: [
        require("../../assets/img/home/up.png"),
        require("../../assets/img/home/xia.png"),
      ],
      n: 0,
      areaShow: false,
      isAdd: true,
      isDown: 1,
      currentIndex: 1,
      buildColor: null,
      classifyColor: 0,
      liveColor: null,
      isTitleColor: false,
      // 施工管理
      buildTitle: ["一建考试", "二建考试", "造价考试", "行业软件"],
      flag: true,
      //后台请求数据
      items: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1],
    };
  },
  methods: {
    //切换地区
    areaClick() {
      this.areaShow = !this.areaShow;
      this.n === 0 ? (this.n = 1) : (this.n = 0);
    },
    // 展开目录
    icoClick(index) {
      if (this.isDown === index) {
        this.isDown = null;
        this.currentIndex = null;
      } else {
        this.isDown = index;
        this.currentIndex = index;
      }
      if (index === 0) {
        this.$router.push("build");
      } else if (index === 1) {
        this.$router.push("class");
      } else if (index == 2) {
        this.$router.push("live");
      } else {
        this.$router.push("vip");
      }
    },
    // 改变颜色
    buildClick(index) {
      this.buildColor = index;
    },
    classifyClick(index) {
      this.classifyColor = index;
    },
    liveClick(index) {
      this.liveColor = index;
    },
    titleColor() {
      this.isTitleColor = !this.isTitleColor;
    },
    // 跳转详情
    link() {
      this.$router.push("details");
      console.log(2);
    },
  },
  // 隐藏左边
  activated() {
    this.$emit("NavMenuShow", 1);
  },
  deactivated() {
    this.$emit("NavMenuShow", 0);
  },
};
</script>

<style scoped>
.content {
  width: 1200px;
  margin: auto;
}
.navLeft {
  width: 245px;
  height: 573px;
  background-color: #fff;
  padding-left: 30px;
  font-size: 14px;
}
img {
  width: 17px;
  height: 17px;
}
.area span:nth-child(1) {
  font-size: 18px;
}
.area span:nth-child(2) {
  font-size: 14px;
}
.area {
  position: relative;
  padding-top: 34px;
  margin-left: 80px;
  cursor: pointer;
  padding-bottom: 35px;
}
.area-show {
  position: absolute;
  width: 454px;
  height: 71px;
  background-color: #e1e1e1;
  left: -137px;
  padding: 0 15px;
  font-size: 12px;
  z-index: 999;
}
.site a {
  font-size: 12px;
  padding-right: 1px;
}
.site {
  margin: 3px 0;
}
.ico {
  display: inline-block;
  width: 17px;
  height: 16px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-right: 7px;
}
.add {
  background-image: url(../../assets/img/home/add.png);
}
.down {
  background-image: url(../../assets/img/home/down.png);
}
.build,
.classify,
.live,
.vip {
  margin-bottom: 47px;
}
.title {
  margin-bottom: 17px;
}
.navLeft li {
  margin-bottom: 20px;
}
.currentColor,
.titleColor {
  color: #3579fa;
}
.page {
  width: 955px;
  margin-bottom: 131px;
}
/* 组件css */
.headerTitle h2 {
  padding-left: 36px;
  padding-top: 25px;
  padding-bottom: 21px;
  color: #333333;
}
.item img {
  width: 290px;
  height: 250px;
}
.item h3 {
  position: absolute;
  font-size: 16px;
  color: #333333;
  padding: 17px 0 0 22px;
  left: 0;
  bottom: 65px;
}
.lists {
  padding-left: 15px;
}
.item {
  float: left;
  position: relative;
  margin-right: 23px;
}
p {
  position: relative;
  font-size: 14px;
  padding-left: 24px;
  bottom: 30px;
}
p span:nth-child(2) {
  margin-left: 160px;
}
section {
  position: absolute;
  left: 170px;
  top: 33px;
  font-size: 16px;
}
section span {
  margin-right: 34px;
  display: inline-block;
  height: 25px;
  line-height: 25px;
}

.tColor {
  border-bottom: 3px solid #1086f0;
  color: #067ff0;
}
</style>
