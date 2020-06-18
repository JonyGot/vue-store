import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Prodect from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'

//通过vue的方式加载插件
Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/index',
        children: [{
            path: '/index',
            name: 'index',
            component: Index
        }, {
            path: '/product/:id',
            name: 'product',
            component: Prodect,
        }, {
            path: '/detail',
            name: 'detail',
            component: Detail,
        }]
    }, {
        path: '/cart',
        name: 'cart',
        component: Cart
    }, {
        path: '/order',
        name: 'oeder',
        component: Order,
        // redirect: '/list',
        children: [{
            path: 'list',
            name: 'order-list',
            component: OrderList,
        }, {
            path: 'confirm',
            name: 'order-confirm',
            component: OrderConfirm,
        }, {
            path: 'pay',
            name: 'order-pay',
            component: OrderPay,
        },{
            path:'alipay',
            name:'ali-pay',
            component:AliPay
        }]
    }]
})