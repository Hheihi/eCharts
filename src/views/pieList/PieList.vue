<template>
  <div>
    <div ref="pieList" id="pieList" class="pieList">
      <h1 class="title">饼图</h1>
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
      <InitDialog ref="dialog" :title="optionsName"  :id="id" />
    </div>
  </div>
</template>

<script>
import InitDialog from "@/components/InitDialog.vue";
import draggable from "vuedraggable";
import { Col } from "element-ui";
import { cloneDeep, merge } from "lodash";

export default {
  name: "PieList",
  data() {
    return {
      list: [
        {
          id: "chart9",
          options: {
            name: "圆角环形图",
            desc: "Doughnut Chart with Rounded Corner",
            tooltip: {
              trigger: "item",
            },
            legend: {
              top: "5%",
              left: "center",
            },
            series: [
              {
                name: "Access From",
                type: "pie",
                radius: ["20%", "70%"],
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 10,
                  borderColor: "#fff",
                  borderWidth: 2,
                },
                label: {
                  show: false,
                  position: "center",
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: "40",
                    fontWeight: "bold",
                  },
                },
                labelLine: {
                  show: false,
                },
                data: [
                  { value: 1048, name: "Search Engine" },
                  { value: 735, name: "Direct" },
                  { value: 580, name: "Email" },
                  { value: 484, name: "Union Ads" },
                  { value: 300, name: "Video Ads" },
                ],
              },
            ],
          },
        },
        {
          id: "chart10",
          options: {
            name: "基础南丁格尔玫瑰图",
            legend: {
              top: "top",
            },
            series: [
              {
                name: "Nightingale Chart",
                type: "pie",
                radius: ["20%", "50%"],
                center: ["50%", "50%"],
                roseType: "area",
                data: [
                  { value: 40, name: "rose 1" },
                  { value: 38, name: "rose 2" },
                  { value: 32, name: "rose 3" },
                  { value: 30, name: "rose 4" },
                  { value: 28, name: "rose 5" },
                  { value: 26, name: "rose 6" },
                  { value: 22, name: "rose 7" },
                  { value: 18, name: "rose 8" },
                ],
              },
            ],
          },
        },
        {
          id: "chart11",
          options: {
            name: "饼图标签对齐",
            series: [
              {
                type: "pie",
                radius: ["", "50%"],
                center: ["50%", "50%"],
                data: [
                  {
                    name: "Apples",
                    value: 70,
                  },
                  {
                    name: "Strawberries",
                    value: 68,
                  },
                  {
                    name: "Bananas",
                    value: 48,
                  },
                  {
                    name: "Oranges",
                    value: 40,
                  },
                  {
                    name: "Pears",
                    value: 32,
                  },
                  {
                    name: "Pineapples",
                    value: 27,
                  },
                  {
                    name: "Grapes",
                    value: 18,
                  },
                ],
                label: {
                  position: "outer",
                  alignTo: "labelLine",
                  bleedMargin: 5,
                },
              },
            ],
          },
        },
        {
          id: "chart12",
          options: {
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b}: {c} ({d}%)",
            },
            legend: {
              data: ["Union Ads", "Video Ads", "Google", "Bing", "Others"],
            },
            series: [
              {
                name: "Access From",
                type: "pie",
                selectedMode: "single",
                radius: [0, "15%"],
                label: {
                  position: "inner",
                  fontSize: 14,
                },
                labelLine: {
                  show: false,
                },
                data: [
                  { value: 1548, name: "Search Engine" },
                  { value: 775, name: "Direct" },
                  { value: 679, name: "Marketing", selected: true },
                ],
              },
              {
                name: "Access From",
                type: "pie",
                radius: ["30%", "45%"],
                labelLine: {
                  length: 30,
                },
                label: {
                  formatter: "{b|{b}:}{d}%  ",
                  backgroundColor: "#F6F8FC",
                  borderColor: "#8C8D8E",
                  borderWidth: 1,
                  borderRadius: 4,
                  rich: {
                    a: {
                      color: "#6E7079",
                      lineHeight: 10,
                      align: "center",
                    },
                    hr: {
                      borderColor: "#8C8D8E",
                      width: "100%",
                      borderWidth: 1,
                      height: 0,
                    },
                    b: {
                      color: "#4C5058",
                      fontSize: 14,
                      fontWeight: "bold",
                      lineHeight: 30,
                    },
                    per: {
                      color: "#fff",
                      backgroundColor: "#4C5058",
                      borderRadius: 4,
                    },
                  },
                },
                data: [
                  { value: 251, name: "Google" },
                  { value: 234, name: "Union Ads" },
                  { value: 147, name: "Bing" },
                  { value: 135, name: "Video Ads" },
                  { value: 102, name: "Others" },
                ],
              },
            ],
          },
        },
      ],
      optionsName: "",
      type: "pie",
      id: "pieList-charts",
    };
  },
  components: {
    InitDialog,
    draggable,
    Col,
  },

  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      let chart9 = this.$eCharts.init(document.getElementById("chart9"));
      let chart10 = this.$eCharts.init(document.getElementById("chart10"));
      let chart11 = this.$eCharts.init(document.getElementById("chart11"));
      let chart12 = this.$eCharts.init(document.getElementById("chart12"));

      // 绘制图表
      chart9.setOption(this.list[0].options);
      chart10.setOption(this.list[1].options);
      chart11.setOption(this.list[2].options);
      chart12.setOption(this.list[3].options);
    },
    dialogTableVisible(options) {
      //点击 赋值之前 恢复默认表单
      const form = {
        name: "",
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
      this.$store.commit("changeType", this.type);
      this.optionsName = options.name;
      //模态框组件的隐藏显示属性
      this.$refs["dialog"].visible = true;

      //在模态框中绘制图形
      this.$refs["dialog"].drawDialogChart(options);

      //每次给表单赋值之前都清空表单
      this.$store.commit("changeForm", cloneDeep(merge(form, options)));
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

.pieList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>