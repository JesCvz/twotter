<template>
  <div>
    <app-user></app-user>
  </div>
</template>

<script>
import User from "@/components/User";
export default {
  name: 'App',
  components: {
    appUser: User,
  },
}
</script>

<style scoped>

</style>