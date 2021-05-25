<template>
  <div class="shopping">
    <!-- 本期推荐 -->
    <div class="nominate">
      <h3>本期推荐</h3>
        <div class="nominate-box">
            <div class="nominate-item" v-for="(item, index) in nominate">
                <img :src="item.img" alt="" /><br />
                <span>{{ item.text }}</span>
                <p>{{ item.p }}</p>
            </div>
      
        </div>
  
    </div>
    <!-- 精品推荐 -->
    <div class="boutique">
      <h3>本期推荐</h3>
        <!-- 广告 -->
        <div class="clear-fix">
            <div class="boutique-left left">
                <img src="../assets/img/home/826749876137099264.png" alt="">
            </div>
            <!-- 展示 -->
            <div class="boutique-right left">
                <div class="boutique-box">
                    <div class="boutique-item" v-for="(item, index) in boutique">
                        <img :src="item.img" alt="" /><br />
                        <span>{{ item.text }}</span>
                        <p>{{ item.p }}</p>
                    </div>
        
                </div>
            </div>
    
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UniappShopping",
  data() {
    return {
      // 本期推荐数据
      nominate: [
        {
          img: require("../assets/img/home/823571840914948096.png"),
          text: "￥51.00",
          p: "二级造价工程师职业资格...",
        }
      ],
    //   精品推荐
    boutique: [
    {
          img: require("../assets/img/home/824689029545984000.png"),
          text: "￥51.00",
          p: "二级造价工程师职业资格...",
        },        
      ],

    };

  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.shopping {
  width: 1200px;
  margin: auto;
  height: 1000px;
}
.nominate h3::before,
.boutique h3::before{
  display: inline-block;
  content: "";
  width: 10px;
  height: 25px;
  background-color: #3579fa;
  vertical-align: top;
  margin-right: 9px;
}
.nominate h3,
.boutique h3 {
  line-height: 25px;
  padding-top: 47px;
  margin-bottom: 15px;
}
.nominate-item {
  width: 200px;
  height: 161px;
  text-align: center;
  padding-top: 29px;
  border: 1px solid #dfdfdf;
}
.nominate-box {
  display: flex;
  flex-wrap: wrap;
}
.boutique-left {
    width: 245px;
    height: 564px;
}
.boutique-right {
    width: calc(100% - 245px);
    height: 564px;
}
.boutique-item {
    width: 237px;
    height: 280px;
}
.boutique-box {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
}
</style>
