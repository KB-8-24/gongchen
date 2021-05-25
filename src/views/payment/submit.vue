
<template>
    <div class="submit">
        <p>首页>订单</p>
        <div class="submit-box">
            <p>使用优惠劵 <span style="color: #EC2808;">每笔订单只能使用1张优惠劵</span></p>
            <p>暂无可用优惠劵</p>
            <p>优惠劵：￥0，  实付总额：<span class="money">￥2299</span></p>
            <router-link to="/home/manner">
                <el-button type="primary" class="submit-btn">提交订单</el-button>
            </router-link>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'UniappManner',
    components: {  },
    directives: {  },
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
    .submit {
        width: 1200px;
        margin: auto;
        margin-bottom: 346px;
    }
    .submit-box {
        width: 100%;
        height: 308px;
        background-color: #fff;
        padding: 0 30px;
    }
    .submit p {
        padding: 25px 0 26px;
    }
    .submit-box p:nth-child(2) {
        color: #999;
        padding-bottom: 30px;
        border-bottom: 1px solid #ccc;
    }
    .submit-box p:nth-child(3) {
        color: #999;
        padding-bottom: 30px;
        text-align:  right;
    }
    .money {
        color: #EC2808;
        font-size: 20px;
    }
    .submit-btn {
        float: right;
        width: 150px;
        height: 46px;
        background-color: #EC2808;
        border: 0;
    }
</style>