<template>
  <div class="NavMenu">
    <!-- 地区选择 -->
    <i class="el-icon-map-location"> </i>
    <el-select v-model="value" placeholder="请选择地区">
      <el-option-group
        v-for="group in options"
        :key="group.label"
        :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
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
              <i :class="{'el-icon-circle-plus-outline': true, 'el-icon-remove-outline': ico1}"></i>
              <span>施工管理</span>
            </template>
            <el-menu-item index="1-1" @click="linkBuild">1.新鲜出炉</el-menu-item>
            <el-menu-item index="1-2" @click="linkBuild">2.BOM建造</el-menu-item>
            <el-menu-item index="1-3" @click="linkBuild">3.智慧工地</el-menu-item>
          </el-submenu>
          <!-- 课程分类 -->
          <el-submenu index="2">
            <template slot="title">
              <i :class="{'el-icon-circle-plus-outline': true, 'el-icon-remove-outline': ico2}"></i>

              <span>课程分类</span>
            </template>
            <el-menu-item index="2-1" @click="linkClass"> 1.一建考试 </el-menu-item>
            <el-menu-item index="2-2" @click="linkClass"> 2.二建考试 </el-menu-item>
            <el-menu-item index="2-3" @click="linkClass"> 3.造价考试 </el-menu-item>
            <el-menu-item index="2-4" @click="linkClass"> 4.行业软件 </el-menu-item>
          </el-submenu>
          <!-- 直播教程 -->
          <el-submenu index="3">
            <template slot="title">
                <i :class="{'el-icon-circle-plus-outline': true, 'el-icon-remove-outline': ico3}"></i>

              <span>直播教程</span>
            </template>
            <el-menu-item index="3-1" @click="linkLive">1.一建考试</el-menu-item>
            <el-menu-item index="3-2" @click="linkLive"> 2.二建考试 </el-menu-item>
            <el-menu-item index="3-3" @click="linkLive">3.工程施工 </el-menu-item>
            <el-menu-item index="3-4" @click="linkLive"> 4 施工管理 </el-menu-item>
            <el-menu-item index="3-5" @click="linkLive"> 5.造价基础 </el-menu-item>
          </el-submenu>

          <el-menu-item index="4">
            <i :class="{'el-icon-circle-plus-outline': true, 'el-icon-remove-outline': ico4}"></i>
            <span slot="title" @click="linkVip">会员专区</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "UniappNavmenu",
  data() {
    return {
        // 记录图标变化
        ico1: false,
        ico2: false,
        ico3: false,
        ico4: false,
        // 地区选择
        options: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value: ''
    };
  },
  methods: {
    handleOpen(key, keyPath) {
        //  控制图标
        let ico = 'ico' + key
        this[ico] = true
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        let ico = 'ico' + key
        this[ico] = false
    },
    // 跳转
    linkBuild() {
      this.$router.push('build')
    },
    linkClass() {
      this.$router.push('class')
    },
    linkLive() {
      this.$router.push('live')
    },
    linkVip() {
      this.$router.push('vip')

    }
  },
};
</script>

<style scoped>
.el-menu {
  width: 245px;
  height: 600px;
  margin-top: 5px;
}
.NavMenu >>> .el-input__inner {
  margin-top: 10px;
  margin-left: 8px;
  width: 220px;
}
</style>
