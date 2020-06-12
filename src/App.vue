<template>
  <div class="outer">
    <Header/>
    <router-view/>
    <Footer />
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./components/Header/index.vue"
import Footer from "./components/Footer/index.vue"
import {reqLogin,getBaseCategoryList} from "./api"
export default {
  name:"App",
  components:{
    Header,
    Footer
  },
  //在app挂载完成发请求即可
  mounted(){
    this.$store.dispatch("reqBaseCategoryList");
  }
  // async mounted(){
  //   const res = await getBaseCategoryList()
  //   console.log("res:",res)
  // }
}
</script>

<style lang='less' scoped>


</style>
