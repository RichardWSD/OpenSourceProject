<template>
  <div id="app">
    <!-- {{ msg }} -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <div v-if="flag">
      {{ msg }}
    </div>
    <div v-else>
      {{ msg1 }}
    </div>
    <button @click="change">change</button>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  // observe
  /* data(){
    return {
      nested: {
        msg: 'Hello World!'
      }
    }
  } */
  data() {
    return {
      flag: true,
      msg: 'Hello World!',
      msg1: 'Hello Vue'
    }
  },
  watch: {
    msg() {
      this.msg = Math.random();
    }
  },
  methods: {
    change() {
      this.msg = Math.random(); 
    },
    toggle() {
      this.flag = !this.flag;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
