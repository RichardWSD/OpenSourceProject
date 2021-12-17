<template>
  <div id="app">
    <h1>{{title}}</h1>
    <users></users>
  </div>
</template>

<script>
//局部注册组件
import Users from "./components/Users";

export default {
  name: "App",
  data() {
    return {
      title: "这是我的第一个vue脚手架项目"
    };
  },
  //注册组件
  components: {
    users: Users
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
/* div /deep/ h2{
  color: red;
} */
</style>
