<template>
  <div class="swiper-container" ref="imgList">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in skuInfo.skuImageList" :key="item.id" @click="passIndex(index)">
        <img :src="item.imgUrl" @click="changeClass(index)" :class="{ active:currentIndex === index}">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  import Swiper from 'swiper'
  export default {
    name: "ImageList",
    data(){
      return {
        currentIndex:0
      }
    },
    computed:{
      ...mapGetters(["skuInfo"])
    },
    methods:{
      changeClass(index){
        this.currentIndex = index
      },
      //全局事件发布 触发订阅函数 传递参数
      passIndex(index){
        this.$bus.$emit("getIndex",index)
      }
    },
    watch:{
      skuInfo : {
        handler(){
          this.$nextTick(() => {
            new Swiper(this.$refs.imgList,{
              navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
              },
              slidesPerView:5,//一次显示的页数
              slidesPerGroup:2//每次翻页数
            })
          })
        },
        immediate:true
      }
    }
  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      // width: 56px;
      // height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;
        margin: 0 auto;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        &:hover {
          border: 2px solid #f60;
          padding: 1px;
        }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>