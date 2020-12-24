<template>
  <div v-if="flag">
    <h2>flag true</h2>
  </div>
  <span v-else>
    <h2>flag false</h2>
  </span>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['flag'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    console.log('子mounted');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
