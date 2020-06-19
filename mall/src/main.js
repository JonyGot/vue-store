import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
// import env from './env'

//mock开关
const mock = true;
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
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
})

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')