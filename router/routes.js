import Home from "../src/pages/Home/index.vue"
import Search from "../src/pages/Search/index.vue"
import Login from "@/pages/Login/index.vue"
import Register from "@/pages/Register/index.vue"
export default [
    {
        path:"/",
        component:Home
    },
    {
        name:"Search",
        path:"/search/:keyword?",
        component:Search
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
    }
]