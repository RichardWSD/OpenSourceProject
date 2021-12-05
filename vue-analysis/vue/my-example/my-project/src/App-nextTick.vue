<template>
  <div id="app">
    <div ref="msg">
      {{ msg }}
    </div>
    <button @click="change">change</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello World',
    }
  },
  methods: {
    change() {
      this.msg = Math.random();
      console.log('sync:', this.$refs.msg.innerText);
      this.$nextTick(() => {
       console.log('nextTick:', this.$refs.msg.innerText);
      })
      this.$nextTick().then(() => {
        console.log('nextTick with promise', this.$refs.msg.innerText);
      })
    },
  },
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
