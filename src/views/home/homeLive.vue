<template>
    <div class="clear-fix">
      <!-- 具体列表 -->
      <div class="liveBox">
        <div class="liveList">
          <img src="../../assets/img/home/124.png" alt="" class="left">
          <div class="zhong ">
            <h4>安装算量GQI2021实战培训-给排水专业</h4>
          </div>
          <div class="watch " >
            <p>课程：安装算量2021实战培-给排水专业</p>
            <p>1小时45分     曾舒瑜老师    604人报名</p>
          </div>
          <button class="watchBtn" @click="link">报名观看</button>
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
        isDown: 2,
        currentIndex: 2,
        buildColor: null,
        classifyColor: null,
        liveColor: 0,
        isTitleColor: false,
        // 施工管理
        buildTitle:['新鲜出炉','BOM建造','智慧工地'],
        //后台请求数据
        items:[1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1]
      };
    },
    methods: {
          // 跳转详情
    link() {
      this.$router.push("details");
      console.log(2);
    },

    },
            // 隐藏左边
            activated() {
      this.$emit('NavMenuShow', 1);
    },
    deactivated() {
      this.$emit('NavMenuShow', 0);
    },      

  };
  </script>
  
  <style scoped>
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
      color: #3579FA;
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
    width: 275px;
    height: 250px;
  }
  .item h3 {
    position: absolute;
    font-size: 16px;
    color: #333333;
    padding: 17px 0 0  22px;
    left: 0;
    bottom: 65px;
  }
  .lists {
    padding-left: 15px;
  }
  .item {
    float: left;
    position: relative;
    margin-right: 8px;
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
  .liveList {
    position: relative;
    width: 940px;
    height: 207px;
    margin-left: 10px;
    margin-top: -30px;
    background-color: #fff;
  }
  .liveList img {
    width: 249px;
    height: 141px;
    margin-left: 42px;
    margin-top: 22px;
    margin-right: 34px;
  }
  .zhong {
    margin: 42px 0 35px 34px;
  }
  .watch p:nth-child(2) {
    color: #999999;
    margin-top: 15px;
  }
  .watchBtn {
    position: absolute;
    width: 130px;
    height: 42px;
    background-color: #3579FA;
    color: #fff;
    border-radius: 5px;
    right: 50px;
    top: 65px;
  }
  .liveBox {
    margin-bottom: 100px;
  }
  .zhong h4 {
    padding: 42px 0 35px;
  }
  </style>
  