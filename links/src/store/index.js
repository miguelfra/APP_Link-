import Vue from 'vue'
import Vuex from 'vuex'
import links from './modules/Links'
import auth from './modules/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {},
  actions: {
  },
  modules: {
    links,
    auth
  }
})
