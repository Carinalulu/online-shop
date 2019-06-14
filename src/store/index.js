/**
 * Created by 111 on 2019/5/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

/* eslint-disable no-new */
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
