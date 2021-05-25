<template>
  <div class="header">
    <header>
      <div class="content">
        <div class="nav">
          <div class="nav-left">
            <div class="top">
              <img
                src="../../assets/img/login/c93f2d2a-1f46-441c-94c0-230beb4d669f.png"
                alt=""
              />
              <img src="../../assets/img/login/gongfuback.png" alt="" />
              <router-link to="/register"><a href="">注册</a></router-link> |
              <router-link to="/login"><a href="">登录</a></router-link>
            </div>
            <div class="tag">
              <ul>
                <li
                  v-for="(item, index) in tagLists"
                  :key="item"
                  :class="{ current: index === tagListsColor }"
                  @click="tagClick(index)"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="nav-right">
            <ul class="clear-fix">
              <li :class="{ current: 0 === shopColor }" @click="shopClick(0)">
                商城
              </li>
              <li :class="{ current: 1 === shopColor }" @click="shopClick(1)">
                课堂
              </li>
              <!-- 轮播图 -->
              <li class="swapir">
                <div class="block">
                  <el-carousel height="170px">
                    <el-carousel-item v-for="item in 3" :key="item">
                      <h3 class="small">
                        <img src="../../assets/img/orderForm/fuli.jpg" alt="" />
                      </h3>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      tagLists: ["首页", "信息价", "价格查询", "市场价", "企业材料库"],
      router: ["build", "information", "inquire", "bazaar", "depot"],
      tagListsColor: 0,
      shopColor: null,
      // 轮播图数据
      swapir: [],
    };
  },
  methods: {
    // 切换颜色
    tagClick(index) {
      this.tagListsColor = index;
      this.shopColor = null;
      this.$router.push(this.router[index]);
    },
    shopClick(index) {
      this.shopColor = index;
      this.tagListsColor = null;
      if (index == 1) {
        this.$router.push("classroom");
      } else if (index == 0) {
        this.$router.push("shopping");
      }
    },
  },
};
</script>

<style scoped>
ul li {
  list-style: none;
  float: left;
  cursor: pointer;
  font-size: 18px;
}
a {
  color: #8b8b8b;
  font-size: 14px;
}
header {
  width: 100%;
  height: 169px;
  background-color: #fff;
}
.content {
  width: 1200px;
  margin: auto;
}
.nav-left img {
  width: 81px;
  height: 39px;
  vertical-align: middle;
}
.nav-left {
  padding-top: 41px;
}
.top img:nth-child(2) {
  width: 113px;
  height: 23px;
  margin-right: 30px;
}
.top {
  margin-bottom: 37px;
}
.tag ul li {
  font-size: 18px;
  margin-right: 40px;
}
.nav-right li:nth-child(-n + 2){
  height: 170px;
  line-height: 180px;
}
.nav {
  position: relative;
}
.nav-right {
  position: absolute;
  top: 0;
  right: 0;
}
.nav-right li:nth-child(1) {
  margin-right: 60px;
}
.current {
  color: #4b84fa;
}
.clear-fix img {
  float: right;
}
.nav-right li:nth-child(2) {
  margin-right: 60px;
  margin-left: 60px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 170px;
  margin: 0;
}

.swapir {
  width: 255px;
  height: 170px;
}
</style>
