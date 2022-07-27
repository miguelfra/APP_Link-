import axios from 'axios'
const token = localStorage.getItem('token')
export default {
    namespaced: true,
    state: {
       token: ''
    },
    getters: {
    },
    mutations: {
     authToken(state, token) {
        state.token = token
     }
    },

    actions: {
      ActionToken({commit}) {
        const token = localStorage.getItem('token')
        if(token) {           
          commit('authToken', token)
        } 
      },

      Logout({commit}){
        localStorage.removeItem('token')
        window.location.href = '/signin'
      }
    },
}