import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    lineForm: {
      name: "",
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
        },
      ],
    },
    barForm: {
      name: "",
      xAxis: {
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
      },

      yAxis: {
        //y轴字体颜色 粗细
        axisLabel: {
          color: "",
          fontSize: "",
        },
      },
      series: [
        {
          itemStyle: {
            color: "",
          }
        },
      ],
    },
    pieForm: {
      name: "",
      series: [
        {
          itemStyle: {
            borderRadius: undefined,//圆角大小
            borderColor: "",//边框颜色
            borderWidth: undefined,//边框粗细
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,//阴影长度
              shadowOffsetX: 0,//阴影偏移量
              shadowColor: ''//阴影颜色
            }
          }
        }
      ]
    },
    treeForm: {
      name: "",
      series: [
        {
          orient: "LR",
          label: {
            position: "right"
          },
          //线条形状
          edgeShape: "polyline",
          //节点颜色
          itemStyle: {
            color: "",
          },
          //线条颜色 粗细
          lineStyle: {
            color: "",
            width: undefined,
          },
          //节点聚焦
          emphasis: {
            focus: 'ancestor',
            blurScope: 'global',
          }
        }
      ]
    },
    scatterForm: {
      name: "",
      xAxis: {
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
      },
      yAxis: {
        //y轴字体颜色 粗细
        axisLabel: {
          color: "",
          fontSize: "",
        },
      },
      series: [
        {
          //点的颜色
          itemStyle: {
            color: "",
          },
        },
      ],
    }
  },
  mutations: {
    changeLine(state, payload) {
      state.lineForm = payload
    },
    changeBar(state,payload){
      state.barForm = payload
    },
    changePie(state,payload){
      state.pieForm = payload
    },
    changeTree(state,payload){
      state.treeForm = payload
    },
    changeScatter(state,payload){
      state.scatterForm = payload
    }
  }
})
export default store