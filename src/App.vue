<template>
  <div id="app">
    <div class="background">
      <app-nav></app-nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/Headers/Header";
export default{
  name:'App',
  components: {
    appNav: Header,

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #eeebea;
}
.background{
  background: #1DA1F2;
}
</style>
