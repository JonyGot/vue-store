<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">{{title}}</div>
      <div class="pro-param">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {
      isFixed: false,
    };
  },
  props:{
    title:String
  },
  mounted() {
    window.addEventListener("scroll", this.initHeighter);
  },
  methods: {
    initHeighter() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTopl;
      this.isFixed = scrollTop > 152 ? true : false;
    }
  },
  destroyed() {
    window.removeEventListener("scroll",this.initHeighter,false)
  },
};
</script>

<style lang="scss">
.nav-bar {
  position: relative;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  height: 70px;
  width: 100%;
  line-height: 70px;
  z-index: 10;
  box-shadow: 0px 5px 5px #ccc;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pro-title {
      font-size: 18px;
      color: #333;
      font-weight: bold;
    }
    .pro-param {
      font-size: 14px;
      span {
        margin: 0 10px 0 0;
      }
      a {
        color: #666;
        margin-right: 10px;
      }
    }
  }
}
.is_fixed {
  position: fixed;
  width: 100%;
  top: 0;
}
</style>