<template>
  <section class="categoryList">
    <div class="category_header">
      <div class="topSearchIpt" @click="$router.push('/search')">
        <i class="iconfont icon-sousuo1"></i>
        <span class="placeholder">搜索商品, 共22643款好物</span>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.categoryList
  width 100%
  height 100%
  background #fff
  .category_header
    width 100%
    height 88px
    border-bottom 1px solid #d9d9d9
    .topSearchIpt
      width 690px
      height 56px
      background #ededed
      margin 20px auto
      border-radius 12px
      text-align center
      line-height 56px
      color #666
      font-size 28px
</style>
