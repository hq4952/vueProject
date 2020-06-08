<template>
    <div>
        <listNav/>
        <!--列表-->
        
        <listContainer/>
        <!--今日推荐-->
        <recommend/>

        <!-- 商品排行 -->
        <rank/>

        <!-- 猜你喜欢 -->
        <like/>

        <!--楼层-->
        <floor/>

        <!--商标-->
        <brand/>
    </div>

</template>

<script type="text/ecmascript-6">
import listContainer from "./listContainer"
import recommend from "./recommend"
import rank from "./rank"
import like from "./like"
import floor from "./floor"
import brand from "./brand"

export default {
    components:{
        listContainer,
        recommend,
        rank,
        like,
        floor,
        brand
    }
}
</script>

<style lang='less' scoped>
    

   

   

   
   

   

   

</style>
