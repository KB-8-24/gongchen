<template>
  <div class="information">
    <!-- 内容 -->
    <div class="content clear-fix">
      <div class="NavMenu left">
        <!-- 地区选择 -->
        <i class="el-icon-map-location"> </i>
        <el-select v-model="value" placeholder="请选择地区">
          <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label"
          >
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-option-group>
        </el-select>
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <!-- 施工管理 -->
              <el-submenu index="1">
                <template slot="title">
                  <i
                    :class="{
                      'el-icon-circle-plus-outline': true,
                      'el-icon-remove-outline': ico1,
                    }"
                  ></i>
                  <span>专业</span>
                </template>
                <el-menu-item
                  :index="'1-' + index"
                  v-for="(item, index) in major"
                  :key="index"
                  >{{ item }}</el-menu-item
                >
              </el-submenu>
              <!-- 课程分类 -->
              <el-submenu index="2">
                <template slot="title">
                  <i
                    :class="{
                      'el-icon-circle-plus-outline': true,
                      'el-icon-remove-outline': ico2,
                    }"
                  ></i>

                  <span>年份</span>
                </template>
                <el-menu-item
                  :index="'2-' + index"
                  v-for="(item, index) in year"
                  :key="index"
                  >{{ item }}</el-menu-item
                >
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>

      <!-- 表单页面 -->
      <div class="form-mes">
        <div class="list">
          <table>
            <tr>
              <th>名称</th>
              <th>地区</th>
              <th>专业</th>
              <th>年份</th>
              <th>时间</th>
            </tr>
            <tr>
              <td>合肥2011年2月信息价</td>
              <td>合肥</td>
              <td>土建</td>
              <td>2012年</td>
              <td>2021-8-9</td>
            </tr>
            <tr>
              <td>合肥2011年2月信息价</td>
              <td>合肥</td>
              <td>土建</td>
              <td>2012年</td>
              <td>2021-8-9</td>
            </tr>
            <tr>
              <td>合肥2011年2月信息价</td>
              <td>合肥</td>
              <td>土建</td>
              <td>2012年</td>
              <td>2021-8-9</td>
            </tr>
          </table>
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
      major: [
        "1.土建",
        "2.安装",
        "3.市政",
        "4.园林绿化",
        "5.水利水电",
        "6.煤炭",
      ],
      year: [2001, 2002, 2003, 2004, 2005],
      // 后台请求数据
      formdata: ["合肥2011年2月信息价", "合肥", "土建", "2012年", "2021-8-9"],
      // 地区选择
      options: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海",
            },
            {
              value: "Beijing",
              label: "北京",
            },
          ],
        },
        {
          label: "城市名",
          options: [
            {
              value: "Chengdu",
              label: "成都",
            },
            {
              value: "Shenzhen",
              label: "深圳",
            },
            {
              value: "Guangzhou",
              label: "广州",
            },
            {
              value: "Dalian",
              label: "大连",
            },
          ],
        },
      ],
      value: "",
      // 记录图标变化
      ico1: false,
      ico2: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      //  控制图标
      let ico = "ico" + key;
      this[ico] = true;
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      let ico = "ico" + key;
      this[ico] = false;
    },
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
  background-image: url(../assets/img/home/add.png);
}
.down {
  background-image: url(../assets/img/home/down.png);
}
.build,
.classify,
.live,
.vip {
  margin-bottom: 47px;
}
.classify .title,
.build .title {
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
  width: 925px;
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

.form-mes {
  padding-top: 18px;
  margin-left: 255px;
  font-size: 18px;
}
table {
  width: 100%;
  border-spacing: 0;
}
table th {
  height: 56px;
  background-color: #4b84fa;
  color: #fff;
}
table td {
  height: 56px;
  background-color: #fff;
  border-bottom: 1px solid #f4f4f4;
  padding-left: 5px;
  text-align: center;
}
.el-menu {
  width: 245px;
  height: 573px;
  margin-top: 5px;
}
.NavMenu >>> .el-input__inner {
  margin-top: 10px;
  margin-left: 8px;
  width: 220px;
}
</style>
