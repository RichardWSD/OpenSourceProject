<template>
  <div id="app">
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.val }}</li>
      </ul>
    </div>
    <button @click="change">change</button>
    <!-- <HelloWorld :flag="flag"></HelloWorld>
    <button @click="toggle">toggle</button> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  /* components: {
    HelloWorld
  }, */
  data () {
    return {
      items: [
        { id: 0, val: 'A' },
        { id: 1, val: 'B' },
        { id: 2, val: 'C' },
        { id: 3, val: 'D' }
      ]
      // flag: false
    }
  },
  methods: {
    change () {
      this.items.reverse().push({ id: 4, val: 'E' })
    }
    // toggle() {
    //   this.flag = !this.flag;
    // }
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
