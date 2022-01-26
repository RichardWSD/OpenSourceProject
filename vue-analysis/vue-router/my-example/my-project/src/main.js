import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const notFound = { template: '<div>notFound</div>' }
// const AsyncComp = () => import('./components/Async.vue')
const AsyncComp = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // resolve(import('./components/Async.vue'))
      resolve({
        template: '<div>AsyncComp</div>',
        beforeRouteEnter(to, from, next) {
          console.log('Async beforeRouteEnter');
          next()
        }
      })
    }, 1000)
  });  
}

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo, },
  { path: '/bar', component: Bar },
  { path: '/async', component: AsyncComp },
  // { path: '*', component: notFound },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

router.beforeEach((to, from, next) => {
  console.log('全局beforeEach');
  next()
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  el: '#app',
  render(h) {
    return h(App)
  },
  router
})