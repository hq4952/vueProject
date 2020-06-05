import Home from "../src/pages/Home/index.vue"
import Search from "../src/pages/Search/index.vue"
import Login from "../src/pages/Login/index.vue"
import Register from "../src/pages/Register/index.vue"
export default [
    {
        path:"/",
        component:Home
    },
    {
        path:"/search",
        component:Search
    },
    {
        path:"/Login",
        component:Login
    },
    {
        path:"/register",
        component:Register
    }
]