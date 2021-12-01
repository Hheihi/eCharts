<template>
  <div>
    <div ref="barList" id="barList" class="barList">
      <h1 class="title">柱状图</h1>
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
      </draggable>
      <Dialog ref="dialog" :title="optionsName" :type="type" :id="id" />
    </div>
  </div>
</template>

<script>
const data = [];
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200));
}

function run() {
  for (var i = 0; i < data.length; ++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }
}
setTimeout(function () {
  run();
}, 0);
setInterval(function () {
  run();
}, 3000);
// prettier-ignore
// options3配置
const data3 = [
  [5000, 10000, 6785.71],
  [4000, 10000, 6825],
  [3000, 6500, 4463.33],
  [2500, 5600, 3793.83],
  [2000, 4000, 3060],
  [2000, 4000, 3222.33],
  [2500, 4000, 3133.33],
  [1800, 4000, 3100],
  [2000, 3500, 2750],
  [2000, 3000, 2500],
  [1800, 3000, 2433.33],
  [2000, 2700, 2375],
  [1500, 2800, 2150],
  [1500, 2300, 2100],
  [1600, 3500, 2057.14],
  [1500, 2600, 2037.5],
  [1500, 2417.54, 1905.85],
  [1500, 2000, 1775],
  [1500, 1800, 1650],
];
const cities = [
  "北京",
  "上海",
  "深圳",
  "广州",
  "苏州",
  "杭州",
  "南京",
  "福州",
  "青岛",
  "济南",
  "长春",
  "大连",
  "温州",
  "郑州",
  "武汉",
  "成都",
  "东莞",
  "沈阳",
  "烟台",
];
const barHeight = 50;
import { Col } from "element-ui";
import { cloneDeep, merge } from "lodash";
import draggable from "vuedraggable";
import Dialog from "@/components/Dialog.vue";
export default {
  name: "BatList",
  components: {
    Col,
    Dialog,
    draggable,
  },
  data() {
    return {
      list: [
        {
          id: "chart5",
          options: {
            name: "带背景的柱状图",
            xAxis: {
              type: "category",
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            yAxis: {
              type: "value",
            },
            series: [
              {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: "bar",
                showBackground: true,
              },
            ],
          },
        },
        {
          id: "chart6",
          options: {
            name: "交错正负轴标签",
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
              },
            },
            grid: {
              top: 80,
              bottom: 30,
            },
            xAxis: {
              type: "value",
              position: "top",
              splitLine: {
                lineStyle: {
                  type: "dashed",
                },
              },
            },
            yAxis: {
              type: "category",
              axisLine: { show: false },
              axisLabel: { show: false },
              axisTick: { show: false },
              splitLine: { show: false },
              data: [
                "ten",
                "nine",
                "eight",
                "seven",
                "six",
                "five",
                "four",
                "three",
                "two",
                "one",
              ],
            },
            series: [
              {
                name: "Cost",
                type: "bar",
                stack: "Total",
                label: {
                  show: true,
                  formatter: "{b}",
                },
                data: [
                  { value: -0.07, label: this.labelRight },
                  { value: -0.09, label: this.labelRight },
                  0.2,
                  0.44,
                  { value: -0.23, label: this.labelRight },
                  0.08,
                  { value: -0.17, label: this.labelRight },
                  0.47,
                  { value: -0.36, label: this.labelRight },
                  0.18,
                ],
              },
            ],
          },
        },
        {
          id: "chart7",
          options: {
            name: "Bar Chart on Polar",
            legend: {
              show: true,
              top: "bottom",
              data: ["Range", "Average"],
            },
            grid: {
              top: 100,
            },
            angleAxis: {
              type: "category",
              data: cities,
            },
            tooltip: {
              show: true,
              formatter: function (params) {
                const id = params.dataIndex;
                return (
                  cities[id] +
                  "<br>Lowest：" +
                  data3[id][0] +
                  "<br>Highest：" +
                  data3[id][1] +
                  "<br>Average：" +
                  data3[id][2]
                );
              },
            },
            radiusAxis: {},
            polar: {},
            series: [
              {
                type: "bar",
                itemStyle: {
                  color: "transparent",
                },
                data: data3.map(function (d) {
                  return d[0];
                }),
                coordinateSystem: "polar",
                stack: "Min Max",
                silent: true,
              },
              {
                type: "bar",
                data: data3.map(function (d) {
                  return d[1] - d[0];
                }),
                coordinateSystem: "polar",
                name: "Range",
                stack: "Min Max",
                itemStyle: {
                  color: "#443121",
                },
              },
              {
                type: "bar",
                itemStyle: {
                  color: "transparent",
                },
                data: data3.map(function (d) {
                  return d[2] - barHeight;
                }),
                coordinateSystem: "polar",
                stack: "Average",
                silent: true,
                z: 10,
              },
              {
                type: "bar",
                data: data3.map(function () {
                  return barHeight * 2;
                }),
                coordinateSystem: "polar",
                name: "Average",
                stack: "Average",
                barGap: "-100%",
                z: 10,
                itemStyle: {
                  color: "",
                },
              },
            ],
          },
        },
        {
          id: "chart8",
          options: {
            name: "动态排序柱状图",
            xAxis: {
              max: "dataMax",
            },
            yAxis: {
              type: "category",
              data: ["A", "B", "C", "D", "E"],
              inverse: true,
              animationDuration: 300,
              animationDurationUpdate: 300,
              max: 5, // only the largest 3 bars will be displayed
            },
            series: [
              {
                realtimeSort: true,
                name: "X",
                type: "bar",
                data: data,
                label: {
                  show: true,
                  position: "right",
                  valueAnimation: true,
                },
              },
            ],
            legend: {
              show: true,
            },
            animationDuration: 0,
            animationDurationUpdate: 3000,
            animationEasing: "linear",
            animationEasingUpdate: "linear",
          },
        },
      ],
      optionsName: "",
      type: "bar",
      id: "barList-charts",
    };
  },
  mounted() {
    this.draw();
  },

  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      let chart5 = this.$eCharts.init(document.getElementById("chart5"));
      let chart6 = this.$eCharts.init(document.getElementById("chart6"));
      let chart7 = this.$eCharts.init(document.getElementById("chart7"));
      let chart8 = this.$eCharts.init(document.getElementById("chart8"));

      // 绘制图表
      chart5.setOption(this.list[0].options);
      chart6.setOption(this.list[1].options);
      chart7.setOption(this.list[2].options);
      chart8.setOption(this.list[3].options);
    },
    dialogTableVisible(options) {
      //把点击的模态框的 图形数据复制给表单
      // this.optionsForm = options;
      this.optionsName = options.name;
      //模态框组件的隐藏显示属性
      this.$refs["dialog"].visible = true;
      //在模态框中绘制图形
      this.$refs["dialog"].drawDialogChart(options);
      //点击 赋值之前 恢复默认表单
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
      console.log(this.$store.state.form);
      //给vuex表单赋值 采用深拷贝
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

.lineList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>