import {getBaseCategoryList} from "@/api"
export default {
    state:{
        categoryList:[]
    },
    mutations:{
        newlist(state,reslist){
            state.categoryList = reslist
            console.log(111)
        }
    },
    actions:{
        async reqBaseCategoryList({commit}){
            let res = await getBaseCategoryList()
            if(res.code === 200){
                let reslist = res.data.filter((item,index) => index<15);
                commit("newlist",reslist)

            }
        }
    },
    getters:{

    }
}