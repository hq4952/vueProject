import Vue from 'vue'
import App from './App.vue'
import router from "../router/index.js"
import listNav from "./components/listNav"
import Carousel from "./components/Carousel"
import Pagination from "./components/pagination"
import store from "./vuex/index.js"
import "./mock/mockServer.js"
Vue.config.productionTip = false
Vue.component("listNav",listNav);
Vue.component("Carousel",Carousel)
Vue.component("Pagination",Pagination)
let a = 100;
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
