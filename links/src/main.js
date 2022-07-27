import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import timeago from './plugins/VueTimeago'
import sweetalert2 from './plugins/Sweetalert2'

Vue.config.productionTip = false

new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount('#app')
