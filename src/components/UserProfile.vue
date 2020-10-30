<template>
  <div>
    <div class="background">
      <app-header></app-header>
    </div>
    <app-user></app-user>
  </div>
</template>

<script>
import User from "@/extras/Home/User";
import Header from "@/extras/Headers/Header";

export default {
  name: 'App',
  components: {
    appUser: User,
    appHeader: Header,
  },
}
</script>

<style scoped>
.background{
  background: #1DA1F2;
}
</style>