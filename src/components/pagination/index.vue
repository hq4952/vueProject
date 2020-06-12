<template>
  <div class="pagination">
      <!-- 当前页为1时上一页不能点击 -->
    <button :disabled="myCurrentPage === 1" @click="updateCurrentPage(myCurrentPage-1)">上一页</button>
    <!-- 当连续页码开始值大于1时才显示这个1 不然会重复 -->
    <button v-if="startEnd.start>1" @click="updateCurrentPage(1)">1</button>
    <button disabled v-if="startEnd.start>2">•••</button>
    <!-- 连续页码 -->
    <button v-for="num in startEnd.end" :key="num" 
            v-if="num>=startEnd.start" @click="updateCurrentPage(num)" :class="{active:num === myCurrentPage}">{{num}}</button>
    
    
    <button disabled v-if="startEnd.end < totalPages-1">•••</button>
    <!-- 当连续页码最大值小于总页码时显示 不然可能重复 -->
    <button v-if="startEnd.end<totalPages" @click="updateCurrentPage(totalPages)">{{totalPages}}</button>
    <!-- 当前页为最后一页时不能操作 -->
    <button :disabled ="myCurrentPage === totalPages" @click="updateCurrentPage(myCurrentPage+1)">下一页</button>
    
    <button style="margin-left: 30px" disabled>共 {{total}} 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props:{
        currentPage:{
            type:Number,
            default:1
        },
        pageSize:{
            type:Number,
            default:5
        },
        total:{
            type:Number,
            default:0
        },
        showPageNo:{
            type:Number,
            default:3
        }
    },
    data(){
        return {
            myCurrentPage:this.currentPage
        }
    },
    methods:{
        updateCurrentPage(num){
            //如果点击相同页码 直接返回
            if(num === this.myCurrentPage) return
            // console.log(num)
            this.myCurrentPage = num
            //更新页码时通知父组件更新相应数据
            this.$emit("handleUpdatePage",num)
        }
    },
    computed:{
        //计算总页码数
        totalPages(){
            const {total,pageSize} = this;
            return Math.ceil(total/pageSize)
        },
        //计算显示连续页码开始和结束值
        startEnd(){
            const {myCurrentPage,showPageNo,totalPages} = this
            let start,end
            start = myCurrentPage - Math.floor(showPageNo/2)
            if(start<1){
                start = 1
            }
            end = start + showPageNo -1
            //如果结束值大于总页码数 进行修正
            if(end > totalPages){
                end = totalPages
                start = end - showPageNo +1
            }
            //如果计算出来的start<1 则进行修正
            if(start<1){
                start = 1
            }            
            return {
                start,
                end
            }
        }
    },
    watch:{
        //监视父组件传入currentPage（主要是父组件搜索条件变化时 默认显示第一页数据 对应的页码也应更为第一页） 更新子组件的当前页码 
        currentPage(val){
            this.myCurrentPage = val
        }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
