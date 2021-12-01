import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

let store = new Vuex.Store({
  namespaced: true,
  state: {
    form: {
      name: "",
      //x轴
      xAxis: {
        // type: "",
        //x轴线条 颜色 粗细
        axisLine: {
          lineStyle: {
            color: "",
            width: "1",
          },
        },
        //x轴字体颜色字号
        axisLabel: {
          color: "",
          fontSize: "",
        },
        //  x轴数据
        // data: [],
      },
      //y轴
      yAxis: {
        // type: "",
        //y轴字体颜色 粗细
        axisLabel: {
          color: "",
          fontSize: "",
        },
      },
      series: [
        {
          // data: [],
          // type: "",
          lineStyle: {
            type: "",
            color: "",
            width: "1",
          },
          itemStyle: {
            color: "",
            borderRadius: undefined,//圆角大小
            borderColor: "",//边框颜色
            borderWidth: undefined,//边框粗细
          },
          orient: "LR",
          label: {
            position: "right"
          },
          //线条形状
          edgeShape: "polyline",
          //节点聚焦
          emphasis: {
            focus: 'ancestor',
            blurScope: 'global',
            itemStyle: {
              shadowBlur: 10,//阴影长度
              shadowOffsetX: 0,//阴影偏移量
              shadowColor: ''//阴影颜色
            }
          }
        },
      ],
    }
  },
  mutations: {
    changeForm(state, payload) {

      state.form = payload

    },
  },
  modules: {

  }
})
export default store