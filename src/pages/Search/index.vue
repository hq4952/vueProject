<template>
    <div class="main">
            <listNav/>
            <div class="py-container">
                <!--bread-->
                <div class="bread">
                    <ul class="fl sui-breadcrumb">
                        <li>
                            <a href="#">全部结果</a>
                        </li>
                    </ul>
                    <ul class="fl sui-tag">
                        <li class="with-x" v-if="options.categoryName">{{options.categoryName}}<i @click="removeCategory">x</i></li>
                        <li class="with-x" v-if="options.keyword">{{options.keyword}}<i @click="removeKeyword">×</i></li>
                        <li class="with-x" v-if="options.trademark">{{options.trademark}}<i @click="removeTrademark">x</i></li>
                        <li class="with-x" v-for="(item,index) in options.props" :key="index">{{item}}<i @click="removeAttr(index)">x</i></li>
                    </ul>
                </div>
                <!--selector-->
                <Selector :setTrademark="setTrademark" @addProp="addProp"/>
                <!--details-->
                <div class="details clearfix">
                    <div class="sui-navbar">
                        <div class="navbar-inner filter">
                            <ul class="sui-nav">
                                <li :class="{active:isActive('1')}" @click="Rank('1')">
                                    <a href="#">
                                        综合
                                         <i class="iconfont " v-if="options.order.indexOf('1')===0" 
                                         :class="options.order.split(':')[1] === 'desc'? 'icon-xiajiantou':'icon-shangjiantou'"></i>
                                        
                                    </a>
                                </li>
                                <li>
                                    <a href="#">销量</a>
                                </li>
                                <li>
                                    <a href="#">新品</a>
                                </li>
                                <li>
                                    <a href="#">评价</a>
                                </li>
                                <li :class="{active:isActive('2')}" @click="Rank('2')">
                                    <a href="#">
                                        价格
                                        <i class="iconfont" v-if="options.order.indexOf('2') === 0" 
                                        :class="options.order.split(':')[1] === 'desc'? 'icon-xiajiantou':'icon-shangjiantou'"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="goods-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-5" v-for=" item in goodsList" :key="item.id">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <!-- 点击跳转详情页 -->
                                        <router-link :to="`/detail/${item.id}`"><img :src="item.defaultImg" /></router-link>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>{{item.price}}</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <!-- 点击跳转详情页 -->
                                        <router-link :to="`/detail/${item.id}`"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">{{item.title}}</router-link>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                         
                        </ul>
                    </div>
                    <!-- pagination -->
                    <!-- 分页组件  -->
                    <Pagination :currentPage="options.pageNo" :pageSize="options.pageSize"
                     :total="total" :showPageNo="3" @handleUpdatePage="handleUpdatePage"/>
                </div>
                <!--hotsale-->
                <div class="clearfix hot-sale">
                    <h4 class="title">热卖商品</h4>
                    <div class="hot-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="/images/like_01.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="/images/like_03.png" />
                                    </div>
                                    <div class="attr">
                                        <em>金属A面，360°翻转，APP下单省300！</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="/images/like_04.png" />
                                    </div>
                                    <div class="attr">
                                        <em>256SSD商务大咖，完爆职场，APP下单立减200</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4068.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有20人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="/images/like_02.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Selector from "./selector"
//复用组件采用全局注册
// import Pagination from "./pagination"
import {mapGetters} from "vuex"
export default {
    data(){
        return {
            options:{
                category1Id:"",
                category2Id:"",
                category3Id:"",
                categoryName:"",
                keyword:"",
                props:[],
                // trademark:"",
                order:"2:desc",
                pageNo:1,
                pageSize:2
            }
        }
    },
    beforeMount(){
        this.updateRoute()
    },
    components:{
        Selector,
        //复用组件采用全局注册
        // Pagination
    },
    mounted(){
        this.$store.dispatch("reqSearchData",this.options)
    },
    computed:{
        ...mapGetters(["attrs","trademarkList","goodsList","total"])
    },
    methods:{
        //封装更新参数函数
        updateRoute(){
            const {categoryname="",category1Id="",category2Id="",category3Id=""} = this.$route.query
            const {keyword=""} = this.$route.params
            this.options = {
                ...this.options,
                category1Id,
                category2Id,
                category3Id,
                categoryName:categoryname,
                keyword
            }
        },
        //定义移出属性的函数
        removeAttr(index){
            this.options.props.splice(index,1)
            this.getProductsList()
        },
        //定义移出品牌的函数
        removeTrademark(){
            this.options.trademark = "";
            this.getProductsList()
        },
        //定义
        removeCategory(){
            this.options.categoryName = ""
            this.$router.replace({name:"Search",params:this.$route.params})
        },
        removeKeyword(){
            this.options.keyword = ""
            this.$router.replace({name:"Search",query:this.$route.query});
            this.$bus.$emit("removekeyword")
        },
        //封装请求函数
        //默认请求第一页数据
        getProductsList(pageNo=1){
            
            this.options.pageNo = pageNo
            this.$store.dispatch("reqSearchData",this.options)
        },
        //动态类名控制样式
        isActive(falg){
            return this.options.order.indexOf(falg) === 0
        },
        //设置控制trademark函数
        setTrademark(trademark){
            //如果重复请求则直接返回
            if(trademark === this.options.trademark) return
            //修改data中已有的trademark属性可以自动更新界面  如果使用这种方法添加新属性则不会自动更新界面
            // this.options.trademark = trademark;
            //使用$set方法添加新属性才可以更新界面
            this.$set(this.options,"trademark",trademark)
            //更新数据后重新发送请求
            this.getProductsList()
        },
        //定义添加属性函数
        addProp(str){
            //如果重复选择 直接返回
            if(this.options.props.indexOf(str) >= 0) return
            this.options.props.push(str);
            this.getProductsList()
        },
        //定义排序函数
        Rank(falg){
            let arr = this.options.order.split(':');
            if(arr[0] === falg){
                arr[1] = arr[1] === "desc" ? "asc" : "desc"
            }else{
                arr[0] = falg;
                arr[1] = "desc"
            }
            // if(arr[0] === "2"){
            //     if(arr[1] === "desc"){
            //         arr[1] = "asc"
            //     }else{
            //         arr[1] = "desc"
            //     }                
            // }else{
            //     arr[0] = "2";
            //     arr[1] = "desc"
            // }
            this.options.order = arr.join(":")
            this.getProductsList()
        },
        //定义处理更新pagination页码界面函数
        handleUpdatePage(num){
            //将需要显示的页码更新为点击的页码
            // this.options.pageNo = num
            //重新发送请求
            this.getProductsList(num)
        }
    },
    watch:{
        //监视路由变化时 更新数据并发送请求
        $route(){
            this.updateRoute()
            this.getProductsList()
        }
    }
}
</script>


<style lang='less' scoped>


</style>
