import Vue from 'vue'
import Vuex from 'vuex'
import lineForm from '@/store/state/lineForm'
import barForm from '@/store/state/barForm'
import pieForm from '@/store/state/pieForm'
import treeForm from '@/store/state/treeForm'
import scatterForm from '@/store/state/scatterForm'


Vue.use(Vuex)

let store = new Vuex.Store({
  namespaced: true,
  state: {
    
  },
  mutations: {
    changeForm(state, payload) {
      switch (payload.series[0].type) {
        case 'line':
          state.lineForm = payload
          break;
        case 'bar':
          state.barForm = payload
          break;
        case 'pie':
          state.pieForm = payload
          break;
        case 'scatter':
          state.scatterForm = payload
          break;
        case 'tree':
          state.treeForm = payload
          break;
        default:
          break;
      }
    },
  },
  modules: {
    lineForm,
    barForm,
    pieForm,
    treeForm,
    scatterForm
  }
})
export default store