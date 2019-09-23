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
          <span @click="$router.push('/search')">
            <i class="iconfont icon-sousuo1"></i>
          </span>
          <span @click="$router.replace('/shoppingCart')">
            <i class="iconfont icon-gouwuche"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="login_content">
      <div class="loginWrap">
        <div class="logo">
          <img src="./images/logo1.png" alt="">
        </div>
        <form class="ursBox">
          <div class="uniteLogin">
            <section class="login_message">
              <input
                type="tel"
                maxlength="11"
                placeholder="请输入手机号"
                v-model="phone"
                name="phone"
                v-validate="'required|phone'"
              />
              <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
            </section>
            <section class="login_verification">
              <input
                type="tel"
                maxlength="8"
                placeholder="请输入短信验证码"
                v-model="code"
                name="code"
                v-validate="'required|code'"
              />
              <span style="color: red;" v-show="errors.has('code')">{{ errors.first('code') }}</span>
              <button class="get_verification">获取验证码</button>
            </section>
            <section class="login_hint">
              遇到问题？
              <a href="javascript:;">使用密码验证登录</a>
            </section>
          </div>
          <div class="login_submit">
            <button>登录</button>
          </div>
          <div class="agree">
            <span class="agree-select">
              <input type="checkbox">
            </span>
            <div class="fur-agree">
              <span>我同意</span>
              <a href="javascript:;">《服务条款》</a>
              <span>和</span>
              <a href="javascript:;">《网易隐私政策》</a>
            </div>
          </div>
        </form>
        <div class="foot">
          <p class="text">
            <span>其他登录方式</span>
            <span><i class="iconfont icon-gengduo1"></i></span>
          </p>
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
  background #fff
  .login_header
    width 100%
    height 186px
    background #f2f5f4
    border-bottom 1px solid #d9d9d9
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
        img
          width 150px
          height 55px
          margin-left 40px
      .right
        .iconfont
          font-size 48px
          &.icon-gouwuche
            font-size 60px
            margin 0 20px
  .login_content
    width 100%
    height 750px
    position relative
    .loginWrap
      width 100%
      height 700px
      position absolute
      top 60px
      .logo
        width 100%
        height 64px
        line-height 64px
        text-align center
        margin-bottom 60px
        img
          width 192px
          height 64px
      .ursBox
        width 100%
        height 466px
        margin-bottom 40px
        .uniteLogin
          width 90%
          height 316px
          margin 0 auto
          section
            width 100%
            height 92px
            border-bottom 1px solid #d9d9d9
            line-height 92px
            margin-top 30px
            color #666
            font-size 30px
            &.login_hint
              border 0
              font-size 28px
              a 
                float right
            input 
              outline none
            button
              float right
              margin-top 15px
              background #ffffff
              color #333
              width 176px
              height 64px
              border-radius 10px
              font-size 28px
        .login_submit
          width 90%
          height 92px
          margin 20px auto
          button  
            width 100%
            height 100%
            background #dd1a21
            color #fff
        .agree
          width 90%
          height 48px
          margin 0 auto
          display flex
          .fur-agree
            margin-left 10px
            a 
              color #007aff
              font-size 24px
              margin 0 10px
      .foot
        width 100%
        height 38px
        .text
          width 100%
          height 100%
          text-align center
          line-height 38px
          color #333
          font-size 28px
</style>
