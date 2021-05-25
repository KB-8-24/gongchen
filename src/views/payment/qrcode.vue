<template>
    <div class="qrcode">
        <p class="clear-fix">
            <span class="left">订单提交成功，请尽快付款！订单号：302022090780839936</span>
            <span class="right">应付金额： <i style="color: #FD3E3E; font-size: 20px;"> 2299.00</i> 元</span>
        </p>
        <div class="box">
            <h3>{{payment}}</h3>
            <div class="code">
                <img src="../../assets/img/home/22222.png" alt="">
                <div class="text">
                    <i></i>
                    <div class="text-i">
                        请使用微信扫一扫 扫描二维码支付
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UniappQrcode',
    data() {
        return {
            payment: null
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
    activated() {
        this.payment = this.$route.params.mode
    }
};
</script>

<style scoped>
    .qrcode {
        width: 1200px;
        margin: auto;
        padding-top: 65px;
    }
    .qrcode p {
        padding: 0 110px;
    }
    .box {
        margin: auto;
        width: 983px;
        height: 540px;
        background-color: #fff;
        margin-top: 37px;
        padding: 15px 32px;
    }
    .code {
        text-align: center;
        margin-top: 15px;
    }
    .text {
        width: 300px;
        height: 60px;
        background-color: #E6E6E6;
        margin: auto;
    }
    .text i {
        display: inline-block;
        width: 41px;
        height: 41px;
        background-image: url(../../assets/img/home/sao.png);
        background-repeat: no-repeat;
        vertical-align: middle;
        margin-right: 23px;
    }
    .text-i {
        width: 128px;
        height: 35px;
        text-align: left;
    }
    .text {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>