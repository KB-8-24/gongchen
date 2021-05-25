<template>
    <div class=" clear-fix">
      <!-- 具体列表 -->
      <div class="page left">
        <div class="headerTitle">
          <h2>新鲜出炉</h2>
          <div class="lists">
            <div class="item" v-for="(item, index) in items" :key="index">
              <a href="#"  @click.prevent="link">
                  <img src="../../assets/img/home/listitem.png" alt="">
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
        // 施工管理
        buildTitle:['新鲜出炉','BOM建造','智慧工地'],
        //后台请求数据
        items:[1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1]
      };
    },
    methods: {
      // 跳转详情
      link() {
        this.$router.push('details')
      }
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
    /* padding-left: 1px; */
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
  </style>
  
