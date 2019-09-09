<template>
  <div id="app">
    <nav-bar/>
    <router-view class="container"/>
    <main-footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    MainFooter
  }
}
</script>

<style lang="scss">
#app {

}
</style>
