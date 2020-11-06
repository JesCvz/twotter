<template>
  <div class="home">
    <h1>home</h1>
    <div class="usuarios">
      <router-link v-for="user in users" :to="{name:'UserProfile', params: {userId: user.id}}" :key="user.id">
        {{user.username}}
      </router-link>
    </div>
  </div>
</template>

<script>
import users from "@/assets/Backend/users";
export default {
  name: 'Home',

  setup(){
    return{
      users
    }
  }
}
</script>

<style>
.home{
  padding: 50px;
}

.usuarios{
  display: flex;
  flex-direction: column;
}
a{
  text-decoration: none;
  color: inherit;
}

</style>