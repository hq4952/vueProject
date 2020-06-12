<template>
    <div class="clearfix selector">
        <div class="type-wrap logo">
            <div class="fl key brand">品牌</div>
            <div class="value logos">
                <ul class="logo-list">
                    <li v-for="item in trademarkList" :key="item.tmId" @click="setTrademark(`${item.tmId}:${item.tmName}`)">{{item.tmName}}</li>
                </ul>
            </div>
            <div class="ext">
                <a href="javascript:void(0);" class="sui-btn">多选</a>
                <a href="javascript:void(0);">更多</a>
            </div>
        </div>
        <div class="type-wrap" v-for="item in attrs" :key="item.attrId">
            <div class="fl key">{{item.attrName}}</div>
            <div class="fl value">
                <ul class="type-list">
                    <li v-for=" (item2,index) in item.attrValueList" :key="index">
                        <a href="#" @click="addprop(`${item.attrId}:${item2}:${item.attrName}`)">{{item2}}</a>
                    </li>
                   
                </ul>
            </div>
            <div class="fl ext"></div>
        </div>
        
    </div>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from "vuex"
export default {
    props:{
        setTrademark:Function
    },
    computed:{
        ...mapGetters(["trademarkList","attrs"])
    },
    methods:{
        addprop(str){

            this.$emit("addProp",str)
        }
    }
}
</script>

<style lang='less' scoped>


</style>
