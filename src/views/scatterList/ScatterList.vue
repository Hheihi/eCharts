<template>
  <div>
    <div ref="scatterList" id="scatterList" class="scatterList">
      <h1 class="title">散点图</h1>
      <draggable
        chosenClass="chosen"
        forceFallback="true"
        group="bar"
        animation="1000"
      >
        <Col :span="6" v-for="item in list" :key="item.id">
          <div
            class="grid-content bg-purple"
            :id="item.id"
            @click="dialogTableVisible(item.options)"
          ></div>
        </Col>
        <Col :span="6"><div class="grid-content bg-purple"></div></Col>
      </draggable>
      <InitDialog ref="dialog"  :title="optionsName" :id="id" />
    </div>
  </div>
</template>

<script>
import { Col } from "element-ui";
import draggable from "vuedraggable";
import InitDialog from "@/components/InitDialog.vue";
import { cloneDeep, merge } from "lodash";

export default {
  name: "ScatterList",
  components: {
    InitDialog,
    draggable,
    Col,
  },
  data() {
    return {
      list: [
        {
          id: "chart13",
          options: {
            name: "基础散点图",
            desc: "Basic Scatter Chart",
            xAxis: {},
            yAxis: {},
            series: [
              {
                symbolSize: 20,
                data: [
                  [10.0, 8.04],
                  [8.07, 6.95],
                  [13.0, 7.58],
                  [9.05, 8.81],
                  [11.0, 8.33],
                  [14.0, 7.66],
                  [13.4, 6.81],
                  [10.0, 6.33],
                  [14.0, 8.96],
                  [12.5, 6.82],
                  [9.15, 7.2],
                  [11.5, 7.2],
                  [3.03, 4.23],
                  [12.2, 7.83],
                  [2.02, 4.47],
                  [1.05, 3.33],
                  [4.05, 4.96],
                  [6.03, 7.24],
                  [12.0, 6.26],
                  [12.0, 8.84],
                  [7.08, 5.82],
                  [5.02, 5.68],
                ],
                type: "scatter",
              },
            ],
          },
        },
        {
          id: "chart14",
          options: {
            name: "指数回归",
            dataset: [
              {
                source: [
                  [1, 4862.4],
                  [2, 5294.7],
                  [3, 5934.5],
                  [4, 7171.0],
                  [5, 8964.4],
                  [6, 10202.2],
                  [7, 11962.5],
                  [8, 14928.3],
                  [9, 16909.2],
                  [10, 18547.9],
                  [11, 21617.8],
                  [12, 26638.1],
                ],
              },
              {
                transform: {
                  type: "ecStat:regression",
                  config: {
                    method: "exponential",
                    // 'end' by default
                    // formulaOn: 'start'
                  },
                },
              },
            ],
            title: {
              text: "1981 - 1998 gross domestic product GDP (trillion yuan)",
              subtext: "By ecStat.regression",
              sublink: "https://github.com/ecomfe/echarts-stat",
              left: "center",
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross",
              },
            },
            xAxis: {
              splitLine: {
                lineStyle: {
                  type: "dashed",
                },
              },
            },
            yAxis: {
              splitLine: {
                lineStyle: {
                  type: "dashed",
                },
              },
            },
            series: [
              {
                name: "scatter",
                type: "scatter",
                datasetIndex: 0,
              },
              {
                name: "line",
                type: "line",
                smooth: true,
                datasetIndex: 1,
                symbolSize: 0.1,
                symbol: "circle",
                label: { show: true, fontSize: 16 },
                labelLayout: { dx: -20 },
                encode: { label: 2, tooltip: 1 },
              },
            ],
          },
        },
        {
          id: "chart15",
          options: {
            name: "基础雷达图",
            legend: {
              data: ["Allocated Budget", "Actual Spending"],
            },
            radar: {
              // shape: 'circle',
              indicator: [
                { name: "Sales", max: 6500 },
                { name: "Administration", max: 16000 },
                { name: "Information Technology", max: 30000 },
                { name: "Customer Support", max: 38000 },
                { name: "Development", max: 52000 },
                { name: "Marketing", max: 25000 },
              ],
            },
            series: [
              {
                name: "Budget vs spending",
                type: "radar",
                data: [
                  {
                    value: [4200, 3000, 20000, 35000, 50000, 18000],
                    name: "Allocated Budget",
                  },
                  {
                    value: [5000, 14000, 28000, 26000, 42000, 21000],
                    name: "Actual Spending",
                  },
                ],
              },
            ],
          },
        },
      ],
      optionsName: "",
      type: "scatter",
      id: "scatterList-charts",
    };
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      let chart13 = this.$eCharts.init(document.getElementById("chart13"));
      let chart14 = this.$eCharts.init(document.getElementById("chart14"));
      let chart15 = this.$eCharts.init(document.getElementById("chart15"));
      // let chart16 = this.$eCharts.init(document.getElementById("chart16"));
      // 绘制图表
      chart13.setOption(this.list[0].options);
      chart14.setOption(this.list[1].options);
      chart15.setOption(this.list[2].options);
      // chart16.setOption(this.list[3].options);
    },
    dialogTableVisible(options) {
      this.optionsName = options.name;
      //模态框组件的隐藏显示属性
      this.$refs["dialog"].visible = true;
      //在模态框中绘制图形
      this.$refs["dialog"].drawDialogChart(options);
      this.$store.commit("changeType", this.type);

      //每次给表单赋值之前都清空表单
      const form = {
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
              borderRadius: undefined, //圆角大小
              borderColor: "", //边框颜色
              borderWidth: undefined, //边框粗细
            },
            orient: "LR",
            label: {
              position: "right",
            },
            //线条形状
            edgeShape: "polyline",
            //节点聚焦
            emphasis: {
              focus: "ancestor",
              blurScope: "global",
              itemStyle: {
                shadowBlur: 10, //阴影长度
                shadowOffsetX: 0, //阴影偏移量
                shadowColor: "", //阴影颜色
              },
            },
          },
        ],
      };
      this.$store.commit("changeForm", form);
      this.$store.commit(
        "changeForm",
        cloneDeep(merge(this.$store.state.form, options))
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.grid-content {
  width: 400px;
  height: 400px;
  margin-bottom: 20px;
  margin-left: 5px;
  border-radius: 4px;
}

.bg-purple {
  background: #DEDEDE;
}

.title {
  width: 100%;
  flex-wrap: nowrap;
  display: block;
}

.scatterList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>