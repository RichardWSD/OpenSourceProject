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



// 异步组件
/* Vue.component('HelloWorld', (resolve, reject) => {
  // 这个特殊的 `require` 语法将会告诉 webpack
  // 自动将你的构建代码切割成多个包，这些包
  // 会通过 Ajax 请求加载
  require(['./components/HelloWorld'], resolve)
}) */
// Vue.component('HelloWorld', () => import('./components/HelloWorld'));
/* const LoadingComponent = {
  template: '<div>loading</div>'
};
const ErrorComponent = {
  template: '<div>error</div>'
};
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./components/HelloWorld'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 1000
})
Vue.component('HelloWorld', AsyncComponent); */

var app = new Vue({
  el: '#app',
  render: h => h(App)
})