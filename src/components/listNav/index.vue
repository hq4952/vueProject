<template>
    <div class="type-nav">
            <div class="container">
                <button @click="getData">点击获取数据</button>
                <div @mouseleave="hideCategory" @mouseenter="currentIndex = -1">
                    <h2 class="all" @mouseenter="showCategory">全部商品分类</h2>
                    <transition name="ifshow">
                        <div class="sort" v-show="isShowFirst" >
                        <!-- 给共同父元素绑定事件 利用事件冒泡处理 -->
                            <div class="all-sort-list2" @click="search">
                                <div class="item" :class="{item_on:currentIndex === index}" v-for=" (c1,index) in categoryList" 
                                :key="c1.categoryId" @mouseenter="showCategory(index)" > 
                                    <h3>
                                        <!--  @click="search({categoryName:c3.categoryName,category3Id:c3.categoryId})" 
                                        直接给标签绑定事件导致事件太多 所以使用事件委派 给父元素绑定事件 -->
                                        <a href="" :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                                    </h3>
                                    <div class="item-list clearfix">
                                        <div class="subitem">
                                            <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                                <dt>
                                                    <a href="" :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                                                </dt>
                                                <dd>
                                                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                        <a href="" :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                                                    </em>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
                
            </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {mapState,mapMutations,mapActions,mapGetters} from "vuex";
//引入lodash包中的节流函数
import throttle from "lodash/throttle";

export default {
    data(){
        return {
            currentIndex:-2,
            isShowFirst:true
        }
    },
    beforeMount(){
        this.isShowFirst = this.$route.path === "/"
    },
    computed:{
            
        // ...mapState(["categoryList"]) 使用vuex多模块编程 数组中不能直接写名称
        //vuex多模块编程获取组件中数据的两种方式
            ...mapState({
                categoryList1:state => state.home.categoryList
            }),
            categoryList(){
                return this.$store.state.home.categoryList
            }
    },
    methods:{
       
        getData(){
            console.log(this.categoryList)
            console.log(this.$route.path)

        },
        //在listnav组件中发请求会导致多次请求 所以应在app中发请求
        // ...mapActions(["reqBaseCategoryList"]),
        search(event){
            const {categoryname,category1id,category2id,category3id} = event.target.dataset
            //如果点击的不是a标签 则直接返回 否则会报错
            if(!categoryname) return 
            const query = {
                categoryname,
            }
            if(category1id){
                query.category1Id = category1id
            }else if(category2id){
                query.category2Id = category2id
            }else if(category3id){
                query.category3Id = category3id
            }
            // 标签绑定写法
            // if(category1Id){
            //     query.categoryId = category1Id
            // }else if(category2Id){
            //     query.categoryId = category2Id
            // }else if(category3Id){
            //     query.categoryId = category3Id
            // }
            //处理原有的params参数
            const {params} = this.$route;
            const location = {
                name:"Search",
                query,
            }
            if(params){
                // console.log(222)
                location.params = params
            }
            this.$router.push(location)
        },
        hideCategory(){
            this.currentIndex = -2;
            if(this.$route.path !== "/"){
                this.isShowFirst = false
            }
        },
        showCategory:throttle(function(index){
            if(this.currentIndex !== -2){
                this.isShowFirst = true
                this.currentIndex = index
            }
        },300)
    },
    mounted(){
        // this.$store.dispatch("reqBaseCategoryList");
        //在listnav组件中发请求会导致多次请求 所以应在app中发请求

        // this.reqBaseCategoryList()
    }
}
</script>

<style lang='less' scoped>
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;
            

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort { 
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;
                &.ifshow-enter,&.ifshow-leave-to{
                    opacity: 0;
                    height: 0px;
                }
                &.ifshow-leave-active,&.ifshow-enter-active{
                    transition: all .5s;
                }

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &.item_on {
                            background-color: #ccc;
                            .item-list {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }

</style>
