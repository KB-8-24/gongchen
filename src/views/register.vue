<template>
    <div class="login">
      <!-- 左侧logo -->
      <div class="logo">
        <img
          src="../assets/img/login/c93f2d2a-1f46-441c-94c0-230beb4d669f.png"
          alt=""
        />
      </div>
      <!-- 注册框 -->
      <div class="login-form">
        <!-- 标头 -->
        <div class="title">
          <img src="../assets/img/login/gongceng.png" alt="" />
        </div>
        <!-- 注册内容框 -->
        <div class="input">
          <form action="">
            <div class="user">
              <img src="../assets/img/login/user.png" alt="" />
              <input type="text" placeholder="请输入用户账号" class="ipt"/>
            </div>
  
            <div class="pass">
                <img src="../assets/img/login/mima.png" alt="" />
                <input type="password" placeholder="请输入密码" class="ipt" />
              </div>
              <div class="confirm pass">
                <img src="../assets/img/login/mima.png" alt="" />
                <input type="password" placeholder="请输入确定密码" class="ipt"/>
              </div>
              <!-- 用户协议 -->
              <div class="tcp">
                <input type="checkbox" name="" id="checkbox">
                <span>
                    我已经阅读并同意
                    <a href="">功承人之家用户协议</a>
                    和
                    <a href="">隐私政策</a>
                </span>
              </div>
              <!-- 确定按钮 -->
            <button class="btn">
              立即注册
            </button>
          </form>
        </div>
        <!-- 底部 -->
        <div class="text">
          <div class="register">
            <router-link to="/login"><a href="">我有账号，去登录</a></router-link>
          </div>
        </div>
      </div>
      <!-- 外部链接 -->
      <div class="foot">
        <div class="link">
          <a href="">首页</a> | <a href="">信息价</a> | <a href="">价格查询</a> |
          <a href="">市场化</a> |
          <a href="">企业材料库</a>
        </div>
        <span>公司名公司名公司名公司名公司名公司名公司名公司公司名公司</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
  };
  </script>
  
  <style scoped>
  a {
    text-decoration: none;
  }
  .login {
    display: flex;
    position: fixed;
    overflow: hidden;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/img/login/back.jpg") no-repeat;
    background-size: cover;
    justify-content: center;
    align-items: center;
  }
  .login-form {
    width: 550px;
    height: 641px;
    background-color: #fff;
  }
  .foot {
    position: absolute;
    bottom: 10px;
    font-size: 14px;
    color: #666;
  }
  .link a {
    padding: 10px;
  }
  .link {
    margin-bottom: 10px;
  }
  .title {
    width: 100%;
    padding-bottom: 33px;
    border-bottom: 1px solid #e3e3e3;
  }
  .title img {
    margin-left: 218px;
    margin-top: 67px;
  }
  .user,
  .pass {
    width: 460px;
    height: 58px;
    margin: 33px 45px 0;
    margin-bottom: 33px;
    border: 1px solid #cccccc;
    border-radius: 28px;
    position: relative;
  }
  .btn {
    width: 460px;
    height: 68px;
    margin: 0 45px 32px;
    border-radius: 34px;
    font-size: 16px;
    color: #fff;
    background: linear-gradient(to right, #3a7aff, #3959fc);
    outline: 0;
    cursor: pointer;
    border: 0;
  }
  .password,
  .register {
    font-size: 16px;
  }
  .password {
    float: left;
  }
  .register {
    float: right;
  }
  .text {
    padding: 0 45px;
  }
  form img {
    margin-top: 15px;
    margin-left: 27px;
  }
  .ipt {
    position: absolute;
    height: 25px;
    vertical-align: bottom;
    margin-left: 9px;
    border: 0;
    outline: none;
    top: 15px;
    font-size: 17px;
  }
  .register a {
    color: #395afc;
  }
  .password a {
    color: #999999;
  }
  .logo {
    position: absolute;
    left: 83px;
    top: 81px;
  }
  .foot a {
    color: #666666;
  }
  #checkbox {
      width: 14px;
      height: 14px;
  }
  .tcp span,
  .tcp a {
      font-size: 14px;
  }
  .tcp {
      margin: 0 45px 38px;
  }
  .tcp a {
      color:#3579FA ;
  }
  </style>
