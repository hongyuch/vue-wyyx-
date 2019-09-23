<template>
  <div class="shop">
    <div class="shopCart_header">
      <span>购物车</span>
      <a href="javascript:;" @click="$router.replace('/profile')">领券</a>
    </div>
    <ul class="servicePolicy">
      <li>
        <span>
          <i class="iconfont icon-servicewuyoutuihuanhuo"></i>
        </span>
        <span>30天无忧退货</span>
      </li>
      <li>
        <span>
          <i class="iconfont icon-serviceqitiantuihuan"></i>
        </span>
        <span>48小时快速退款</span>
      </li>
      <li>
        <span>
          <i class="iconfont icon-servicezhengpinbaozhang"></i>
        </span>
        <span>满88包邮</span>
      </li>
    </ul>
    <div class="shopCart_content">
      <div class="img_container">
        <div class="img"></div>
        <div class="txt">
          <p>去添加点什么吧</p>
          <div class="noCart-btn" @click="$router.replace('/profile')">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shop
  width 100%
  height 100%
  background #f5f5f5
  .shopCart_header
    width 100%
    height 88px
    line-height 88px
    display flex
    justify-content space-between
    background #fff
    span
      font-size 36px
      color #333
      margin-left 25px
    a
      font-size 30px
      color #b4282d
      margin-right 35px
  .servicePolicy
    width 100%
    height 70px
    background #eeeeee
    display flex
    justify-content space-around
    line-height 70px
  .shopCart_content
    position relative
    .img_container
      width 100%
      height 300px
      position absolute
      top 350px
      .img
        width 248px
        height 248px
        position absolute
        right 0
        left 0
        bottom 0
        top 0
        margin auto
        background-size 248px
        background-image url('./images/bgimg.png')
        background-position center center
        background-repeat no-repeat
      .txt
        width 100%
        height 169px
        position absolute
        top 260px
        p
          text-align center
          font-size 28px
          color #999
        .noCart-btn
          width 480px
          height 92px
          background #b4282d
          color #ffffff
          font-size 30px
          text-align center
          line-height 92px
          margin 50px auto
          border-radius 10px
</style>
