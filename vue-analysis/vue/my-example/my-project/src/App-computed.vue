<template>
  <div id="app">
    <div>{{ name }}</div>
    <button @click="change">change</button>
    <button @click="changeLast">change last name</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      firstName: 'Mo',
      lastName: 'Lei',
      useless: 0
    }
  },
  computed: {
    name () {
      if (this.useless > 0) {
        return this.firstName + ' ' + this.lastName
      }
      return 'please click change'
    }
  },
  methods: {
    change () {
      this.useless++
    },
    changeLast () {
      this.lastName = Math.random()
    }
  }
}
</script>