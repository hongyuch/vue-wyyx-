
import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App'
//加载mockServer
import './mock/mockServer'

import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
