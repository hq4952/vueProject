//包含所有接口的请求函数 函数在使用ajax发送请求
import ajax from "./ajax.js";
//暴露函数
export function reqLogin(mobile,password){
    return ajax({
        url:"/user/passport/login",
        method:"POST",
        data:{mobile,password}
    })
}
export const getBaseCategoryList = () => ajax.get("/product/getBaseCategoryList")