<template>
  <section class="category">
    <div class="category_content">
      <div class="content_wrap">
        <div class="list_wrap">
          <ul class="category_list">
            <li v-for="(category, index) in categorys" :key="index" :class="currentIndex===index ?'active':''" @click="toggleItem(category,index)">
              <a href="javascript:;">{{category.name}}</a>
            </li>
          </ul>
        </div>
        <div class="item_wrap">
          <div class="category_item">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <li>
                    <a href="javascript:;">
                      <img src="./images/01.jpg" alt />
                    </a>
                  </li>
                </div>
                <div class="swiper-slide">
                  <li>
                    <a href="javascript:;">
                      <img src="./images/2.jpg" alt />
                    </a>
                  </li>
                </div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination"></div>
            </div>
            <ul class="cateList">
              <li class="cateItem" v-for="(item, index) in category.subCateList" :key="index">
                <a href="javascript:;">
                  <div class="cateImgWrapper">
                    <img :src="item.image" alt />
                  </div>
                  <p>{{item.title}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import BScroll from "better-scroll";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data(){
    return {
      category:{},
      currentIndex:0
    }
  },
  computed: {
    ...mapState(["categorys"])
  },
  methods: {
    _initBScroll() {
      const ulList = document.querySelector(".category_list");
      const liList = ulList.children;
      // 遍历
      const height = Array.from(liList).reduce((pre, next) => {
        return next.offsetHeight + pre;
      }, 0);
      ulList.style.height = height + "px";
      new BScroll(".list_wrap", {
        click: true
      });
      new BScroll(".item_wrap", {
        click: true
      });
    },
    toggleItem(category,index){
      this.category = category
      this.currentIndex = index
    }
  },
  mounted() {
    this.category = this.categorys[0]
    // 创建一个swiper对象
    new Swiper(".swiper-container", {
      loop: true, // 可以无缝滑屏
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    // 初始化滑动对象
    this.$nextTick(() => {
      this._initBScroll();
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.category
  width 100%
  height 100%
  background #fff
  .category_content
    height 100%
    .content_wrap
      width 100%
      height 100%
      display flex
      .list_wrap
        width 162px
        height 100%
        overflow hidden
        .category_list
          width 100%
          text-align center
          line-height 50px
          li
            height 75px
            width 100%
            padding-top 30px
            font-size 28px
            color #333333
            &.active
              border-left 6px solid #ab2b2b
      .item_wrap
        width 588px
        height 1200px
        overflow hidden
        .category_item
          height 1500px
          .swiper-container
            width 528px
            height 192px
            margin 30px
            .swiper-wrapper
              width 100%
              height 100%
              .swiper-slide
                width 100%
                height 100%
                li
                  img
                    width 100%
                    height 100%
                    margin-top 30px
            .swiper-pagination
              .swiper-pagination-bullet
                width 40px
                height 4px
                background #fff
                border-radius 10px
          .cateList
            width 528px
            height 648px
            margin 20px 40px
            .cateItem
              width 33%
              height 250px
              float left
              a
                display flex
                flex-direction column
                align-items center
                .cateImgWrapper
                  width 144px
                  height 144px
                  img
                    width 100%
                    height 100%
                p
                  text-align center
                  margin-top 15px
</style>
