import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deviceType: 'desktop'
  },
  getters: {
    currentDevice: state => {
      return state.deviceType
    }
  },
  mutations: {
    setDevice (state, payload) {
      state.deviceType = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
