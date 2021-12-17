import Vue from 'vue/dist/vue.esm'

const Child = {
  template:
  `
  <div>
    <h2>我是子组件的h2</h2>
  </div>
  `,

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
  '<h2>我是父组件h2</h2>' + 
  '<child></child>' +
  '</div>',
  components: {
    Child
  },
})
