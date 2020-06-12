import {getBaseCategoryList,getFloorData, getBannersData,getRecommend} from "@/api"
export default {
    state:{
        categoryList:[],
        bannersData:[],
        floorData:[],
        recommendData:[]
    },
    mutations:{
        newlist(state,reslist){
            state.categoryList = reslist
            // console.log(111)
        },
        bnData(state,data){
            state.bannersData = data
            // console.log(111)
        },
        flData(state,data){
            state.floorData = data
            // console.log(222)
        },
        recData(state,data){
            state.recommendData = data
            // console.log(data)
        }
    },
    actions:{
        async reqBaseCategoryList({commit}){
            let res = await getBaseCategoryList()
            if(res.code === 200){
                let reslist = res.data.filter((item,index) => index<15);
                commit("newlist",reslist)

            }
        },
        async reqBannersData({commit}){
            let res = await getBannersData()
            // console.log("hahaha")
            // console.log(res)
            if(res.code === 200){
                // console.log("heiheihei")
                let data = res.data
                commit("bnData",data)

            }
        },
        async reqFloorData({commit}){
            let res = await getFloorData()
            if(res.code === 200){
                let data = res.data
                commit("flData",data)

            }
        },
        async reqRecommend({commit}){
            let res = await getRecommend()

            if(res.code === 200){
                // console.log(res)

                let data = res.data
                commit("recData",data)
            }
        }
    },
    getters:{

    }
}