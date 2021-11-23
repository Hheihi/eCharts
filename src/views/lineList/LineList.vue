<template>
  <div>
    <div ref="lineList" id="lineList" class="lineList">
      <h1 class="title">折线图</h1>
      <draggable
        chosenClass="chosen"
        forceFallback="true"
        group="line"
        animation="1000"
      >
        <el-col :span="6" v-for="item in list" :key="item.id">
          <div
            class="grid-content bg-purple"
            :id="item.id"
            @click="dialogTableVisible(item.options)"
          ></div>
        </el-col>
      </draggable>
      <Dialog ref="dialog" :title="optionsName" :type="type" :id="id"/>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Dialog from "@/components/Dialog.vue";
export default {
  name: "EchartsList",
  components: { Dialog, draggable },
  data() {
    return {
      list: [
        {
          id: "chart1",
          options: {
            type: "continuous",
            name: "基础折线图",
            desc: "Basic Line Chart",
            tooltip: {
              trigger: "axis",
            },
            legend: {
              data: ["bendan"],
              selected: { bendan: true },
            },
            xAxis: {
              type: "category",
              //x轴线条 颜色 粗细
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },

            yAxis: {
              type: "value",
            },
            series: [
              {
                name: "bendan",
                data: [150, 230, 224, 218, 135, 147, 260],
                type: "line",
                lineStyle: {
                  width: 2,
                },
              },
            ],
          },
        },
        {
          id: "chart2",
          options: {
            name: "基础平滑折线图",
            xAxis: {
              type: "category",
              //  x轴数据
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },

            yAxis: {
              type: "value",
              //y轴线条颜色 粗细
            },
            series: [
              {
                //线条走向数据
                data: [820, 932, 901, 934, 200, 1000, 900],
                type: "line",
                smooth: true,
                //线条样式
                lineStyle: {
                  width: 1,
                },
              },
            ],
          },
        },
        {
          id: "chart3",
          options: {
            name: "未来一周气温变化",
            tooltip: {
              trigger: "axis",
            },
            legend: {},

            xAxis: {
              type: "category",
              boundaryGap: false,
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            yAxis: {
              type: "value",
              axisLabel: {
                formatter: "{value} °C",
              },
            },
            series: [
              {
                name: "Highest",
                type: "line",
                data: [10, 11, 13, 11, 12, 12, 9],
                markPoint: {
                  data: [
                    { type: "max", name: "Max" },
                    { type: "min", name: "Min" },
                  ],
                },
                markLine: {
                  data: [{ type: "average", name: "Avg" }],
                },
              },
              {
                name: "Lowest",
                type: "line",
                data: [1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                  data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
                },
                markLine: {
                  data: [
                    { type: "average", name: "Avg" },
                    [
                      {
                        symbol: "none",
                        x: "90%",
                        yAxis: "max",
                      },
                      {
                        symbol: "circle",
                        label: {
                          position: "start",
                          formatter: "Max",
                        },
                        type: "max",
                        name: "最高点",
                      },
                    ],
                  ],
                },
              },
            ],
          },
        },
        {
          id: "chart4",
          options: {
            name: "一天用电量分布",
            title: {},
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross",
              },
            },
            xAxis: {
              type: "category",
              boundaryGap: false,
              // prettier-ignore
              data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
            },
            yAxis: {
              type: "value",
              axisLabel: {
                formatter: "{value} W",
              },
              axisPointer: {
                snap: true,
              },
            },
            visualMap: {
              show: false,
              dimension: 0,
              pieces: [
                {
                  lte: 6,
                  color: "green",
                },
                {
                  gt: 6,
                  lte: 8,
                  color: "red",
                },
                {
                  gt: 8,
                  lte: 14,
                  color: "green",
                },
                {
                  gt: 14,
                  lte: 17,
                  color: "red",
                },
                {
                  gt: 17,
                  color: "green",
                },
              ],
            },
            series: [
              {
                name: "Electricity",
                type: "line",
                smooth: true,
                // prettier-ignore
                data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                markArea: {
                  itemStyle: {
                    color: "rgba(255, 173, 177, 0.4)",
                  },
                  data: [
                    [
                      {
                        name: "Morning Peak",
                        xAxis: "07:30",
                      },
                      {
                        xAxis: "10:00",
                      },
                    ],
                    [
                      {
                        name: "Evening Peak",
                        xAxis: "17:30",
                      },
                      {
                        xAxis: "21:15",
                      },
                    ],
                  ],
                },
              },
            ],
          },
        },
      ],
      optionsName: "",
      type: "line",
      id:"lineList-charts"
    };
  },
  computed: {
    // optionsTitle() {
    //   return this.optionsName;
    // },
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      let chart1 = this.$eCharts.init(document.getElementById("chart1"));
      let chart2 = this.$eCharts.init(document.getElementById("chart2"));
      let chart3 = this.$eCharts.init(document.getElementById("chart3"));
      let chart4 = this.$eCharts.init(document.getElementById("chart4"));

      // 绘制图表
      chart1.setOption(this.list[0].options);
      chart2.setOption(this.list[1].options);
      chart3.setOption(this.list[2].options);
      chart4.setOption(this.list[3].options);
    },
    //点击每一个画布
    dialogTableVisible(options) {
      // debugger
      this.optionsName = options.name;
      //模态框组件的隐藏显示属性
      this.$refs["dialog"].visible = true;
      //在模态框中绘制图形
      this.$refs["dialog"].drawDialogChart(options);
      //点击 赋值之前 恢复默认表单
      this.$store.state.lineForm = {
        name: "",
        xAxis: {
          type: "",
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
          type: "",
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
      };
      //每次给表单赋值之前都清空表单
      this.$store.commit(
        "changeForm",
        this._.cloneDeep(
          this._.merge(this.$store.state.lineForm, options)
        )
      );
    },
  },
};
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  width: 400px;
  height: 400px;
  margin-bottom: 20px;
  margin-left: 5px;
  border-radius: 4px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
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