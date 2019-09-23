<template>
  <!--首页-->
  <section class="msite">
    <div class="msite_header">
      <header class="header-top">
        <a href="javascript:;" class="header_login">
          <img src="./images/logo.png" alt />
        </a>
        <div class="topSearchIpt" @click="$router.push('/search')">
          <i class="iconfont icon-sousuo1"></i>
          <span class="placeholder">搜索商品,共22805款好物</span>
        </div>
        <div class="btn" @click="$router.replace('/profile/login')">登录</div>
      </header>
      <div class="nav-wrap">
        <ul class="nav-list" v-show="!isShow">
          <li v-for="(item, index) in listArr" :key="index">{{item}}</li>
        </ul>
        <div class="tabWrap" v-show="isShow">
          <div class="tabAlter">
            <p>全部频道</p>
          </div>
          <div class="moreCate">
            <li
              class="cateTag"
              @click="addClass"
              v-for="(item, index) in listArr"
              :key="index"
            >{{item}}</li>
          </div>
          <div class="mask" v-show="isShow"></div>
        </div>
        <div class="icon" @click="toggle">
          <i class="iconfont" :class="isShow ?'icon-less':'icon-xiala'"></i>
        </div>
      </div>
    </div>
    <div class="msite_containers">
      <div class="msite_wrap">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <li>
                <a href="javascript:;">
                  <img src="./images/first/1.jpg" alt />
                </a>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <a href="javascript:;">
                  <img src="./images/first/2.jpg" alt />
                </a>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <a href="javascript:;">
                  <img src="./images/first/3.jpg" alt />
                </a>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <a href="javascript:;">
                  <img src="./images/first/4.jpg" alt />
                </a>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <a href="javascript:;">
                  <img src="./images/first/1.jpg" alt />
                </a>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <a href="javascript:;">
                  <img src="./images/first/2.jpg" alt />
                </a>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <a href="javascript:;">
                  <img src="./images/first/3.jpg" alt />
                </a>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <a href="javascript:;">
                  <img src="./images/first/4.jpg" alt />
                </a>
              </li>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <ul class="content_grow">
          <li>
            <span>
              <i class="iconfont icon-servicezhengpinbaozhang"></i>
            </span>
            <span>网易自营品牌</span>
          </li>
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
        </ul>
        <div class="content_list">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:;" v-for="(item, index) in kingkongs" :key="index">
                <img :src="item.image" alt />
                <span>{{item.title}}</span>
              </a>
            </div>
          </div>
        </div>
        <div class="content_gif_img">
          <a href="javascript:;">
            <img src="./images/first/nosdn.gif" alt />
          </a>
        </div>
        <div class="shoppingGuide">
          <div class="shoppingGuide_wrap">
            <a
              href="javascript:;"
              class="styleBanner"
              v-for="(item, index) in shopGuides"
              :key="index"
            >
              <div class="styleBanner_top">
                <p class="title">{{item.title}}</p>
                <p class="text">{{item.desc}}</p>
              </div>
              <div class="styleBanner_bottom">
                <img :src="item.image1" alt />
                <img :src="item.image2" alt />
              </div>
            </a>
          </div>
        </div>
        <div class="personalTailor">
          <h2>私人订制</h2>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <li>
                  <a href="javascript:;">
                    <img src="./images/list/lun01.jpg" alt />
                    <p>
                      严选礼品卡 100元面值
                      <span>￥100元</span>
                    </p>
                  </a>
                  <a href="javascript:;">
                    <img src="./images/list/lun02.png" alt />
                    <p>
                      严选礼品卡 100元面值
                      <span>￥100元</span>
                    </p>
                  </a>
                  <a href="javascript:;">
                    <img src="./images/list/lun03.png" alt />
                    <p>
                      严选礼品卡 100元面值
                      <span>￥100元</span>
                    </p>
                  </a>
                </li>
              </div>
              <div class="swiper-slide">
                <li>
                  <a href="javascript:;">
                    <img src="./images/list/lun01.jpg" alt />
                    <p>
                      严选礼品卡 100元面值
                      <span>￥100元</span>
                    </p>
                  </a>
                  <a href="javascript:;">
                    <img src="./images/list/lun02.png" alt />
                    <p>
                      严选礼品卡 100元面值
                      <span>￥100元</span>
                    </p>
                  </a>
                  <a href="javascript:;">
                    <img src="./images/list/lun03.png" alt />
                    <p>
                      严选礼品卡 100元面值
                      <span>￥100元</span>
                    </p>
                  </a>
                </li>
              </div>
              <div class="swiper-slide">
                <li>
                  <a href="javascript:;">
                    <img src="./images/list/lun01.jpg" alt />
                    <p>
                      严选礼品卡 100元面值
                      <span>￥100元</span>
                    </p>
                  </a>
                  <a href="javascript:;">
                    <img src="./images/list/lun02.png" alt />
                    <p>
                      严选礼品卡 100元面值
                      <span>￥100元</span>
                    </p>
                  </a>
                  <a href="javascript:;">
                    <img src="./images/list/lun03.png" alt />
                    <p>
                      严选礼品卡 100元面值
                      <span>￥100元</span>
                    </p>
                  </a>
                </li>
              </div>
              <div class="swiper-slide">
                <li>
                  <a href="javascript:;">
                    <img src="./images/list/lun01.jpg" alt />
                    <p>
                      严选礼品卡 100元面值
                      <span>￥100元</span>
                    </p>
                  </a>
                  <a href="javascript:;">
                    <img src="./images/list/lun02.png" alt />
                    <p>
                      严选礼品卡 100元面值
                      <span>￥100元</span>
                    </p>
                  </a>
                  <a href="javascript:;">
                    <img src="./images/list/lun03.png" alt />
                    <p>
                      严选礼品卡 100元面值
                      <span>￥100元</span>
                    </p>
                  </a>
                </li>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="flashSale">
          <div class="title">
            <h2>限时购</h2>
            <p>
              <span>更多</span>
              <span>></span>
            </p>
          </div>
          <ul class="cnt">
            <li>
              <a href="javascript:;">
                <img src="./images/list/lun01.jpg" alt />
                <p>
                  <span>￥100元</span>
                  <del>￥79</del>
                </p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun02.png" alt />
                <p>
                  <span>￥100元</span>
                  <del>￥79</del>
                </p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun03.png" alt />
                <p>
                  <span>￥100元</span>
                  <del>￥79</del>
                </p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="./images/list/lun01.jpg" alt />
                <p>
                  <span>￥100元</span>
                  <del>￥79</del>
                </p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun02.png" alt />
                <p>
                  <span>￥100元</span>
                  <del>￥79</del>
                </p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun03.png" alt />
                <p>
                  <span>￥100元</span>
                  <del>￥79</del>
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div class="flashSale">
          <div class="title">
            <h2>新品首发</h2>
            <p>
              <span>更多</span>
              <span>></span>
            </p>
          </div>
          <ul class="cnt">
            <li>
              <a href="javascript:;">
                <img src="./images/list/lun01.jpg" alt />
                <p>
                  <span>￥100元</span>
                  <del>￥79</del>
                </p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun02.png" alt />
                <p>
                  <span>￥100元</span>
                  <del>￥79</del>
                </p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun03.png" alt />
                <p>
                  <span>￥100元</span>
                  <del>￥79</del>
                </p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="./images/list/lun01.jpg" alt />
                <p>
                  <span>￥100元</span>
                  <del>￥79</del>
                </p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun02.png" alt />
                <p>
                  <span>￥100元</span>
                  <del>￥79</del>
                </p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun03.png" alt />
                <p>
                  <span>￥100元</span>
                  <del>￥79</del>
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div class="popularItem">
          <div class="title">
            <h2>人气推荐</h2>
            <p>
              <span>更多</span>
              <span>></span>
            </p>
          </div>
          <ul class="popularItem_list">
            <li class="img_li">
              <a href="javascript:;">
                <img src="./images/first/3.jpg" alt />
              </a>
            </li>
            <li class="list_li">
              <a href="javascript:;">
                <img src="./images/list/lun01.jpg" alt />
                <p>网易有道词典</p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun02.png" alt />
                <p>网易有道词典</p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun03.png" alt />
                <p>网易有道词典</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="category">
          <ul class="category_item">
            <li class="img_li">
              <a href="javascript:;">
                <img src="./images/first/2.jpg" alt />
              </a>
            </li>
            <li class="list_li">
              <a href="javascript:;">
                <img src="./images/list/lun01.jpg" alt />
                <p>网易有道词典</p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun02.png" alt />
                <p>网易有道词典</p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun03.png" alt />
                <p>网易有道词典</p>
              </a>
            </li>
          </ul>
          <ul class="category_item">
            <li class="img_li">
              <a href="javascript:;">
                <img src="./images/first/3.jpg" alt />
              </a>
            </li>
            <li class="list_li">
              <a href="javascript:;">
                <img src="./images/list/lun01.jpg" alt />
                <p>网易有道词典</p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun02.png" alt />
                <p>网易有道词典</p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun03.png" alt />
                <p>网易有道词典</p>
              </a>
            </li>
          </ul>
          <ul class="category_item">
            <li class="img_li">
              <a href="javascript:;">
                <img src="./images/first/4.jpg" alt />
              </a>
            </li>
            <li class="list_li">
              <a href="javascript:;">
                <img src="./images/list/lun01.jpg" alt />
                <p>网易有道词典</p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun02.png" alt />
                <p>网易有道词典</p>
              </a>
              <a href="javascript:;">
                <img src="./images/list/lun03.png" alt />
                <p>网易有道词典</p>
              </a>
            </li>
          </ul>
        </div>
        <a href="javascript:;" class="wapNewUserEntrance">
          <i class="iconfont icon-dianpu"></i>
        </a>
        <span class="goToTop">
          <i class="iconfont icon-less"></i>
        </span>
        <div class="ftWrap">
          <div class="g-row">
            <div class="bd">
              <a href="javascript:;">下载APP</a>
              <a href="javascript:;">电脑版</a>
            </div>
            <p class="copyright">
              <span>网易公司版权所有 © 1997-</span>
              <span>2019</span>
              <br />
              <span>食品经营许可证：JY13301080111719</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from "better-scroll";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  data() {
    return {
      listArr: [
        "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洁",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "全球特色"
      ],
      isShow: false
    };
  },
  computed: {
    ...mapState(["kingkongs","shopGuides"])
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    // 切换类
    addClass(item) {},
    _initBScroll() {
      // 获取ul
      const navList = document.querySelector(".nav-list");
      // 获取所li
      const liNodes = navList.children;
      // 遍历
      const width = Array.from(liNodes).reduce((pre, next) => {
        return next.offsetWidth + pre;
      }, 0);
      navList.style.width = width + "px";
      new BScroll(".msite_containers", {
        click: true
      });
      new BScroll(".nav-wrap", {
        click: true,
        scrollX: true,
        bounce: true
      });
    }
  },
  mounted() {
    // 创建一个swiper对象
    new Swiper(".swiper-container", {
      loop: true, // 可以无缝滑屏
      autoplay:true,
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
.msite
  width 100%
  height 100%
  background #f5f5f5
  .msite_header
    width 100%
    height 148px
    background #fff
    position relative
    z-index 99
    .header-top
      width 100%
      height 88px
      line-height 40px
      padding 20px
      box-sizing border-box
      display flex
      align-items center
      .header_login
        width 138px
        height 44px
        img
          width 100%
          height 100%
      .topSearchIpt
        width 442px
        height 56px
        border-radius 10px
        background #ededed
        text-align center
        line-height 56px
        color #666
        font-size 28px
        margin 0 15px
      .btn
        width 74px
        height 40px
        border 2px solid #b4282d
        border-radius 10px
        text-align center
        color #b4282d
    .nav-wrap
      position relative
      width 100%
      overflow hidden
      .nav-list
        height 60px
        padding 0 15px
        overflow hidden
        li
          width 150px
          height 100%
          line-height 60px
          text-align center
          font-size 28px
          float left
          margin 0 5px
      .tabWrap
        .tabAlter
          height 60px
          background #fff
          p
            font-size 28px
            color #333
            line-height 60px
            margin-left 20px
        .moreCate
          width 100%
          height 312px
          background #fff
          padding-top 20px
          li
            width 150px
            height 56px
            float left
            margin 15px 15px
            color #333
            background #fafafa
            border 2px solid #ededed
            line-height 60px
            text-align center
            border-radius 10px
            &.cateTag-active
              border 2px solid #b4282d
              color #b4282d
        .mask
          width 100%
          height 1334px
          background rgba(0, 0, 0, 0.5)
          position relative
          top 0
          z-index 999
      .icon
        width 100px
        height 60px
        background #fff
        line-height 60px
        text-align center
        position absolute
        right 0px
        top 0
  .msite_containers
    height 1090px
    overflow hidden
    .msite_wrap
      position relative
      .swiper-container
        .swiper-wrapper
          width 100%
          height 370px
          .swiper-slide
            width 100%
            height 100%
            position relative
            li
              position absolute
              top 0
              left 0
              img
                width 100%
                height 100%
        .swiper-pagination
          .swiper-pagination-bullet
            width 40px
            height 4px
            background #fff
            border-radius 10px
      .content_grow
        display flex
        justify-content space-around
        width 100%
        height 70px
        background #fff
        li
          text-align center
          line-height 72px
          .iconfont
            color #b4282d
      .content_list
        width 750px
        height 340px
        background #fff
        .swiper-wrapper
          .swiper-slide
            width 100%
            height 100%
            a
              width 20%
              height 50%
              display flex
              flex-direction column
              float left
              align-items center
              color #333
              img
                width 110px
                height 110px
      .content_gif_img
        width 100%
        height 126px
        background #f5f5f5
        img
          width 100%
          height 100%
      .shoppingGuide
        width 100%
        height 576px
        background #fff
        padding 5px 0
        .shoppingGuide_wrap
          width 95%
          height 550px
          margin 0 auto
          position relative
          .styleBanner
            width 49%
            height 49%
            background #f5f5f5
            margin 3px
            float left
            .styleBanner_top
              p
                margin 20px
                &.title
                  font-size 32px
                  color #333
                &.text
                  font-size 24px
                  color #7f7f7f
            .styleBanner_bottom
              width 100%
              height 150px
              img
                width 150px
                height 150px
      .personalTailor
        width 100%
        height 470px
        background #fff
        margin 20px 0
        h2
          width 100%
          height 100px
          line-height 100px
          padding-left 20px
          font-size 32px
          color #333
        .swiper-container
          width 100%
          height 370px
          position relative
          .swiper-wrapper
            li
              width 100%
              height 370px
              a
                width 216px
                height 310px
                margin-left 24px
                float left
                img
                  width 216px
                  height 216px
                  background #f5f5f5
                p
                  font-size 24px
                  color #333
                  line-height 30px
                  span
                    color #b4282d
          .swiper-pagination
            width 100%
            height 12px
            position absolute
            bottom 40px
            span
              width 12px
              height 12px
              &.swiper-pagination-bullet
                background #b9b9b9
              &.swiper-pagination-bullet-active
                background #b4282d
      .flashSale
        width 100%
        height 698px
        background #fff
        margin-top 20px
        .title
          height 100px
          display flex
          justify-content space-between
          color #333
          h2
            height 100px
            line-height 100px
            font-size 32px
            margin-left 20px
          p
            height 100px
            line-height 100px
            span
              font-size 28px
        .cnt
          width 100%
          height 598px
          li
            width 100%
            height 50%
            a
              width 216px
              height 299px
              float left
              margin-left 24px
              img
                width 216px
                height 216px
                background #f5f5f5
              p
                margin 10px 0
                span
                  color #b4282d
                  font-size 28px
                del
                  font-size 24px
      .popularItem
        width 100%
        height 784px
        margin 20px 0
        background #fff
        .title
          height 100px
          display flex
          justify-content space-between
          color #333
          h2
            height 100px
            line-height 100px
            font-size 32px
            margin-left 20px
          p
            height 100px
            line-height 100px
            span
              font-size 28px
        .popularItem_list
          width 100%
          height 598px
          .img_li
            width 100%
            height 50%
            margin-bottom 20px
            a
              img
                width 696px
                height 100%
                margin-left 24px
          .list_li
            width 100%
            height 50%
            a
              width 216px
              height 299px
              float left
              margin-left 24px
              img
                width 216px
                height 216px
                background #f5f5f5
              p
                margin 10px 0
      .category
        width 100%
        height 2382px
        .category_item
          width 100%
          height 780px
          background #fff
          margin-top 20px
          .img_li
            width 100%
            height 370px
            margin-bottom 20px
            a
              img
                width 100%
                height 100%
          .list_li
            width 100%
            height 50%
            a
              width 216px
              height 299px
              float left
              margin-left 24px
              img
                width 216px
                height 216px
                background #f5f5f5
              p
                margin 10px 0
      .wapNewUserEntrance
        width 120px
        height 80px
        background #f4f4f4
        position absolute
        bottom 140px
        right 0
        text-align center
        line-height 80px
        border-radius 40px 0 0 40px
        .icon-dianpu
          font-size 60px
          font-weight bold
          color #b4282d
      .goToTop
        width 82px
        height 82px
        border-radius 50%
        background #f4f4f4
        position absolute
        bottom 20px
        right 20px
        text-align center
        line-height 82px
        .icon-less
          font-size 62px
          color #666
      .ftWrap
        width 100%
        height 245px
        background #414141
        margin-top 20px
        .g-row
          width 100%
          height 244px
          margin-bottom 3px
          position relative
          .bd
            width 710px
            height 62px
            a
              display inline-block
              width 171px
              height 62px
              border 2px solid #d9d9d9
              color #fff
              text-align center
              line-height 62px
              border-radius 8px
              margin-top 50px
              &:nth-child(1)
                margin-left 150px
                margin-right 50px
          .copyright
            width 710px
            height 64px
            margin 0 auto
            position absolute
            bottom 3px
            text-align center
            color #999
</style>
