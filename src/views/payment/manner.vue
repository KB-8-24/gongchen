<template>
    <div class="manner">
        <h3>订单支付</h3>
        <div class="manner-box">
            <div class="top">
                <h2>订单已生成，只差最后一步就能学到新知识啦！</h2>
                <span>应付金额：<i> ￥2299.00</i></span>
                <span>请 <i style="font-size: 16px;">00:29:56</i> 内完成付款</span>
            </div>
            <div class="bottom">
                <p>
                   <span style="font-size: 16px;">请选择付款方式 </span> <span class="hui">有疑问？</span> <span>人工咨询></span>
                </p>
                <div class="bottom-sub">
                    <router-link to="/home/qrcode">
                        <div class="zfb">支付宝支付</div>
                    </router-link>
                    <router-link to="/home/qrcode">
                        <div class="wx">微信支付</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UniappManner',
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style scoped>
    .manner {
        width: 1200px;
        margin: auto;
        padding: 17px 0;
    }
    .manner-box {
        width: 100%;
        height: 506px;
        background-color: #fff;
        margin-top: 20px;
    }
    .top {
        text-align: center;
        padding: 97px 0 163px;
        border-bottom: 1px solid #E5E5E5;
    }
    .top i {
        font-size: 20px;
        color: #EC2808;
    }
    .top h2 {
        margin-bottom: 24px;
    }
    .bottom p {
        padding: 63px 0 43px;
        text-align: center;
        margin-left: 10px;
    }
    .bottom  span:nth-child(1) {
        padding: 0 17px 0 26px;
    }
    .hui {
        color: #333;
        font-size: 14px;
    }
    .bottom p span:nth-child(3) {
        color: #0084FF;
    }
    .zfb,
    .wx {
        width: 200px;
        height: 48px;
        margin-right: 24px;
        font-size: 20px;
        text-align: center;
        line-height: 48px;
        border: 1px solid #ccc;
    }
    .bottom-sub {
        display: flex;
        justify-content: center;
    }
    .zfb::before{
        display: inline-block;
        content: '';
        width: 33px;
        height: 33px;
        background-image: url(../../assets/img/home/zhifubao.png);
        background-size: 33px 33px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .wx::before{
        display: inline-block;
        content: '';
        width: 33px;
        height: 33px;
        background-image: url(../../assets/img/home/wx.png);
        background-size: 33px 33px;
        vertical-align: middle;
        margin-right: 5px;
    }
</style>