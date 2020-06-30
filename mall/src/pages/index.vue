<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,index) in item" :key="index">
                    <a :href="sub.id?'/#/product/'+sub.id : ''" >
                      <img :src="sub.id?sub.img : '/imgs/item-box-1.png'" alt />
                      {{sub.name?sub.name:'小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 清单</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption" :auto-update="true">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="'/#/product/'+item.id">
              <img :src="item.img" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="abs-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <ServiceBar></ServiceBar>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: "30",
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: "31",
            img: "/imgs/item-box-2.png",
            name: "小米CC9"
          },
          {
            id: "32",
            img: "/imgs/item-box-3.jpg",
            name: "小米CC9"
          },
          {
            id: "33",
            img: "/imgs/item-box-4.jpg",
            name: "小米CC9"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    };
  }
};
</script>

<style lang="scss">
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      background-color: #55585a7a;
      padding: 26px 0px;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          padding-left: 30px;
          // text-align: center;
          font-size: 16px;
          a {
            color: #fff;
            position: relative;
            display: block;
            &:after {
              content: " ";
              position: absolute;
              width: 10px;
              height: 15px;
              display: inline-block;
              right: 30px;
              top: 17.5px;
              background: url("/imgs/icon-arrow.png") no-repeat center;
              background-size: contain;
            }
          }
          .children{
            width: 0px;
            overflow: hidden;
            background-color: #fff;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid #e5e5e5;
            // display: none;
            transition: all .3s;
            ul{
              display: flex;
              justify-content: space-between;
              height: 75px;
              li{
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              img{
                width: 42px;
                height: 35px;
                margin-right: 15px;
                vertical-align: middle;
              }
              a{
                color: #333;
                font-size: 14px;
              }
            }
          }
          &:hover {
            background-color: #ff6600;
            .children{
              width: 962px;
              // display: block;
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-button-prev {
        left: 280px;
      }
    }
  }
}
</style>