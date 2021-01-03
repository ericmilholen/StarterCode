// [IMPORT] //
import Vue from 'vue'

// [IMPORT] Personal //
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
