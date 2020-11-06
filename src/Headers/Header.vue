<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="texto_left">
            <router-link to="/">
              <img src="../assets/img/twitterlogo.png" height="50" width="50">
              Twooter
            </router-link>
          </div>
        </div>
        <div class="col">
          <div class="texto_right" v-if="users">
            @{{users.username}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
export default {
name: "Header",
  setup(){
  const store = useStore();
  const users = computed(() => store.state.user);
    return{
      users
    }
  }
}
</script>

<style scoped>
.texto_left{
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: left;
  font-family: "Helvetica Neue";
  font-size: 1.5em;
  font-weight: 600;
  color: white;
}
.texto_right{
  margin-top: 13px;
  margin-bottom: 5px;
  margin-right: 10px;
  text-align: right;
  font-family: "Helvetica Neue";
  font-size: 1.5em;
  font-weight: 600;
  color: white;
}
a{
  color: inherit;
  text-decoration: none;
}
a:hover{
  color: inherit;
  text-decoration: none;
}

</style>