<template>
<div>
<h2>Search</h2>
<h3>keyword:{{this.keyword}}</h3>
<h3>keyword2:{{this.keyword2}}</h3>
<listNav/>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    props:["keyword","keyword2"]
}
</script>

<style lang='less' scoped>


</style>
