<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components:{
    FooterGuide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  position relative
  .content
    width 100%
    height 100%
  .footer
    width 100%
    height 100px
    position absolute
    bottom 0px
</style>
