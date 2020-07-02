<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      age: 30,
      data: "",
      res: {}
    };
  },
  components: {},
  mounted() {
    //本地加载json请求的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // });
    //通过easy-mock接口请求
    // this.axios.get('/user/login').then((res)=>{
    //   this.res = res;
    // });
    // 本地集成mockjs实现数据
    // this.axios.get('/user/login').then((res)=>{
    //   console.log("ok",res);
    //   this.res = res;
    // })
    this.getUser();
    this.getCartCount();
  },
  methods: {
    getUser() {
      this.axios.get("/user").then((res) => {
        this.$store.commit("saveUserName", res.username);
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res) => {
        //保存到vuex
        console.log("res123",res)
        this.$store.dispatch("saveCartCount", res);

      });
    }
  }
};
</script>

<style lang="scss">
// @import url('./assets/scss/config.scss');
@import url("./assets/scss/reset.scss");
@import url("./assets/scss/button.scss");
</style>