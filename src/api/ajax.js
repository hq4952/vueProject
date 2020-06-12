import axios from "axios";
import Nprogress from "nprogress"
import "nprogress/nprogress.css"
//二次封装axios 
const instence = axios.create({
    //设置基础路径
    baseURL:"/api",
    timeout:10000
})
//设置请求拦截器
instence.interceptors.request.use(config => {
    //请求成功前显示进度条
    Nprogress.start()
    return config
})
instence.interceptors.response.use(res => {
    //请求成功隐藏进度条
    Nprogress.done();
    return res.data
},err => {
    //请求失败也隐藏进度条
    Nprogress.done();
    alert(err.message || "未知错误");
    return Promise.reject(err)
})
export default instence