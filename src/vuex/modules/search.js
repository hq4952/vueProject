import {getSearchList} from "@/api"
const state = {
    products:{
       
    }
}
const mutations = {
    updateProducts(state,newData){
        state.products = newData
    }
}
const actions = {
    async reqSearchData({commit},options){
        Object.keys(options).forEach(key => {
            //将options对象拷贝一份  否则会修改原options的值
            options = {...options}
            //如果请求参数对象中的参数有空串或者空数组 则删除
            if(options[key] === "" || (Array.isArray(options[key]) && options[key].length === 0)){
                delete options[key]
            }
        })
        let res = await getSearchList(options);
        console.log(res)

        if(res.code === 200){

            let newData = res.data;
            commit("updateProducts",newData)
        }
    }
}
const getters = {
    attrs(state){
        return state.products.attrsList
    },
    trademarkList(state){
        return state.products.trademarkList
    },
    goodsList(state){
        return state.products.goodsList
    },
    total(state){
        return state.products.total
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}