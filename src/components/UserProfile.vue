<template>
  <div class="user-profile">
    <div class="user-profile_user-panel">
      <h1 class="user-profile_username">@{{ user.username }}</h1>
      <div class="user-profile_admin-badge" v-if="user.isAdmin">
        Admin
      </div>
      <div class="user-profile_follower-count">
        <strong>Followers: </strong> {{ followers }}
      </div>
      <form class="user-profile_create-twoot" @submit.prevent="createNewTwoot" :class="{'--exceeded': newTwootCharacterCount>180}">
        <label for="newTwoot"><strong>New Twoot</strong>({{ newTwootCharacterCount }}/180)</label>
        <textarea class="newTwoot" rows="4" v-model="newTwootContent"/>

        <div class="user-profile_create-twoot-type">
          <label for="newTwootType"><strong>Type: </strong></label>
          <select id="newTwootType" v-model="selectedTwootType">
            <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
              {{ option.name }}
            </option>
          </select>
        </div>

          <button>
            Twoot!
          </button>

      </form>
    </div>
    <div class="user-profile_twoots">
      <TWOOTS v-for="twoot in user.twoots"
              :key="twoot.id"
              :username="user.username"
              :twoot="twoot"
              @favorite="toggleFavorite"
      />
    </div>
  </div>
</template>

<script>

import TWOOTS from "@/components/TWOOTS";
export default {
  name: 'App',
  components: {TWOOTS},
  data(){
    return{
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        {value: 'draft', name:'Draft'},
        {value: 'instant', name:'Instant Twoot'},
      ],
      followers: 0,
      user: {
        id: 1,
        username: 'JesRX',
        firstName: 'Jesus',
        lastName: 'Marroquin',
        email: 'jes@hotmail.com',
        isAdmin: true,
        twoots: [
            {id:1, content: 'Twotter is the best Twitter'},
            {id:2, content: 'Wasup bitches'},
            {id:3, content: 'Follow me on Twitch'},
            {id:4, content: 'MCARE is rising..'},
        ]
      }
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if(oldFollowerCount<newFollowerCount)
      {
        console.log(`${this.user.username} has gained a follower!`)
      }
    }
  },
  computed: {
    newTwootCharacterCount(){
      return this.newTwootContent.length;
    }
  },
  methods: {
    followUser(){
      this.followers++;
    },
    toggleFavorite(id){
      console.log(`Favorite Tweet #${id}`)
    },
    createNewTwoot(){
      if(this.newTwootContent && this.selectedTwootType !== 'draft'){
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwootContent
        })
        this.newTwootContent = '';
      }
    }
  },
  mounted() {
    this.followUser();
  },
}
</script>

<style lang="scss" scoped>

  .user-profile{
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;


    .user-profile_user-panel{
      display: flex;
      flex-direction: column;
      margin-right: 50px;
      padding: 15px;
      background-color: white;
      border-radius: 5px;
      border: 1px solid #DFE3E8;

      h1{
        margin: 0;
      }

      .user-profile_admin-badge{
        background-color: green;
        color: white;
        border-radius: 5px;
        margin-right: auto;
        padding:0 10px;
        font-weight: bold;
      }

      .user-profile_create-twoot{
        border-top:1px solid cyan ;
        padding-top: 20px;
        display: flex;
        flex-direction: column;

        &.--exceeded{
          color: red;
          button {
            background-color: red;
            border:none;
            color: white;

          }
        }

      }
    }
  }

</style>