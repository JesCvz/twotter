<template>
  <form class="user-profile_create-twoot" @submit.prevent="createNewTwoot" :class="{'--exceeded': newTwootCharacterCount>110}">
    <label for="newTwoot"><strong>New Twoot</strong> ({{ newTwootCharacterCount }}/110)</label>
    <textarea class="newTwoot" rows="4" v-model="state.newTwootContent"/>

    <div class="user-profile_create-twoot-type">
      <label for="newTwootType"><strong>Type: </strong></label>

      <select id="newTwootType" v-model="state.selectedTwootType">
        <option :value="option.value" v-for="(option, index) in state.twootTypes" :key="index">
          {{ option.name }}
        </option>
      </select>
    </div>

    <button class="btn-primary">
      Twoot!
    </button>

  </form>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
name: "CreateTwoot",
  setup(props, ctx){
    const state = reactive({
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        {value: 'draft', name:'Draft'},
        {value: 'instant', name:'Instant Twoot'}]
    })

    const newTwootCharacterCount = computed(()=>state.newTwootContent.length)

    function createNewTwoot(){
      if(state.newTwootContent && state.selectedTwootType !== 'draft')
      {
        if(state.newTwootContent.length<=110)
        {
          ctx.emit('addtwoot', state.newTwootContent);
          state.newTwootContent = '';
        }
      }
    }

    return{
      state,
      newTwootCharacterCount,
      createNewTwoot,
    }
  },
}
</script>

<style scoped>

</style>