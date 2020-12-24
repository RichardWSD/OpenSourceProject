import Vue from 'vue'
import App from './App-AsyncComponent.vue'

/************ 异步组件 ************/ 
// require方式
/* Vue.component('HelloWorld', (resolve, reject) => {
  // 这个特殊的 `require` 语法将会告诉 webpack
  // 自动将你的构建代码切割成多个包，这些包
  // 会通过 Ajax 请求加载
  require(['./components/HelloWorld'], resolve)
}) */

//promise方式
// Vue.component('HelloWorld', () => import('./components/HelloWorld'));

// 高级组件方式
const LoadingComponent = {
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
Vue.component('HelloWorld', AsyncComponent); 

var app = new Vue({
  el: '#app',
  render: h => h(App)
})