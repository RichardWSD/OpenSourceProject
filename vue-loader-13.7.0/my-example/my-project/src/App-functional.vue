<template functional>
    <h1>{{ props.msg }}</h1>
</template>

<script>

export default {
  name: "AppFunctional",
  // functional: true,
  props: {
    msg: String
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
