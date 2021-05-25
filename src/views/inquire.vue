<template>
  <div class="inquire">
    <div class="content">
      <!-- 搜索 -->
      <div class="query">
          <input type="text" placeholder="查询">
          <button>
              <div class="ico"></div>
          </button>
      </div>
      <!-- 表单展示 -->
      <div class="table">
        <table>
            <tr>
                <th>日期</th>
                <th>货物名称</th>
                <th>入库数量</th>
                <th>金额</th>
                <th>出库数量</th>
                <th>金额</th>
                <th>领料人</th>
              </tr>
              <tr>
                <td>日期</td>
                <td>货物名称</td>
                <td>入库数量</td>
                <td>金额</td>
                <td>出库数量</td>
                <td>金额</td>
                <td>领料人</td>
              </tr>
              <tr>
                <td>日期</td>
                <td>货物名称</td>
                <td>入库数量</td>
                <td>金额</td>
                <td>出库数量</td>
                <td>金额</td>
                <td>领料人</td>
              </tr>
              <tr>
                <td>日期</td>
                <td>货物名称</td>
                <td>入库数量</td>
                <td>金额</td>
                <td>出库数量</td>
                <td>金额</td>
                <td>领料人</td>
              </tr>
              <tr>
                <td>日期</td>
                <td>货物名称</td>
                <td>入库数量</td>
                <td>金额</td>
                <td>出库数量</td>
                <td>金额</td>
                <td>领料人</td>
              </tr>
                </table>

      </div>
    <!-- 页码 -->
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="30">
      </el-pagination>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "UniappInquire",
};
</script>

<style scoped>
.content {
  width: 1200px;
  height: 650px;
  justify-content: center;
  overflow: hidden;
  margin: auto;
}
.query {
    width: 629px;
    height: 51px;
    background-color: #fff;
    margin: 41px auto 36px;
}
.query input {
    height: 51px;
    width: 556px;
    vertical-align: top;
    padding-left: 21px;
}
.query button {
    width: 73px;
    height: 51px;
    background-color: #4B84FA;
}
.ico {
    width: 33px;
    height: 33px;
    margin: auto;
    background-image: url(../assets/img/home/sousuo.png);
}
.table {
    width: 100%;
}
table {
    width: 100%;
    font-size: 18px;
    border-spacing: 0;
    text-align: center;

}
table th {
    color: #fff;
    background-color: #4B84FA;
    height: 56px;
}
table td {
    height: 56px;
    background-color: #fff;
    border-bottom: 1px solid #F4F4F4;
}
.pagenumber {
  display: flex;
  height: 41px;
  margin-top: 59px;
  justify-content: center;
}
.pagenumber span {
  text-align: center;
  float: left;
  display: block;
  width: 61px;
  height: 41px;
  line-height: 41px;
  background-color: #fff;
  margin: 0 8px;
  border: 1px solid #ccc;
}
.pagenumber .currentColor {
  background-color: #3579FA;
  color: #fff;
}
.page {
    display: flex;
    justify-content: center;
    margin-top: 60px;
}
.inquire >>> .el-pager li {
    width: 60px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
}
.inquire >>> .btn-next, .inquire >>> .btn-prev{
    width: 60px;
    height: 40px;
    background-color: #fff;
}
</style>
