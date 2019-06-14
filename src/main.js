// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer'
import VueLazyload from 'vue-lazyload'
import './filters'

import loading from './common/imgs/loading.gif'
Vue.use(VueLazyload, {
  loading
})

Vue.config.productionTip = false
// 注册全局组件标签
Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store // 使用vuex
})
