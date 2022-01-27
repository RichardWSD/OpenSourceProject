import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    increment (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },
  getters: {
    computedCount (state) {
      return `A: ${state.count}`
    }
  }
}

const moduleB = {
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    increment (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },
  getters: {
    computedCount (state) {
      return `B: ${state.count}`
    }
  }
}

const store = new Vuex.Store({
  state: () => ({
    count: 0
  }),
  mutations: {
    increment (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },
  getters: {
    computedCount (state) {
      return `total: ${state.count}`
    }
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
