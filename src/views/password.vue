<template>
    <div class="password">
        <navHeader></navHeader>
        <div class="password">
            <form action="">
                <h2>找回密码</h2>
                <ul>
                    <li>
                        <span class="left">手机号码：</span>
                        <div class="input left">
                            <input type="text" placeholder="手机号码">
                        </div>
                    </li>
                    <li>
                        <span class="left">手机验证码：</span>
                        <div class="input left verify">
                            <input type="text">

                        </div>
                        <button class="left">获取验证码</button>

                    </li>
                    <li>
                        <span class="left">新密码：</span>
                        <div class="input left">
                            <input type="password" name="" id="" placeholder="新密码">
                        </div>

                    </li>
                    <li>
                        <button>确定</button>
                    </li>
                </ul>
            </form>
        </div>
        <navFooter></navFooter>    
    </div>
</template>

<script>
import navHeader from '../components/common/navHeader';
import navFooter from '../components/common/navFooter';

export default {
    name: 'UniappPassword',
    components: {
        navHeader,
        navFooter
    },
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
    .password form {
        width: 750px;
        height: 348px;
        background-color: #fff;
        margin: 167px auto 200px;
        font-weight: 400;
    }
    h2 {
        padding-left: 17px;
        padding-top: 21px;
        padding-bottom: 67px;
    }
    ul li {
        width: 415px;
        margin: auto;
        margin-bottom: 16px;
        overflow: hidden;
    }
    ul li span {
        display: inline-block;
        width: 90px;
        height: 39px;
        font-size: 15px;
        color: #333;
        text-align: right;
        line-height: 39px;
    }
    .input {
        width: 305px;
        height: 39px;
        border: 1px solid #E5E5E5;
        margin-left: 13.5px;
    }
    button {
        border: 0;
        outline: none;
        width: 306px;
        height: 40px;
        background-color: #3579FA;
        cursor: pointer;
        color: #fff;
        margin-left: 90px;
    }
    .verify {
        width: 204px;
    }
    button.left {
        width: 94px;
        margin-left: 6.5px;
        font-size: 14px;
    }
    .input input {
        border: 0;
        outline: none;
        height: 39px;
        line-height: 39px;
        padding-left: 13.5px;
    }
</style>