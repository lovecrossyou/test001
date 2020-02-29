import Vue from 'vue'
import Vuex from 'vuex'
import commentStore from './modules/comment'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    commentStore,
  },
})