<template>
  <div id="app">
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
export default {
  name: 'App',
  data() {
    return {
      flag: true,
      msg: 'Hello World',
      msg1: 'Hello Vue'
    }
  },
  methods: {
    change() {
      this.msg = Math.random();
    },
    toggle() {
      this.flag = !this.flag;
    }
  },
  watch: {
    msg() {
      this.msg = Math.random()
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
