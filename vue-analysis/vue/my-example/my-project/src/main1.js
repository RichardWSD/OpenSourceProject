// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

// var app = new Vue({
//   el: '#app',
//   render: function (createElement) {
//     return createElement('div', {
//       attrs: {
//         id: 'app'
//       },
//     }, this.message)
//   },
//   data: {
//     message: 'Hello Vue!'
//   }
// })


// var app = new Vue({
//   el: '#app',
//   // 这里的 h 是 createElement 方法
//   render: h => h(App)
// })


// 合并配置
// let childComp = {
//   template: '<div>{{msg}}</div>',
//   created() {
//     console.log('child created')
//   },
//   mounted() {
//     console.log('child mounted')
//   },
//   data() {
//     return {
//       msg: 'Hello Vue'
//     }
//   }
// }
// Vue.mixin({
//   created() {
//     console.log('parent created')
//   }
// })
// let app = new Vue({
//   el: '#app',
//   render: h => h(childComp)
// })


// 组件注册
/* Vue.component('app', App); // 全局注册
let app = new Vue({
  el: '#app',
  template: '<app></app>'
}) */

/* var app = new Vue({
  el: '#app',
  render: h => h(App)
}) */

// 编译成render函数过程
/* new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
}) */

let Child = {
  template: '<button @click="clickHandler($event)">' +
  'click me' +
  '</button>',
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
  '<child @select="selectHandler" @click.native.prevent="clickHandler"></child>' +
  '</div>',
  methods: {
    clickHandler() {
      console.log('Child clicked!')
    },
    selectHandler() {
      console.log('Child select!')
    }
  },
  components: {
    Child
  }
})