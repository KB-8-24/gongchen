import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home/build'
  },
  // 登录
  {
    path: '/login',
    component: () => import('../views/login.vue')
  },
  // 注册
  {
    path: '/register',
    component: () => import('../views/register.vue')
  },
  // 修改密码
  {
    path: '/password',
    component: () => import('../views/password.vue')
  },

  // 首页
  {
    path: '/home',
    component: () => import('../views/home/home.vue'),
    // component: () => import('../views/home/homeBuild.vue'),

    children: [
      // 施工管理
      {
        path: 'build',
        component: () => import('../views/home/homeBuild.vue'),
      },

      // 课程分类
      {
        path: 'class',
        component: () => import('../views/home/homeClass.vue'),
      },
      // 直播课程
      {
        path: 'live',
        component: () => import('../views/home/homeLive.vue'),
      },
      // 会员专区
      {
        path: 'vip',
        component: () => import('../views/home/homeVip.vue'),
      },
      // 信息价
      {
        path: 'information',
        component: () => import('../views/information.vue')
      },
      // 价格查询
      {
        path: 'inquire',
        component: () => import('../views/inquire.vue')
      },
      // 市场价
      {
        path: 'bazaar',
        component: () => import('../views/bazaar.vue')
      },
      // 材料库存
      {
        path: 'depot',
        component: () => import('../views/depot.vue')
      },
      // 课堂
      {
        path: 'classroom',
        component: () => import('../views/classroom.vue')
      },
      // 商城
      {
        path: 'shopping',
        component: () => import('../views/shopping.vue')
      },

      // 详情页
      {
        path: 'details',
        component: () => import('../views/detailsPage.vue')
      },
      // 提交
      {
        path: 'submit',
        component: () => import('../views/payment/submit.vue')
      },
      // 支付方式
      {
        path: 'manner',
        component: () => import('../views/payment/manner.vue')
      },
      // 扫码
      {
        path: 'qrcode',
        component: () => import('../views/payment/qrcode.vue')
      },

    ]
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router