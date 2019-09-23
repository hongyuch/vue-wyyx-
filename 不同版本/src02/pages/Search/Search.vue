<template>
  <div class="search">
    <div class="search_header">
      <div class="hdWraper">
        <div class="hd">
          <div class="downloadBanner"></div>
          <div class="topBar">
            <div class="bd">
              <form class="searchIpt" action>
                <i class="iconfont icon-sousuo1"></i>
                <input type="search" class="ipt" :placeholder="defaultKeyword.keyword" v-model="keyword" />
              </form>
              <span class="cancel" @click="$router.back()">取消</span>
            </div>
          </div>
        </div>
      </div>
      <div class="searchViews">
        <div class="searchSuggestions" v-show="!keyword">
          <header class="head">
            <h3>热门搜索</h3>
          </header>
          <nav class="list">
            <a
              class="item"
              :class="currentIndex === index ? 'active' : ''"
              href="javascript:;"
              v-for="(item, index) in hotKeywordVOList"
              :key="index"
              @click="toggleClass(index)"
            >{{item.keyword}}</a>
          </nav>
        </div>
        <ul class="searchAutocomplete" v-show="keyword">
          <li v-for="(item, index) in searchContent" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      keyword: "",
      currentIndex:1
    };
  },
  mounted() {
    this.$store.dispatch("getDefaultKeyword")
  },
  computed: {
    ...mapState(["searchContent","hotKeywordVOList","defaultKeyword"])
  },
  methods: {
    toggleClass(index){
      this.currentIndex = index
    }
  },
  watch: {
    keyword(){
      if(this.keyword){
        this.$store.dispatch("getSearchContent",this.keyword)
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.search
  width 100%
  height 100%
  background #eee
  .search_header
    width 100%
    height 595px
    .hdWraper
      width 100%
      height 191px
      background #fff
      .hd
        width 100%
        height 100%
        .downloadBanner
          width 100%
          height 104px
          background rgba(0, 0, 0, 0.7)
        .topBar
          width 100%
          height 88px
          position relative
          .bd
            width 100%
            height 56px
            display flex
            justify-content space-around
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            margin auto
            .searchIpt
              width 82%
              height 56px
              background #eee
              line-height 56px
              text-align center
              .ipt
                width 85%
                height 56px
                background #eee
                float right
                outline none
            .cancel
              width 10%
              height 56px
              line-height 56px
              color #333
              font-size 28px
              float right
    .searchViews
      width 100%
      height 404px
      .searchSuggestions
        height 100%
        width 100%
        background #fff
        .head
          width 90%
          height 90px
          margin 0 auto
          font-size 28px
          color #999
          line-height 90px
        .list
          width 90%
          height 316px
          margin 0 auto
          overflow hidden
          .item
            height 47px
            line-height 47px
            float left
            border 2px solid #999
            color #333
            font-size 24px
            border-radius 4px
            padding 0 10px
            margin 0 30px 30px 0
            &.active
              border 2px solid #b4282d
              color #b4282d
      .searchAutocomplete
        width 100%
        height 180px
        background #fff
        li
          height 90px
          width 95%
          line-height 90px
          border-bottom 1px solid #eee
          margin-left 20px
</style>
