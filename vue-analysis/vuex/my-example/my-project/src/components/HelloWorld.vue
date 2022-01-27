<template>
  <div class="hello">
    <div>{{count}}</div>
    <div>{{aCount}}</div>
    <div>{{bCount}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters({
      count: 'computedCount',
      aCount: 'a/computedCount',
      bCount: 'b/computedCount'
    }),
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
