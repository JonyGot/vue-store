<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
import jsonp from 'jsonp'
export default {
  name: 'App',
  data() {
    return {
      age:30,
      data:'',
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    let axiosUrl = "https://www.easy-mock.com/mock/5ee4fb0c3cfbe27ca221648d/example/mock"
    let jsonpUrl = "/api/activity/servicetime";
    axios.get(axiosUrl).then(function(res){
      console.log("axios",res);
    })
    jsonp(jsonpUrl,(err,res)=>{
      let result = res;
      this.date = result;
      console.log('jsonp',res);
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
