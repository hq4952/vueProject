import Vue from "vue";
import Vuex from "vuex"
import user from "./modules/user.js"
import home from "./modules/home.js"
Vue.use(Vuex);
const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules:{
        user,
        home
    }
})