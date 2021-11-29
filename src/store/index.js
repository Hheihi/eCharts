import Vue from 'vue'
import Vuex from 'vuex'
import lineForm from '@/store/modules/lineForm'
import barForm from '@/store/modules/barForm'
import pieForm from '@/store/modules/pieForm'
import treeForm from '@/store/modules/treeForm'
import scatterForm from '@/store/modules/scatterForm'


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