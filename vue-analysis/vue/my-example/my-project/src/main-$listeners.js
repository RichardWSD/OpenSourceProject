import Vue from 'vue'

Vue.component('nested-btn', {
  template: `
    <div @click="onClick">
      <div @click="onClick">我是嵌套btn</div>
    </div>
  `,
  methods: {
    onClick () {
      console.log('我是嵌套btn')
    }
  }
})

Vue.component('hover-btn', {
  template: `
    <div v-on="$listeners">
      <slot v-on="$listeners">默认：我是组件按钮</slot>
    </div>
  `
})

const AppLayout = {
  template:
    `<div>
      <main>
        <hover-btn v-on="$listeners">
          <span>我是组件按钮</span>
        </hover-btn>
        ` +
  // '<div v-on="$listeners">我是原生按钮</div>' +
      `</main>
    </div>`,
  // template:
  //   `<div v-on="$listeners">
  //     <slot>默认内容</slot>
  // <span @click="innerClick">我是组件里面初始定义的</span>
  //   </div>`,
  methods: {
    innerClick () {
      console.log('innerClick')
      this.$emit('click')
    }
  }
}

const vm = new Vue({
  el: '#app',
  template:
    '<div>' +
      '<app-layout @click="outerClick">' +
      '<span>我是按钮</span>' +
      '</app-layout>' +
    // '<nested-btn />' +
    '</div>',
  data () {
    return {
      title: '我是标题',
      msg: '我是内容',
      desc: '其它信息'
    }
  },
  methods: {
    outerClick () {
      console.log('我是父组件的click事件')
    }
  },
  components: {
    AppLayout
  }
})
