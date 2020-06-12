import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
Vue.use(VueRouter)
export default new VueRouter({
    routes,
    mode:"history",
    //跳转路由时回到页面顶端
    scrollBehavior(to,from,savePosition){
        return {x:0,y:0}
    }
})