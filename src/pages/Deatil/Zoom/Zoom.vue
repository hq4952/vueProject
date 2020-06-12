<template>
  <div class="spec-preview">
    <img :src="skuImgList[currentIndex].imgUrl" v-if="skuImgList[0]"/>
    <div class="event" @mousemove="move"></div>
    <div class="big">
      <img :src="skuImgList[currentIndex].imgUrl" v-if="skuImgList[0]" ref="bigImg"/>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import throttle from "lodash/throttle"
  export default {
    name: "Zoom",
    data(){
      return {
        currentIndex:0
      } 
    },
    computed:{
      ...mapGetters(["skuImgList"])
    },

    mounted(){
      //全局事件订阅 指定函数
      this.$bus.$on("getIndex",this.getIndex)
    },
    methods:{
      getIndex(index){
        this.currentIndex = index        
      },
      move: throttle(function(e){
        const {offsetX,offsetY} = e//取出事件对象中需要的属性
        let left,top
        let mask = document.querySelector(".mask")
        let bigImg = this.$refs.bigImg
        console.log(mask)
        let maskWidth = document.querySelector(".mask").clientWidth//取到mask的宽度
        left = offsetX - maskWidth/2
        top = offsetY - maskWidth/2
        if(left<0){
          left = 0
        }else if(left>maskWidth){
          left = maskWidth
        }
        if(top<0){
          top = 0
        }else if(top > maskWidth){
          top = maskWidth
        }
        mask.style.left = left+"px"
        mask.style.top = top+"px"
        bigImg.style.left = -2*left + "px"
        bigImg.style.top = -2*top +"px"
      },50)
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>