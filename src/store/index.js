import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null
  },

  //mutation functions that affect the state
  mutations: {
    SET_USER(state, user){
      state.user = user;
    }

  },

  //actions functions that you call theought your application that call mutation
  actions: {
    setUser({commit}, user){
      commit('SET_USER', user);
    }
  },

  modules: {

  }
})
