<template>
  <div id="app">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition :appear="true" name="fade">
  <p v-if="show">hello</p>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
     show: true
    }
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
