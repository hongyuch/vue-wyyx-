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
import {reqPwdLogin,reqPhoneLogin } from "./api";
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  async mounted() {
    this.$store.dispatch('getKingkongs')
    this.$store.dispatch('getShopGuides')
    this.$store.dispatch('getCategorys')
    const result1 = await reqPhoneLogin("18310277830","466382");
      if (result1.code === 0) {
        console.log(result1.datas)
      }
     const result2 = await reqPwdLogin( "1234@qq.com","131415");
        if (result2.code === 1) {
          console.log(result2.datas)
        } 
  },
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
