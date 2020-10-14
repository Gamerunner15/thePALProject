import { createStore } from 'vuex'

export default createStore({
  state: {
    tag: 'South Africa',
  },
  mutations: {
    updateTag(state, newTag){
      state.tag = newTag;
    }
  },
  actions: {
  },
  modules: {
  }
})
