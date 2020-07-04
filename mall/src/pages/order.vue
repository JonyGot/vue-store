<template>
<div>
  <order-header></order-header>
  <router-view></router-view>
  <serviceBar></serviceBar>
  <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader';
import NavFooter from '../components/NavFooter';
import serviceBar from '../components/ServiceBar';

export default {
    name:'order',
    components:{
        OrderHeader,
        NavFooter,
        serviceBar
    }
}
</script>

<style>
</style>