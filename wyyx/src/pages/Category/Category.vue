<template>
  <section class="category">
    <div class="category_header">
      <div class="topSearchIpt">
        <i class="iconfont icon-sousuo1"></i>
        <span class="placeholder">搜索商品, 共22643款好物</span>
      </div>
    </div>
    <div class="category_content">
      <div class="content_wrap">
        <div class="list_wrap">
          <ul class="category_list">
            <li>
              <a href="javascript:;">推荐专区</a>
            </li>
            <li>
              <a href="javascript:;">换季专区</a>
            </li>
            <li>
              <a href="javascript:;">爆品专区</a>
            </li>
            <li>
              <a href="javascript:;">新品专区</a>
            </li>
            <li>
              <a href="javascript:;">居家生活</a>
            </li>
            <li>
              <a href="javascript:;">服饰鞋包</a>
            </li>
            <li>
              <a href="javascript:;">美食酒水</a>
            </li>
            <li>
              <a href="javascript:;">个护清洁</a>
            </li>
            <li>
              <a href="javascript:;">母音亲子</a>
            </li>
            <li>
              <a href="javascript:;">运动旅行</a>
            </li>
            <li>
              <a href="javascript:;">数码家电</a>
            </li>
            <li>
              <a href="javascript:;">全球特色</a>
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
              <li class="cateItem">
                <a href="javascript:;">
                  <div class="cateImgWrapper">
                    <img src="./images/02.png" alt />
                  </div>
                  <p>明星商品</p>
                </a>
              </li>
              <li class="cateItem">
                <a href="javascript:;">
                  <div class="cateImgWrapper">
                    <img src="./images/03.png" alt />
                  </div>
                  <p>精选美食</p>
                </a>
              </li>
              <li class="cateItem">
                <a href="javascript:;">
                  <div class="cateImgWrapper">
                    <img src="./images/04.png" alt />
                  </div>
                  <p>男装</p>
                </a>
              </li>
              <li class="cateItem">
                <a href="javascript:;">
                  <div class="cateImgWrapper">
                    <img src="./images/05.png" alt />
                  </div>
                  <p>员工精选</p>
                </a>
              </li>
              <li class="cateItem">
                <a href="javascript:;">
                  <div class="cateImgWrapper">
                    <img src="./images/06.png" alt />
                  </div>
                  <p>女装</p>
                </a>
              </li>
              <li class="cateItem">
                <a href="javascript:;">
                  <div class="cateImgWrapper">
                    <img src="./images/07.png" alt />
                  </div>
                  <p>秋季换新</p>
                </a>
              </li>
              <li class="cateItem">
                <a href="javascript:;">
                  <div class="cateImgWrapper">
                    <img src="./images/08.png" alt />
                  </div>
                  <p>幸福好物</p>
                </a>
              </li>
              <li class="cateItem">
                <a href="javascript:;">
                  <div class="cateImgWrapper">
                    <img src="./images/09.png" alt />
                  </div>
                  <p>家装好物</p>
                </a>
              </li>
              <li class="cateItem">
                <a href="javascript:;">
                  <div class="cateImgWrapper">
                    <img src="./images/10.png" alt />
                  </div>
                  <p>999好评</p>
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
import BScroll from "better-scroll";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  mounted() {
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
      new BScroll(".list_wrap", {
        click: true
      });
      new BScroll(".item_wrap", {
        click: true
      });
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.category
  width 100%
  height 100%
  background #fff
  .category_header
    width 100%
    height 88px
    border-bottom 1px solid #d9d9d9
    margin-bottom 30px
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
  .category_content
    border-bottom 1px solid #d9d9d9
    .content_wrap
      width 100%
      height 1100px
      display flex
      .list_wrap
        width 162px
        height 1100px
        overflow hidden
        .category_list
          text-align center
          line-height 50px
          li
            height 75px
            width 100%
            margin-top 30px
            font-size 28px
            color #333333
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
