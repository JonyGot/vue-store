/*
 * @Author: your name
 * @Date: 2020-07-09 15:05:58
 * @LastEditTime: 2020-07-21 10:36:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\vue-store\mall\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import message from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
// import env from './env'

//mock开关
const mock = false;
if(mock){
  //执行的时候才会加载，如果import在初始化的时候就会加载
  console.log('加载了mock')
  require('./mock/api')
}

//根据前端的跨域方式做调整
//定义了基础的地址前缀
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5eeb5512978a962be5336179';  
axios.defaults.baseURL = '/api';  
axios.defaults.timeout = 8000;
//根据环境变了请求不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.hash;
  console.log("path",path)
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    if(path != '#/index')
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
})
// Vue.prototype.$message = message;
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(message);
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-spin.svg'
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')