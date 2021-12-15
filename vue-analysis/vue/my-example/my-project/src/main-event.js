import Vue from 'vue'

const Child = {
  template:
  '<label>' +
  `
  <input
    :value="msg"
    v-on:input="$emit('input', $event.target.value)"
  >
` +
   '</label>',

  props: ['msg'],
  methods: {
    clickHandler (e) {
      console.log('Button clicked!', e)
      this.$emit('select')
    }
  }
}

const vm = new Vue({
  el: '#app',
  template: '<div>' +
  '<child :msg="message" @input="inputHandler" @click.native.prevent="clickHandler" @focus.native="focusHandler"></child>' +
  '</div>',
  methods: {
    clickHandler () {
      console.log('Child clicked!')
    },
    inputHandler (msg) {
      console.log('Child input!')
      this.message = msg
    },
    focusHandler () {
      console.log('Child focus')
    }
  },
  components: {
    Child
  },
  data () {
    return {
      message: ''
    }
  }
})
