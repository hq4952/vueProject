import Vue from 'vue'
import App from './App.vue'
import router from "../router/index.js"
import listNav from "./components/listNav"
import store from "./vuex/index.js"
Vue.config.productionTip = false
Vue.component("listNav",listNav)
let a = 100;
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
