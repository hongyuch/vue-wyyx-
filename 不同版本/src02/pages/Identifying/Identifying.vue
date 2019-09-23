<template>
  <div class="identifying">
    <div class="identifying_header">
      <div class="topBar">
        <a href="javascript:;" class="icon-home" @click="$router.replace('/msite')">
          <span>
            <i class="iconfont icon-shouye1"></i>
          </span>
        </a>
        <div class="head-tab">
          <a href="javascript:;" class="item active" :class="isSelect ? 'active' : ''">发现</a>
          <a href="javascript:;" class="item" :class="!isSelect? 'active' : ''" @click="toSelect">甄选家</a>
        </div>
        <a href="javascript:;" class="right">
          <span @click="$router.push('/search')">
            <i class="iconfont icon-sousuo1"></i>
          </span>
          <span>
            <i class="iconfont icon-gouwuche"></i>
          </span>
        </a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isSelect:true
    }
  },
  methods: {
    toSelect(){
      this.isSelect = false
      this.$router.replace('/identifying/select')
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.identifying
  width 100%
  height 100%
  background #f5f5f5
  .identifying_header
    width 100%
    height 100px
    position relative
    top 0
    z-index 20
    .topBar
      width 100%
      height 100px
      background #fafafa
      display flex
      justify-content space-between
      align-items center
      color #7f7f7f
      .icon-home
        margin-left 20px
        .icon-shouye1
          font-size 50px
      .head-tab
        font-size 32px
        color #7f7f7f
        margin 0 auto
        .item
          margin-left 30px
          &.active
            color #b4282d
            font-size 40px
            font-weight bold
      .right
        .iconfont
          font-size 48px
          &.icon-gouwuche
            font-size 60px
            margin 0 20px
</style>
