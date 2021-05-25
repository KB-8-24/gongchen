<template>
    <div class="clear-fix">
      <!-- 具体列表 -->
      <div class="page left">
        <div class="headerTitle">
          <div class="clear-fix" style="font-style: italic;">
            <h1 class="left" style="color: #333;">本年新课</h1>
            <h2 class="left">已上线会员免费专区</h2>
          </div>

          <div class="lists">
            <div class="item" v-for="(item, index) in items" :key="index">
              <a href="#" @click.prevent="link">
                <img src="../../assets/img/home/shuang.png" alt="">    
              </a>
            </div>
          </div>
          <div class="newclass">查看更多新课>></div>
          <div class="openVip">
            <div class="openitem">
              <div>一个月</div>
              <div><span>￥</span> 49.00</div>
              <div>( ￥49.0/月 )</div>
              <button>立即开通</button>
            </div>
            <div class="openitem">
              <div>一个月</div>
              <div><span>￥</span> 49.00</div>
              <div>( ￥49.0/月 )</div>
              <button>立即开通</button>
            </div>
            <div class="openitem">
              <div>一个月</div>
              <div><span>￥</span> 49.00</div>
              <div>( ￥49.0/月 )</div>
              <button>立即开通</button>
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
        isDown: 3,
        currentIndex: 3,
        buildColor: null,
        classifyColor: null,
        liveColor: null,
        isTitleColor: false,
        //后台请求数据
        items:[1,1,1,1,1,1,1,1,1]
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
          this.isDown = null
          this.currentIndex = null
        } else {
          this.isDown = index;
          this.currentIndex = index;
        }
        if(index === 0) {
          this.$router.push('build')
        } else if(index === 1) {
          this.$router.push('class')
        } else if(index == 2) {
          this.$router.push('live')
        } else {
          this.$router.push('vip')
        }

      },
      // 改变颜色
      buildClick(index) {
          this.$router.push('build')
          this.buildColor = index
      },
      classifyClick(index) {
          this.$router.push('class')
          this.classifyColor = index

      },
      liveClick(index) {
          this.$router.push('live')
          this.liveColor = index

      },
      titleColor() {
          this.$router.push('vip')
          this.isTitleColor = !this.isTitleColor
      },
            // 跳转详情
            link() {
        this.$router.push('details')
        console.log(2);
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
    width: 940px;
    /* background-color: #fff; */
    margin: 14px 0 131px 15px;
  }
  /* 组件css */
  .headerTitle h2 {
    padding-left: 36px;
    padding-top: 25px;
    padding-bottom: 21px;
    color: #333333;
  }
  .headerTitle {
    background-color: #fff;
  }
  .item img {
    width: 282px;
    height: 160px;
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
    padding-left: 30px;
    overflow: hidden;
  }
  .item {
    float: left;
    position: relative;
    margin-right: 8px;
    margin-bottom: 20px;
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
  .headerTitle h1 {
    padding-left: 59px;
  }
  .newclass {
    text-align: right;
    padding-right: 15px;
    margin-bottom: 20px;
    color: #333;
    padding-bottom: 20px;
  }
  .openitem {
    width: 274px;
    height: 140px;
    background-color: #fff;
    border: 1px solid #D0BD92;
    border-radius: 9px;
    float: left;
    margin-right: 35px;
  }
  .openVip {
    text-align: center;

  }
  .openitem div:nth-child(1) {
    color: #80641F;
    font-size: 19px;
    margin: 15px auto 10px;
  }
  .openitem div:nth-child(2) {
    color: #C69F61;
    font-size: 37.5px;
  }
  .openitem div:nth-child(2) span {
    font-size: 20px;
  }

  .openitem div:nth-child(3) {
    color: #BFA362;
    font-size: 11px;
  }
  .openitem button {
    width: 117px;
    height: 24px;
    background: #FACD8C;
    border-radius: 9px;
    color: #81642A;
    font-size: 12.5px;
  }

  </style>
  