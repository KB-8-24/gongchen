<template>
    <!-- 外部链接 -->
    <div class="foot">
      <div class="link">
        <a href="">首页</a>
        <a href="">信息价</a>
        <a href="">价格查询</a>
        <a href="">市场化</a>
        <a href="">企业材料库</a>
      </div>
      <div class="tex">
        <span>公司名公司名公司名公司名公司名公司名公司名公司公司名公司</span>
        <span>公司地址公司地址公司地址公司地址公司地址公地址</span>  
      </div>
    </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
    .foot {
        width: 100%;
        height: 194px;
        left: 0;
        bottom: 0;
        background-color: #171616;
    }
    .foot a {
        color: #8B8B8B;
        font-size: 18px;
    }
    .link {
        margin: auto;
        padding: 34px 0;
        width: 1200px;
        border-bottom: 1px solid #8B8B8B;
    }
    .tex {
        padding-top: 20px;
        width: 1200px;
        margin: auto;
        color: #8B8B8B;
    }
    .link a {
        padding-right: 60px;
    }
</style>
