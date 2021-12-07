<template>
  <div>
    <p>{{ name }}</p>
    <p>info:</p>
    <ul>
      <li>{{ info.aa }}</li>
      <li>{{ info.bb }}</li>
    </ul>
   <!--  
     wsd：发现没什么问题，组件props命名和在模板上命名都用camelCase的时候都是ok的，不存在官方文档说的一定要转成kebab-case的问题
     研究源码发现只要是跟组件props命名或者是组件props命名的kebab-case格式一致的情况就是可以的
   -->
    <div v-if="NickName">我是{{NickName}}</div>
    <button @click="changeName">子组件上直接修改属性name</button>
  </div>
</template>

<script>
export default {
  name: "name-search",
  props: {
    name: String,
    info: Object,
    // wsd: 这里命中的源码逻辑有点意思，源码validateProp中关于boolean的处理
    NickName: [Boolean, String]
    // nickName: [String, Boolean]
  },
  data () {
    return {
    };
  },
  methods: {
    changeName() {
      this.name = 'xxx'
    }
  }
}
</script>
