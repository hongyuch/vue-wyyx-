
import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App'

import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
