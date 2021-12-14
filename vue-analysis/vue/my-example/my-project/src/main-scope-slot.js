import Vue from 'vue'

let Child = {
  template: '<div class="child">' +
  '<slot text="Hello " :msg="msg"></slot>' +
  '<slot name="other"></slot>' +
  '<slot name="dynamicOther" :msg="msg"></slot>' +
  '</div>',
  data() {
    return {
      msg: 'Vue'
    }
  }
}

let vm = new Vue({
  el: '#app',
  template: '<div>' +
  '<child>' +
    '<template slot-scope="props">' +
      '<p>Hello from parent</p>' +
      '<p>{{ props.text + props.msg}}</p>' +
    '</template>' +
    '<template slot="other">' +
      '<p>静态插槽内容</p>' +
    '</template>' +
    '<template slot="dynamicOther" slot-scope="props">' +
      '<p>动态的插槽内容: {{props.msg}}</p>' +
    '</template>' +
  '</child>' +
  '</div>',
  components: {
    Child
  }
})