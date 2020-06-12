//包含所有接口的请求函数 函数在使用ajax发送请求
import ajax from "./ajax.js";
import mock from "./mock.js"
//暴露登录函数
export function reqLogin(mobile,password){
    return ajax({
        url:"/user/passport/login",
        method:"POST",
        data:{mobile,password}
    })
}
//暴露获取三级分类导航数据函数
export const getBaseCategoryList = () => ajax.get("/product/getBaseCategoryList")
export const getSearchList = (option) => ajax.post("/list",option)
//暴露
export const getBannersData = () => mock("/banners")
export const getGoodsInfo = (skuId) => ajax.get(`/item/${skuId}`)
export const getFloorData = () => mock("/floor")
export const getRecommend = () => mock("/recommend")