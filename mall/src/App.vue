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
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    let url = "https://www.easy-mock.com/mock/5ee4fb0c3cfbe27ca221648d/example/proxy";
    axios.get(url).then({
      
    })
    jsonp(url,()=>{
      
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
