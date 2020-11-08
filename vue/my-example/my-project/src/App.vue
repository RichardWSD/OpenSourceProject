<template>
  <div id="app">
    <div ref="msg">
      {{ msg }}
    </div>
    <button @click="change">change</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    change() {
      this.$nextTick(() => {
        console.log('nextTick:', this.$ref.msg.innerText); // 这里会输出Hello World!，因为nextTick内部是通过一个数组的形式调用的，由于这个先push进去，渲染watch后push（所以未执行到它的时候值还没发生变化）
      })
      this.msg = Math.random(); 
      console.log('sync:',this.$refs.msg.innerText);
      /* this.$nextTick(() => {
        console.log('nextTick:', this.$refs.msg.innerText);
      }) */
      this.$nextTick().then(() => {
        console.log('nextTick with promise:', this.$refs.msg.innerText);
      })
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
