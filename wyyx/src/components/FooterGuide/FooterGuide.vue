<template>
  <footer class="footer_guide">
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on:'/msite' === $route.path}"
      @click="goTo('/msite' )"
    >
      <span class="item_icon">
        <i class="iconfont icon-shouye1"></i>
      </span>
      <span>首页</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on:'/category' === $route.path}"
      @click="goTo('/category' )"
    >
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on:'/Identifying' === $route.path}"
      @click="goTo('/Identifying' )"
    >
      <span class="item_icon">
        <i class="iconfont icon-neirong"></i>
      </span>
      <span>识物</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on:'/ShoppingCart' === $route.path}"
      @click="goTo('/ShoppingCart' )"
    >
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on:'/profile' === $route.path}"
      @click="goTo('/login' )"
    >
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.footer_guide // footer
  top-border-1px(#e4e4e4)
  position fixed
  z-index 20
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 100px
  display flex
  .guide_item
    display flex
    flex 1
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #b4282d
    span
      font-size 26px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 38px
</style>
