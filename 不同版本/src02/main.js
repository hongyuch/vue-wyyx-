
import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App'
//加载mockServer
import './mock/mockServer'
//表单验证
import './validate.js'
import './api'

import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
