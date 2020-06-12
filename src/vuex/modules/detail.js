import {getGoodsInfo} from "@/api"
const state = {
    goodsInfo:{}
}
const actions = {
    async reqGoodsInfo({commit},id){
        let res = await getGoodsInfo(id);
        // console.log(res)
        if(res.code === 200){
            let data = res.data
            commit("updateGoodsInfo",data)
        }
    }
}
const mutations = {
    updateGoodsInfo(state,data){
        state.goodsInfo = data
    }
}
const getters = {
    //包含三个分类名称的对象
    categoryView(state){
        return state.goodsInfo.categoryView ? state.goodsInfo.categoryView : {}
    },
    //包含商品名称详情的对象
    skuInfo(state){
        return state.goodsInfo.skuInfo ? state.goodsInfo.skuInfo : {}
    },
    skuImgList(state){
        const skuInfo = state.goodsInfo.skuInfo
        return skuInfo ? skuInfo.skuImageList : []
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}