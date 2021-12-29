// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AppFunctional from './App-functional'

Vue.config.productionTip = false

//全局注册组件
//Vue.component('users',Users);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { AppFunctional },
  data() {
    return {
      msg: '收到了老师的'
    }
  },
  template: `
    <div id="app">
      <AppFunctional :msg="msg"></AppFunctional>
    </div>
  `
})
