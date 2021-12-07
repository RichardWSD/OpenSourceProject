<template>
  <div id="app">
    <nameSearch 
      :name="name"
      :info="info"
      nick-name
    />
    <!-- <NameSearch 
      :name="name"
      :info="info"
      :nick-name="nickName"
    /> -->
    <button @click="changeName">change name</button>
    <button @click="changeInfo">change info</button>
  </div>
</template>

<script>
import nameSearch from './components/NameSearch';
export default {
  name: 'app',
  // wsd： 事实证明，也不需要像官网文档说的一定要PascalCase或者kebab-case命名组件才能用
  // 研究源码发现resolveAsset里面会对要查找的组件依次按名称直接找，按camelCase找，按PascalCase找
  components: {
    nameSearch,
  },
  data () {
    return {
      name: 'test',
      info: {
        aa: 11,
        bb: 22,
      },
      nickName: 'nick-name'
    }
  },
  methods: {
    changeName() {
      this.name = this.name === 'test' ? 'test2' : 'test';
    },
    changeInfo() {
      this.info = this.info.aa === 11 ? {
        aa: 111,
        bb: 222,
      } : {
        aa: 11,
        bb: 22,
      };
    }
  }
}
</script>