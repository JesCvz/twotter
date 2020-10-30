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
      <form class="user-profile_create-twoot" @submit.prevent="createNewTwoot" :class="{'--exceeded': newTwootCharacterCount>110}">
        <label for="newTwoot"><strong>New Twoot</strong> ({{ newTwootCharacterCount }}/110)</label>
        <textarea class="newTwoot" rows="4" v-model="newTwootContent"/>
        <div class="user-profile_create-twoot-type">
          <label for="newTwootType"><strong>Type: </strong></label>
          <select id="newTwootType" v-model="selectedTwootType">
            <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
              {{ option.name }}
            </option>
          </select>
        </div>
        <button class="btn-primary">Twoot!</button>
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
name: "UserProfiles",
  components:{
  TWOOTS
  },
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
        username: 'JesusMarroquin',
        firstName: 'Jesus',
        lastName: 'Marroquin',
        email: 'jes@hotmail.com',
        isAdmin: true,
        twoots: [
          {id:1, content: '2.1 Proyecto 1'},
          {id:2, content: 'Esta es una pagina web hecha con el Framework de VUE que utiliza JavaScript y hojas de estilo'},
          {id:3, content: 'El proposito de utilizar este framework es que las paginas sean hechas dentro de un mismo HTML y al cargar nuevos componentes no se tenga que cargar de nuevo'},
          {id:4, content: 'Esta version de la página funciona con datos dentro de la pagina web pero se implementara una base de datos para administrar usuarios y las publicaciones de cada usuario'},
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