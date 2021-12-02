import Vue from 'vue'

let childComp = {
  template: '<div>{{msg}}</div>',
  created() {
    console.log('%c child created', 'color:green')
  },
  mounted() {
    console.log('%c child mounted', 'color:green')
  },
  data() {
    return {
      msg: 'Hello Vue'
    }
  }
}
Vue.mixin({
  created() {
    console.log('%c parent created', 'color:green')
  }
})
let app = new Vue({
  el: '#app',
  render: h => h(childComp)
})