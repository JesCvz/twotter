<template>
  <div class="user-profile">
    <div class="user-profile_user-panel">
      <h1 class="user-profile_username">@{{ state.user.username }}</h1>
      <div class="user-profile_admin-badge" v-if="state.user.isAdmin">
        Admin
      </div>

      <div class="user-profile_follower-count">
        <strong>Followers: </strong> {{ state.followers }}
      </div>

      <app-create-twoot @addtwoot="addTwoot"/>
    </div>

    <div class="user-profile_twoots">
      <TWOOTS v-for="twoot in state.user.twoots"
              :key="twoot.id"
              :username="state.user.username"
              :twoot="twoot"
      />
    </div>

  </div>

</template>

<script>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router'
import users from "@/assets/Backend/users";
import TWOOTS from "@/components/TWOOTS";
import CreateTwoot from "@/components/CreateTwoot";
export default {
name: "UserProfiles",
  components:{
    TWOOTS,
    appCreateTwoot: CreateTwoot,
  },

  setup(){
    const route = useRoute();
    const userId = computed(() => route.params.userId)
    const state = reactive({
      user: users[userId.value - 1] || users[0]
    })

    function addTwoot(twoot){
      state.user.twoots.unshift({id: state.user.twoots.length + 1, content: twoot});
    }

    return{
      state,
      addTwoot,
      userId,
    }
  },
}
</script>
<style lang="scss" scoped>

.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;


  .user-profile_user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 15px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    width: 420px;
    height: 360px;

    h1 {
      margin: 0;
    }

    .user-profile_admin-badge {
      background-color: green;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }

    .user-profile_create-twoot {
      border-top: 2px solid cyan;
      padding-top: 20px;
      display: flex;
      flex-direction: column;

      &.--exceeded {
        color: red;

        button {
          background-color: red;
          border: none;
          color: white;

        }
      }

    }
    .btn-primary{
      margin-left: 287px;
      width: 100px;
      height: 30px;
      background-color: dodgerblue;
      border: 1px;
      color: white;
    }
  }
  .user-profile_create-twoot-type{
    margin-top: 10px;
  }
}
</style>