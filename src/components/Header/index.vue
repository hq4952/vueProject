<template>
 <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p>
                            <span>请</span>
                            <router-link to="/login">登录</router-link>
                            <router-link to="/register">免费注册</router-link>
                        </p>
                    </div>
                    <div class="typeList">
                        <a href="###">我的订单</a>
                        <a href="###">我的购物车</a>
                        <a href="###">我的尚品汇</a>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <a class="logo" title="尚品汇" href="###" target="_blank">
                        <img src="./images/logo.png" alt="">
                    </a>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword"/>
                        <button class="sui-btn btn-xlarge btn-danger"  @click.prevent="search">搜索</button>
                    </form>
                </div>
            </div>
        </header>
</template>

<script type="text/ecmascript-6">
import VueRouter from "vue-router"
export default {
    data(){
        return {
            keyword:""
        }
    },
    mounted(){
        this.$bus.$on("removekeyword",this.removekeyword)
    },
    methods:{
        search(){
            // this.$router.push(`/search/${this.keyword}?keyword2=${this.keyword.toUpperCase()}`)//字符串方式
            const originPush = VueRouter.prototype.push;
            const originReplace = VueRouter.prototype.replace;

            VueRouter.prototype.push = function(location,onComplete,onAbort){
                if(onComplete === undefined && onAbort === undefined){
                    return originPush.call(this,location).catch(err => {console.log(err)})
                }else{
                    originPush.call(this,location,onComplete,onAbort)
                }
            }
            VueRouter.prototype.replace = function(location,onComplete,onAbort){
                if(onComplete === undefined && onAbort === undefined){
                    return originReplace.call(this,location).catch(err => {console.log(err)})
                }else{
                    originReplace.call(this,location,onComplete,onAbort)
                }
            }
            let location = {
                name:"Search",
                // path:"/search/:keyword"
            }
            //处理原有query参数
            const {query} = this.$route;
            if(query){
                location.query = query
            }
            if(this.keyword.trim()){
                location.params = {keyword:this.keyword};
                // location.query = {keyword2:this.keyword.toUpperCase()}
            }
            //判断是否在search组件 如果是则用replace发送
            if(this.$route.name === "Search"){
                this.$router.replace(location)
            }else{
                this.$router.push(location)

            }
        },
       removekeyword(){
           this.keyword = ""
       }
    }
}
</script>

<style lang='less' scoped>
     .header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }

</style>
