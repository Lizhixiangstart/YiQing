<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
  
</template>

<script>
import Home from './views/Home/Home.vue'
import AskDoctor from './views/AskDoctor/AskDoctor.vue'
export default {
  name: 'App',
  components: {
    Home,
    AskDoctor
  }
}
</script>

<style lang="css">
/* //引入公共的样式 */
/*  @import url('./assets/css/reset.css'); */

</style>
