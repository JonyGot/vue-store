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
                    <a :href="sub.id?'/#/product/'+sub.id : ''">
                      <img v-lazy="sub.id?sub.img : '/imgs/item-box-1.png'" alt />
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
              <img v-lazy="item.img" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img v-lazy="item.img" alt />
        </a>
      </div>
      <div class="banner">
        <a>
          <img v-lazy="'/imgs/banner-1.png'" alt />
        </a>
      </div>
    </div>

    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href>
              <img src="/imgs/mix-alpha.jpg" alt />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr,i) in phoneList" :key="i">
              <div class="item" v-for="(item,index) in arr" :key="index">
                <span :class="index%2==0?'new-pro':'kill-pro'">新品</span>
                <div class="item-img">
                  <img
                    v-lazy="item.mainImage.indexOf('http')!= -1?item.mainImage:item.imageHost+'/'+item.mainImage"
                    alt
                  />
                </div>
                <div class="item-info">
                  <h3>{{item.subtitle}}</h3>
                  <p>{{item.name}}</p>
                  <p class="price" @click="addCart(item.id)">{{item.price}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServiceBar></ServiceBar>
      <modal title="提示" sureText="查看购物车" btnType="1" modalType="middle" :showMedal="showModal" @submit="goToCart" @cancel="closeModal">
        <template v-slot:body>
          <p>添加购物车成功</p>
        </template>
      </modal>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar.vue";
import modal from "./../components/Modal.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
    modal
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
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      phoneList: [],
      showModal: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryID: 100012,
            pageSize: 12
          }
        })
        .then(res => {
          this.phoneList = [res.list.slice(2, 6), res.list.slice(6, 10)];
        });
    },
    addCart(){
      this.showModal = true
      // return 0;
      // this.axios.post('/carts',{
        // productId:id,
      //   selected:true
      // }).then(()=>{

      // }).catch(()=>{
      //   this.showModal = true;
      // })
    },
    goToCart(){
      this.$router.push('/cart')
    },
    closeModal(){
      this.showModal = false
    }

  }
};
</script>

<style lang="scss">
@import url("../assets/scss/base.scss");

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
          .children {
            width: 0px;
            overflow: hidden;
            background-color: #fff;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid #e5e5e5;
            // display: none;
            transition: all 0.3s;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              img {
                width: 42px;
                height: 35px;
                margin-right: 15px;
                vertical-align: middle;
              }
              a {
                color: #333;
                font-size: 14px;
              }
            }
          }
          &:hover {
            background-color: #ff6600;
            .children {
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
  .ads-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .banner {
    margin-bottom: 50px;
    a {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .product-box {
    background-color: #f5f5f5;
    padding: 30px 0 50px;
    h2 {
      font-size: 22px;
      height: 21px;
      line-height: 21px;
      color: #333;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: #fff;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              color: #fff;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              // text-align: center;
              width: 100%;
              img {
                height: 195px;
                width: 100%;
                margin: 0px auto;
              }
            }
            .item-info {
              h3 {
                color: #333;
                font-size: 14px;
                line-height: 14px;
                font-weight: bold;
              }
              p {
                color: #999;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: 13px;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  content: " ";
                  background: url("/imgs/icon-cart-hover.png") no-repeat center;
                  margin-left: 5px;
                  display: inline-block;
                  background-size: contain;
                  vertical-align: middle;
                  width: 22px;
                  height: 22px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>