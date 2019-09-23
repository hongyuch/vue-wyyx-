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
          <a href="javascript:;" class="item active">发现</a>
          <a href="javascript:;" class="item">甄选家</a>
        </div>
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
    <div class="main-tab">
      <ul class="scroll-wrapper">
        <li v-for="(item, index) in scrollList" :key="index">
          <a href="javascript:;">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="identifying_content">
      <div class="content_wrap">
        <div class="module1">
          <img src="./images/01.jpeg" class="img_big" alt />
          <img src="./images/02.jpeg" class="img_small" alt />
        </div>
        <div class="module2">
          <a href="javascript:;">
            <img src="./images/02.jpg" alt />
          </a>
        </div>
        <div class="module3">
          <img src="./images/03.jpeg" alt />
        </div>
        <div class="module4">
          <div class="swiper-container gallery-top">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/toggle01.jpg" alt />
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/toggle02.jpg" alt />
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/toggle01.jpg" alt />
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/toggle02.jpg" alt />
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/toggle01.jpg" alt />
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/toggle02.jpg" alt />
                </a>
              </div>
            </div>
          </div>
          <div class="swiper-container gallery-thumbs">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/toggle02.png" alt />
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/toggle01.png" alt />
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/toggle02.png" alt />
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/toggle01.png" alt />
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/toggle02.png" alt />
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;">
                  <img src="./images/toggle01.png" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="module5">
          <img src="./images/04.jpeg" alt />
        </div>
        <div class="module6">
          <div class="list_wrap">
            <div class="banner">
              <a href="javascript:;">
                <img src="./images/list01.png" alt />
              </a>
            </div>
            <ul class="list">
              <li>
                <a href="javascript:;">
                  <img src="./images/item01.png" alt />
                </a>
                <h3>
                  <a href="javascript:;">越南制造 增压节水柔肤花洒</a>
                </h3>
                <p>
                  <span>￥39</span>
                </p>
              </li>
              <li>
                <a href="javascript:;" class="list_img">
                  <img src="./images/item02.png" alt />
                </a>
                <h3>
                  <a href="javascript:;">越南制造 增压节水柔肤花洒</a>
                </h3>
                <p>
                  <span>￥39</span>
                </p>
              </li>
              <li>
                <a href="javascript:;" class="list_img">
                  <img src="./images/item03.png" alt />
                </a>
                <h3>
                  <a href="javascript:;">越南制造 增压节水柔肤花洒</a>
                </h3>
                <p>
                  <span>￥39</span>
                </p>
              </li>
            </ul>
            <div class="btn">
              <a href="javascript:;">进入专题</a>
            </div>
          </div>
        </div>
        <div class="module6">
          <div class="list_wrap">
            <div class="banner">
              <a href="javascript:;">
                <img src="./images/list02.png" alt />
              </a>
            </div>
            <ul class="list">
              <li>
                <a href="javascript:;">
                  <img src="./images/item01.png" alt />
                </a>
                <h3>
                  <a href="javascript:;">越南制造 增压节水柔肤花洒</a>
                </h3>
                <p>
                  <span>￥39</span>
                </p>
              </li>
              <li>
                <a href="javascript:;" class="list_img">
                  <img src="./images/item02.png" alt />
                </a>
                <h3>
                  <a href="javascript:;">越南制造 增压节水柔肤花洒</a>
                </h3>
                <p>
                  <span>￥39</span>
                </p>
              </li>
              <li>
                <a href="javascript:;" class="list_img">
                  <img src="./images/item03.png" alt />
                </a>
                <h3>
                  <a href="javascript:;">越南制造 增压节水柔肤花洒</a>
                </h3>
                <p>
                  <span>￥39</span>
                </p>
              </li>
            </ul>
            <div class="btn">
              <a href="javascript:;">进入专题</a>
            </div>
          </div>
        </div>
        <div class="module6">
          <div class="list_wrap">
            <div class="banner">
              <a href="javascript:;">
                <img src="./images/list03.png" alt />
              </a>
            </div>
            <ul class="list">
              <li>
                <a href="javascript:;">
                  <img src="./images/item01.png" alt />
                </a>
                <h3>
                  <a href="javascript:;">越南制造 增压节水柔肤花洒</a>
                </h3>
                <p>
                  <span>￥39</span>
                </p>
              </li>
              <li>
                <a href="javascript:;" class="list_img">
                  <img src="./images/item02.png" alt />
                </a>
                <h3>
                  <a href="javascript:;">越南制造 增压节水柔肤花洒</a>
                </h3>
                <p>
                  <span>￥39</span>
                </p>
              </li>
              <li>
                <a href="javascript:;" class="list_img">
                  <img src="./images/item03.png" alt />
                </a>
                <h3>
                  <a href="javascript:;">越南制造 增压节水柔肤花洒</a>
                </h3>
                <p>
                  <span>￥39</span>
                </p>
              </li>
            </ul>
            <div class="btn">
              <a href="javascript:;">进入专题</a>
            </div>
          </div>
        </div>
        <div class="module7">
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
        </div>
        <div class="module8">
          <a href="javascript:;">
            <img src="./images/b01.jpeg" alt />
          </a>
        </div>
        <div class="module9">
          <div class="module9_top">
            <a href="javascript:;">
              <img src="./images/m01.png" alt />
            </a>
          </div>
          <div class="module9_bottom">
            <div class="goodsList">
              <li class="goods">
                <a href="javascript:;" class="goodsUrl">
                  <img src="./images/u1.png" alt />
                </a>
                <div class="info">
                  <p class="name">3kg/1kg 强力去污酵素洗衣液</p>
                  <p class="tags">
                    <span>超值价</span>
                  </p>
                  <p class="price">￥9.9</p>
                  <a href="javascript:;" class="btn">立即抢购</a>
                </div>
              </li>
              <li class="goods">
                <a href="javascript:;" class="goodsUrl">
                  <img src="./images/u1.png" alt />
                </a>
                <div class="info">
                  <p class="name">3kg/1kg 强力去污酵素洗衣液</p>
                  <p class="tags">
                    <span>超值价</span>
                  </p>
                  <p class="price">￥9.9</p>
                  <a href="javascript:;" class="btn">立即抢购</a>
                </div>
              </li>
              <li class="goods">
                <a href="javascript:;" class="goodsUrl">
                  <img src="./images/u1.png" alt />
                </a>
                <div class="info">
                  <p class="name">3kg/1kg 强力去污酵素洗衣液</p>
                  <p class="tags">
                    <span>超值价</span>
                  </p>
                  <p class="price">￥9.9</p>
                  <a href="javascript:;" class="btn">立即抢购</a>
                </div>
              </li>
              <div class="moreBtn">
                <a href="javascript:;">
                  查看更多
                  <i class="iconfont icon-gengduo1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      scrollList: [
        "家装节",
        "推荐",
        "好货内部价",
        "回购榜",
        "晒单",
        "开发者日记",
        "达人",
        "HOME"
      ]
    };
  },
  mounted() {
    // 创建swiper对象
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 6,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      autoplay: true
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 6,
      loop:true,
      loopedSlides: 5,
      autoplay: true,
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    // 初始化滑动对象
    this.$nextTick(() => {
      // 获取ul，li
      const ulNode = document.querySelector(".scroll-wrapper");
      const liNodes = ulNode.children;
      // 遍历li，计算宽度
      const width = Array.from(liNodes).reduce((pre, next) => {
        return next.offsetWidth + pre;
      }, 0);
      ulNode.style.width = width + "px";
      new BScroll(".main-tab", {
        click: true,
        scrollX: true,
        bounce: true
      });
      new BScroll(".identifying_content", {
        click: true,
        bounce: true
      });
    });
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
        text-align center
        .active
          color #b4282d
          font-size 40px
          font-weight bold
      .right
        .iconfont
          font-size 48px
          &.icon-gouwuche
            font-size 60px
            margin 0 20px
  .main-tab
    width 100%
    height 78px
    background #fafafa
    border-top 1px solid #ccc
    overflow hidden
    position relative
    top 0
    z-index 20
    .scroll-wrapper
      height 78px
      li
        float left
        height 78px
        text-align center
        line-height 78px
        padding 0 22px
        color #7f7f7f
        font-size 32px
  .identifying_content
    width 100%
    height 1000px
    .content_wrap
      width 100%
      .module1
        width 100%
        height 370px
        font-size 0
        .img_big
          width 100%
          height 300px
        .img_small
          width 100%
          height 70px
      .module2
        width 100%
        height 345px
        a
          width 100%
          height 345px
          margin 0 10px
          img
            width 100%
            height 345px
      .module3
        width 100%
        height 138px
        img
          width 100%
          height 100%
      .module4
        width 100%
        height 644px
        .gallery-top
          width 95%
          height 410px
          margin 20px auto
          img
            width 100%
            height 100%
        .gallery-thumbs
          width 95%
          height 126px
          margin 0 auto
          background #fff
          position relative
          .swiper-wrapper
            width 95%
            height 80%
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            margin auto
            .swiper-slide
              width 126px
              height 126px
              background #f5f5f5
              margin-right 10px
              a 
                width 126px
                height 126px
                display block
                margin 0 auto
                text-align center
                img 
                  width 100px
                  height 100px
      .module5
        width 100%
        height 148px
        img
          width 100%
          height 100%
      .module6
        width 100%
        height 840px
        position relative
        .list_wrap
          width 92%
          height 660px
          position absolute
          top 0
          left 0
          bottom 0
          right 0
          margin auto
          .banner
            height 320px
            border 10px solid #f5b376
            border-radius 10px 10px 0 0
            img
              width 100%
              height 100%
          .list
            height 310px
            border 10px solid #f5b376
            border-top 0
            border-radius 0 0 10px 10px
            display flex
            li
              width 226px
              height 308px
              box-sizing border-box
              border-right 10px solid #f5b376
              border 15px 15px 0 0
              &:nth-child(3)
                border-right 0
              img
                width 218px
                height 218px
              h3
                margin 15px 0
                text-align center
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                a
                  color #333
                  font-size 15px
              p
                color #c33328
                font-size 15px
                text-align center
          .btn
            width 100%
            height 120px
            a
              display block
              width 270px
              height 60px
              background-color #c5b379
              color #fff
              border-radius 30px
              margin 30px auto
              text-align center
              line-height 60px
      .module7
        width 100%
        height 475px
        padding-top 15px
        margin-top 60px
        background-color #fff
        a
          height 128px
          width 92%
          display block
          background-color #bfa
          margin 15px auto
          border-radius 20px
          a:nth-child(3)
            margin-bottom 0
      .module8
        width 100%
        height 148px
        background-color #ff0
        img
          width 100%
          height 100%
      .module9
        width 100%
        height 595px
        .module9_top
          width 100%
          height 177px
          img
            width 100%
            height 100%
        .module9_bottom
          width 100%
          height 418px
          background-color #95d0a2
          border-radius 0 0 20px 20px
          .goodsList
            width 95%
            height 388px
            margin 0 auto
            padding-top 15px
            display flex
            .goods
              width 200px
              height 388px
              background #fff
              margin-right 12px
              .goodsUrl
                img
                  width 200px
                  height 200px
              .info
                font-size 24px
                text-align center
                .name
                  color #3b3b3b
                  margin-top 10px
                  white-space nowrap
                  overflow hidden
                  text-overflow ellipsis
                .tags
                  color #e36843
                  span
                    display block
                    width 45%
                    height 100%
                    margin 10px auto
                    border 1px solid #e36843
                    padding 5px
                .price
                  color #d83535
                  font-weight bold
                  font-size 30px
                .btn
                  display block
                  width 136px
                  height 38px
                  line-height 38px
                  margin 10px auto
                  background #dc4516
                  border-radius 20px
                  color #fff
            .moreBtn
              width 88px
              height 388px
              background rgb(15, 121, 161)
              position relative
              a
                width 60px
                height 140px
                position absolute
                top 0
                left 0
                right 0
                bottom 0
                margin auto
                color #fff
                font-size 26px
                line-height 40px
</style>