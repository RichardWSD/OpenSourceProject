<!-- ComponentA.vue -->
<template>
  <div>
    <ComponentB/>
    <p>{{ docs }}</p>
  </div>
</template>

<script>
import ComponentB from './CustomeBlockB.vue';

export default {
  components: { ComponentB },
  data () {
    return {
      docs: ComponentB.__docs
    }
  }
}
</script>