import Vue from 'vue'

let Child = {
  template: 
  // '<label>' +
  `
  <input
    :value="value"
    v-on:input="$emit('input', $event.target.value)"
  >
` 
// + 
//   '</label>'
  ,
  data() {
    return {
      value: ''
    }
  },
  methods: {
    clickHandler(e) {
      console.log('Button clicked!', e)
      this.$emit('select')
    }
  }
}

let vm = new Vue({
  el: '#app',
  template: '<div>' +
  '<child @input="inputHandler" @click.native.prevent="clickHandler" @focus.native="focusHandler"></child>' +
  '</div>',
  methods: {
    clickHandler() {
      console.log('Child clicked!')
    },
    inputHandler() {
      console.log('Child input!')
    },
    focusHandler() {
      console.log('Child focus');
    }
  },
  components: {
    Child
  }
})