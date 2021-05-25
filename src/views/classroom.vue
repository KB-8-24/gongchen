<template>
  <div class="classroom">
    <!-- 头 -->
    <p class="navClass">
      <span v-for="(item, index) in navClass" :key="item" class="baseColor">{{
        item
      }}</span>
    </p>
    <!-- 最新 -->
    <div class="news">
      <span v-for="(item, index) in news" :key="item">{{ item }}</span>
      <i class="el-icon-arrow-down"></i>
    </div>
    <!-- 具体列表内容 -->
    <div class="content">
      <div v-for="item in 12" :key="item" class="content-item" @click="link">
        <img src="../assets/img/home/121.jpg" alt="" />
        <h3>精讲：蜂窝移动通信系统</h3>
        <p>
          <span style="color: #01B846;">免费</span>
          <span class="right" style="color: #9999;">1148人学习</span>
        </p>
      </div>
    </div>
    <!-- 页码 -->
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="30">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "UniappClassroom",
  data() {
    return {
      // 导航头类
      navClass: ["造价基础", "施工管理", "一建考试", "工程施工"],
      news: ["最热", "最新", "价格", "|", "查找直播+录播"],
      //具体内容数据
      // conItems: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    };
  },
  methods: {
    //  跳转详情页
      link() {
        this.$router.push('details')
      }
  },
};
</script>

<style scoped>
.classroom {
  width: 1200px;
  margin: auto;
  height: 1500px;
}
.baseColor {
  color: #666666;
  font-size: 14px;
}
.navClass span {
  line-height: 68px;
  height: 68px;
  margin-right: 50px;
}
.news span {
  margin-right: 30px;
}
.news span:nth-child(n + 3) {
  color: #666666;
  font-size: 14px;
}
.news span:nth-child(5) {
  margin-right: 0;
}
.content {
  display: flex;
  flex-wrap: wrap;
  margin-top: 53px;
}
.content-item {
  width: 290px;
  height: 249px;
  background-color: #fff;
  margin-right: 13px;
  margin-bottom: 29px;
}
.content .content-item:nth-child(4n) {
  margin-right: 0;
}
.content-item img {
  width: 290px;
  height: 162px;
}
.content-item h3 {
  margin: 17px 0 15px 24px;
  color: #333333;
}
.content-item p {
  padding: 0 24px;
}
.page {
    display: flex;
    justify-content: center;
    margin-top: 60px;
}
.classroom >>> .el-pager li {
    width: 60px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
}
.classroom >>> .btn-next, .classroom >>> .btn-prev{
    width: 60px;
    height: 40px;
    background-color: #fff;
}
</style>
