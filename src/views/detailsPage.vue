<template>
  <div class="detail">
    <div class="cover">
      <div class="content">
        <div class="title">
          <span>首页>课程>详情</span>
        </div>
        <div class="specific clear-fix">
          <img src="../assets/img/home/121.jpg" alt="" class="left" />
          <div class="text left">
            <h2>从0到1玩转BIM装饰计量</h2>
            <p>
              <span>访问量：3,745 | 学习人数：1,085</span>
            </p>
            <ul>
              <li>适用地区：全国</li>
              <li>课程难度：中级</li>
              <li>学习形式：录播</li>
              <li>课程时长：一小时35分钟</li>
              <li>总有效期： 360天</li>
            </ul>
            <h2 style="color: #01B846; padding: 28px 0 23px;">免费</h2>
            <div class="btn">
              <router-link to="/home/submit">
                <button class="btnCurrent">立即观看</button>
              </router-link>
              <button>在线咨询</button>
              <a href="" style="margin-right: 24px;" class="share">分享</a>
              <a href="#" class="collect">收藏</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 同系列 -->
    <div class="analogy">
      <h3>同系列课程</h3>
      <div class="lists">
        <div class="item" v-for="(item, index) in items" :key="index">
          <a href="javscript:;">
            <img src="../assets/img/home/listitem.png" alt="" />
            <h3>精讲：蜂窝移动通信系统</h3>
            <p class="p">
              <span style="color: #01B846;">免费</span>
              <span style="color: #999999;">2400学习</span>
            </p>
          </a>
        </div>
      </div>
    </div>
    <!-- 概述 -->
    <div class="catalog clear-fix">
      <!-- 目录 -->
      <div class="student left">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
          <el-tab-pane label="课程概述" name="first">
            <p>
              <span class="fontColor"
                >请提前下载装饰计量2021软件，并在课程开始前打开软件</span
              >，课程中有练习巩固环节，请做好课程准备
              工作。边学边练有助于巩固知识点，
            </p>
            <p>
              <span class="fontColor"
                >请提前下载装饰计量2021软件，并在课程开始前打开软件</span
              >，课程中有练习巩固环节，请做好课程准备
              工作。边学边练有助于巩固知识点，
            </p>
            <h2 class="fontColor" style="margin-top: 32px;">课程亮点</h2>
            <p>
              （1）从易到难，体系化地讲解各个功能使用场景、操作流程、注意事项；
            </p>
            <p>（2）每个功能点独立成节，方便大</p>
            <h2 class="fontColor" style="margin-top: 32px;">课程亮点</h2>
            <p>
              （1）从易到难，体系化地讲解各个功能使用场景、操作流程、注意事项；
            </p>
            <p>（2）每个功能点独立成节，方便大</p>
          </el-tab-pane>
          <el-tab-pane label="课程目录" name="second">
            <ul>
              <li>
                <span class="ico"></span>
                <span>1.Revit主界面及功能介绍 </span>
                <span style="color: #ccc; font-size: 14px; margin-left: 5px;"
                  >11:06</span
                >
              </li>
              <li>
                <span class="ico"></span>
                <span>1.Revit主界面及功能介绍 </span>
                <span style="color: #ccc; font-size: 14px; margin-left: 5px;"
                  >11:06</span
                >
              </li>
              <li>
                <span class="ico"></span>
                <span>1.Revit主界面及功能介绍 </span>
                <span style="color: #ccc; font-size: 14px; margin-left: 5px;"
                  >11:06</span
                >
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="学员评价(1)" name="third">
            <div class="evaluate clear-fix">
              <span style="margin-right: 25px;">学员评价</span>
              <span class="evaluateTex">只有学过本门课程才能打分/评论喔</span>
              <el-button type="primary" class="right" @click="open">
                <i class="el-icon-edit"></i>我要评论</el-button>
            </div>
            <span class="evaluateTex">课程评分：</span>

            <i class="el-icon-star-on fontColor"></i>
            <i class="el-icon-star-on fontColor"></i>
            <i class="el-icon-star-on fontColor"></i>
            <i class="el-icon-star-on fontColor"></i>
            <span style="color: #E36C09;">5.0</span>
            <span class="evaluateTex">已有20位学员评分 </span>
            <div class="speak">
              <div class="paeak-top clear-fix">
                <div class="paeck-img left">
                  <img src="../assets/img/orderForm/666.png" alt="" />
                  <i class="el-icon-star-on fontColor"></i>
                  <i class="el-icon-star-on fontColor"></i>
                  <span style="color: #E36C09;">2.0</span>
                  <p class="evaluateTex" style="padding-left: 80px;">课程讲的不错，怎样参加学习</p>
                  <p class="evaluateTex zan" style="padding-left: 80px;">2</p>
                </div>
                <p class="evaluateTex right">2021-03-25</p>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 名片 -->
      <div class="business left">
        <h3 style="padding: 22px 0 0 0; color: #333;">课堂讲师</h3>
        <div class="msg">
          <img src="../assets/img/home/greng.png" alt="" />
          <p>韩江苹<span style="font-size: 14px; color: #333;"> 老师</span></p>
          <p style="text-align: left; line-height: 25px; margin: 31px 0 32px;">
            2014年进入广联达公司一直从事服务专员
            以及培训讲师职位，对软件应用熟悉了解并 掌握施工业务情况。
          </p>
          <p>擅长领域： 算量、造价</p>
          <div class="math clear-fix">
            <div class="left">
              <span>36</span> <br />
              <span>课程总数</span>
            </div>
            <div class="left">
              <span>36</span> <br />
              <span>课程总数</span>
            </div>
          </div>
          <p>
            喜欢TA就去看看
            <a href="javascript:;" style="color: #3579FA;">TA更多课程吧</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UniappDetailspage",
  components: {},
  directives: {},
  data() {
    return {
      items: [1, 2, 3, 4],
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {},
    // 评论弹窗
    open() {
        this.$prompt('说点什么(500字内)', '评论/打分', {
          confirmButtonText: '确认提交',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '提交成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
  },
};
</script>

<style scoped>
span {
  color: #666;
}
.content {
  width: 1200px;
  margin: auto;
  padding-top: 25px;
  padding-left: 15px;
}
.cover {
  height: 412px;
  border-top: 1px solid #ccc;
  background-color: #fff;
}
.title {
  padding-bottom: 25px;
}
.specific img {
  width: 520px;
  height: 298px;
}
.text ul {
  width: 518px;
  display: flex;
  flex-wrap: wrap;
  height: 53px;
  align-content: space-between;
}
.text ul li {
  margin-right: 60px;
}
.text {
  margin-left: 35px;
}
.text p {
  margin: 23px 0 45px;
}
.btn button {
  width: 150px;
  height: 50px;
  margin-right: 15px;
}
.btnCurrent {
  color: #fff;
  background-color: #3579fa;
}
.btn button:nth-child(2) {
  margin-right: 44px;
}
.share::before {
  display: inline-block;
  content: "";
  width: 15px;
  height: 15px;
  background-image: url(../assets/img/orderForm/fengxxiang.png);
  background-size: 15px 15px;
}
.collect::before {
  display: inline-block;
  content: "";
  width: 18px;
  height: 15px;
  background-image: url(../assets/img/orderForm/noshoucang.png);
  background-size: 18px 15px;
}
.analogy {
  width: 1200px;
  height: 333px;
  margin: auto;
  background-color: #fff;
  margin-top: 17px;
}
.analogy h3 {
  padding: 19px 30px 45px;
  border-bottom: 1px solid #ccc;
}
.lists {
  width: 100%;
  display: flex;
}

.item img {
  width: 275px;
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
.p {
  position: relative;
  font-size: 14px;
  padding-left: 24px;
  bottom: 30px;
}
p span:nth-child(2) {
  margin-left: 160px;
}
.catalog {
  width: 1200px;
  margin: 18px auto 0;
  height: 630px;
  margin-bottom: 80px;
}
.student {
  width: 862px;
  height: 100%;
  margin-right: 12px;
  padding-top: 44px;
  padding-left: 33px;
  padding-right: 33px;
  background-color: #fff;
}
.business {
  width: 322px;
  height: 100%;
  background-color: #fff;
  padding: 0 40px;
}
.detail >>> .el-tabs__item {
  font-size: 16px;
}
.student ul li {
  position: relative;
  width: 800px;
  height: 42px;
  background-color: #eff5f9;
  margin-bottom: 6px;
  color: #333;
  padding-left: 40px;
  font-weight: 600;
}
.student span {
  display: inline-block;
  line-height: 42px;
  height: 42px;
}
.student .ico {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10px;
  left: 15px;
  background-image: url(../assets/img/home/bofang.png);
  background-size: 100%;
}
.msg {
  margin-top: 48px;
  text-align: center;
}
.msg img {
  width: 134px;
  height: 134px;
  margin-bottom: 25px;
}
.math {
  margin-top: 51px;
  margin-bottom: 51px;
}
.math div:nth-child(1) {
  margin-right: 100px;
}
button {
  border-radius: 3px;
}
.tabs {
  font-size: 18px;
}
.tabs p {
  line-height: 30px;
}
.evaluateTex {
  color: #999999;
  font-size: 14px;
}
.paeak-top {
  margin-top: 48px;
}
.paeck-img img {
  vertical-align: bottom;
  margin-right: 8px;
}
.zan::before {
  display: inline-block;
  content: '';
  width: 18px;
  height: 18px;
  background-image: url(../assets/img/orderForm/zan\'.png);
  background-size: 18px 18px;
  margin-right: 3px;
}
</style>
