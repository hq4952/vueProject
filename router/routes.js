import Home from "../src/pages/Home/index.vue"
import Search from "../src/pages/Search/index.vue"
import Login from "@/pages/Login/index.vue"
import Register from "@/pages/Register/index.vue"
import Detail from "../src/pages/Deatil/index.vue"
export default [
    {
        path:"/",
        component:Home
    },
    {
        name:"Search",
        path:"/search/:keyword?",
        component:Search,
        props(route){
            return {
                keyword:route.params.keyword,
                keyword2:route.query.keyword2
            }
        }
    },
    
    {
        path:"/Login",
        component:Login,
        meta:{
            isHideFooter: true
        } 
    },
    {
        path:"/register",
        component:Register,
        meta:{
            isHideFooter: true
        } 
    },
    {
        path:"/detail/:id?",
        component:Detail
    }
]