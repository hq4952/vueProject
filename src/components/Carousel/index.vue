<template>
    <div class="swiper-container" id="mySwiper" ref="bannerSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in this.bannerList" :key="banner.id">
                <img :src="banner.imgUrl" />
            </div>
            <!-- <div class="swiper-slide">
                <img src="../images/home/banner2.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="../images/home/banner3.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="../images/home/banner4.jpg" />
            </div> -->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue"
import Swiper from "swiper";
export default {
    props:{
        bannerList:Array
    },
    methods:{
        initSwiper(){
            // 如果初始没有数据就不创建swiper 更新后在创建
            if(this.bannerList.length === 0) return;
             Vue.nextTick(() => {
                    console.log("wodaojiale")
                    new Swiper(this.$refs.bannerSwiper,{
                    loop: true, // 循环模式选项
            
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    
                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    autoplay:true
                })
            })
        }
    },
    // created(){
    //     console.log(this.bannerList)
    // },
    watch:{
        bannerList:{
            // console.log(this.bannerList)
            handler:"initSwiper",
            immediate:true
        }
    }
}
</script>

<style lang='less' scoped>


</style>
