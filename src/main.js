import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'

import './assets/styles/index.css'
import router from './router'

Vue.use(Vuex);

Vue.config.productionTip = false

// const store = new Vuex.Store({
//   state: {
//     something: true,
//   },
//   mutations: {
//     switch(state) {
//       state.something = !state.someting;
//     }
//   }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
