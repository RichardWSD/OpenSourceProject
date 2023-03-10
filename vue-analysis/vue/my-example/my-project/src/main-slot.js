import Vue from 'vue'

let AppLayout = {
  template: '<div class="container">' +
  '<header><slot name="header"></slot></header>' +
  '<main><slot>默认内容</slot></main>' +
  '<footer><slot name="footer"></slot></footer>' +
  '</div>'
}

let vm = new Vue({
  el: '#app',
  template: '<div>' +
  '<app-layout>' +
  '<h1 slot="header">{{title}}</h1>' +
  '<p>{{msg}}</p>' +
  '<p slot="footer">{{desc}}</p>' +
  '<p slot="footer">{{desc}}2</p>' +
  '</app-layout>' +
  '</div>',
  data() {
    return {
      title: '我是标题',
      msg: '我是内容',
      desc: '其它信息'
    }
  },
  components: {
    AppLayout
  }
})