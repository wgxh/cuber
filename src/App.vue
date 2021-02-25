<template>
  <cuber :height="200" :width="200" :depth="200" />
</template>

<script lang="ts">
import Cuber from './components/Cuber.vue'

// 注册组件
export default {
  components: {
    Cuber,
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    #app {
      margin: 0;
      padding: 0;
    }
  }
}
</style>
