<template>
  <div class="login">
    <div class="login_header">
      <div class="defaultBanner"></div>
      <div class="topBar">
        <a href="javascript:;" class="icon-home" @click="$router.replace('/msite')">
          <span>
            <i class="iconfont icon-shouye1"></i>
          </span>
        </a>
        <a href="javascript:;" class="center">
          <img src="./images/logo.png" alt="">
        </a>
        <a href="javascript:;" class="right">
          <span>
            <i class="iconfont icon-sousuo1"></i>
          </span>
          <span>
            <i class="iconfont icon-gouwuche"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="login_content">
      <div class="loginTypesWrap">
        <div class="cont">
          <div class="logoWrap">
            <img src="./images/logo1.png" alt="">
          </div>
          <div class="btnWrap">
            <div class="button">
              <div class="text">
                <span>
                  <i class="iconfont icon-shouji2"></i>
                </span>
                <span>手机号快捷登录</span>
              </div>
            </div>
            <div class="button button-ghostRed">
              <div class="text">
                <span>
                   <i class="iconfont icon-message"></i>
                </span>
                <span>邮箱帐号登录</span>
              </div>
            </div>
          </div>
        </div>
        <div class="thirdWrap">
          <div class="itemWrap">
            <span>
              <i class="iconfont icon-weixin"></i>
            </span>
            <span>微信</span>
          </div>
          <div class="itemWrap">
            <span>
              <i class="iconfont icon-tencentqq1188698easyiconnet"></i>
            </span>
            <span>QQ</span>
          </div>
          <div class="itemWrap">
            <span>
              <i class="iconfont icon-weibo"></i>
            </span>
            <span>微博</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.login
  width 100%
  height 100%
  background #f2f5f4
  .login_header
    width 100%
    height 186px
    .defaultBanner
      width 100%
      height 98px
      background rgba(0,0,0,.7)
    .topBar
      width 100%
      height 88px
      background #fafafa
      display flex
      justify-content space-between
      align-items center
      color #7f7f7f
      .icon-home
        margin-left 20px
        .icon-shouye1
          font-size 50px
      .center
        text-align center
        img
          width 150px
          height 55px
      .right
        .iconfont
          font-size 48px
          &.icon-gouwuche
            font-size 60px
            margin 0 20px
  .login_content
    .loginTypesWrap
      width 100%
      height 1148px
      position relative
      .cont
        width 100%
        height 700px
        .logoWrap
          width 100%
          height 480px
          text-align center
          line-height 480px
          img
            width 268px
            height 90px
        .btnWrap
          width 100%
          height 218px
          .button
            width 670px
            height 94px
            background #bfa
            margin 0 auto
            background #dd1a21
            .text
              color #ffffff
              text-align center
              line-height 94px
              font-size 28px
              .iconfont
                font-size 40px
            &.button-ghostRed
              margin 30px auto
              background #f2f5f4
              border 1px solid #dd1a21
              .text
                color #dd1a21
      .thirdWrap
        width 100%
        height 40px
        position absolute
        bottom 100px
        display flex
        justify-content space-around
        .itemWrap
          color #7f7f7f
          border-right 1px solid #979797
          font-size 30px
          &:nth-child(1)
            margin-left 150px
            padding-right 20PX
          &:nth-child(2)
            padding-right 20PX
          &:nth-child(3)
            border-right 0
            margin-right 150px
          .iconfont
            font-size 36px
</style>
