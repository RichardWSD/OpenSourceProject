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
      useless: 0,
      nested: {
        a: {
          b: 1
        }
      }
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
      // this.nested.a.b = 2
    },
    changeLast () {
      this.lastName = Math.random()
    }
  },
  watch: {
    useless (val) {
      console.log('useless: ', val)
    },
    /* name: {
      immediate: true,
      handler (val) {
        console.log('name: ', val)
      }
    },
    nested: {
      deep: true,
      handler (val) {
        console.log('nested: ', val.a.b)
      }
    } */
  }
}
</script>