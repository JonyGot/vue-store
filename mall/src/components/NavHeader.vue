<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-meanu">
          <a href="javascript:;">小米商城</a>
          <!-- //"javascript:;"防止页面刷新 -->
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" @click="login">{{username?username:'登录'}}</a>
          <a href="javascript:;">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>购物车( {{cartCount}} )
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="items-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="items-menu">
            <span>RedMI红米</span>
            <div class="children"></div>
          </div>
          <div class="items-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" placeholder="小米10   智能家居"/>
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: []
    };
  },
  computed: {
    username(){
      return this.$store.state.username
    },
    cartCount(){
      return this.$store.state.cartCount
    }
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "¥" + val.toFixed(2) + "元";
    }
  },
  mounted() {
    this.getProductList();
    console.log("phoneList123", this.phoneList);
  },
  methods: {
    getProductList() {
      this.axios
        .get("/products", {
          //get必须以这种方式传惨
          params: {
            categoryId: "100012",
            pageSize: 8
          }
        })
        .then(res => {
          {
            if (res.list.length > 6) {
              console.log("phonrest", res);
              this.phoneList = res.list.slice(0, 6);
            } else {
              this.phoneList = res.list;
            }
          }
        });
    },
    goToCart() {
      this.$router.push("/cart");
    },
    login() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss">
@import url("../assets/scss/base.scss");
// @import url("../assets/scss/config.scss");
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    a {
      display: inline-block;
      color: #b0b0b0;
      margin-right: 17px;
    }
    .my-cart {
      width: 110px;
      background-color: #ff6600;
      color: #fff;
      text-align: center;
      margin-right: 0;
      .icon-cart {
        display: inline-block;
        width: 16px;
        height: 12px;
        background: url("/imgs/icon-cart-checked.png") no-repeat center;
        background-size: contain;
        margin-right: 4px;
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: "  ";
            width: 55px;
            height: 55px;
            display: inline-block;
            background: url("/imgs/mi-logo.png") no-repeat center;
            background-size: 55px;
            transition: margin 0.2s;
          }
          &:after {
            content: "  ";
            width: 55px;
            height: 55px;
            display: inline-block;
            background: url("/imgs/mi-home.png") no-repeat center;
            background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        // padding-left: 209px;
        .items-menu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-style: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: #ff6600;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            // border-top: 1px #e5e5e5 solid;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            background-color: #fff;
            z-index: 10;
            transition: all 0.6s;
            .product {
              float: left;
              position: relative;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              text-align: center;
              line-height: 12px;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: #333;
              }
              .pro-price {
                color: #ff6600;
              }
              &:before {
                content: " ";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid #d7d7d7;
                height: 100px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            height: 50px;
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            padding-left: 14px;
          }
          a {
            display: inline-block;
            width: 18px;
            height: 18px;
            background: url("/imgs/icon-search.png") no-repeat center;
            background-size: contain;
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>