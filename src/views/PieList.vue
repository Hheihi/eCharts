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
        <el-col :span="6">
          <div
            class="grid-content bg-purple"
            id="chart9"
            @click="dialogTableVisible(options1)"
          ></div>
        </el-col>
        <el-col :span="6"
          ><div
            class="grid-content bg-purple-light"
            id="chart10"
            @click="dialogTableVisible(options2)"
          ></div
        ></el-col>
        <el-col :span="6"
          ><div
            class="grid-content bg-purple"
            id="chart11"
            @click="dialogTableVisible(options3)"
          ></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </draggable>
      <Dialog ref="dialog" :title="optionsTitle" :type="type" />
    </div>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog.vue";
import draggable from "vuedraggable";

export default {
  name: "PieList",
  components: { Dialog, draggable },
  data() {
    return {
      options1: {
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
      options2: {
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
      options3: {
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
      optionsName: "",
      type: "pie",
    };
  },
  computed: {
    optionsTitle() {
      return this.optionsName;
    },
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

      // 绘制图表
      chart9.setOption(this.options1);
      chart10.setOption(this.options2);
      chart11.setOption(this.options3);
    },
    dialogTableVisible(options) {
      this.optionsName = options.name;
      //模态框组件的隐藏显示属性
      this.$refs["dialog"].visible = true;
      //在模态框中绘制图形
      this.$refs["dialog"].drawDialogChart(options);
      //点击 赋值之前 恢复默认表单
      this.$store.state.pieForm = {
        name: "",
        series: [
          {
            radius: ["", ""],
            itemStyle: {
              borderRadius: undefined, //圆角大小
              borderColor: "", //边框颜色
              borderWidth: undefined, //边框粗细
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10, //阴影长度
                shadowOffsetX: 0, //阴影偏移量
                shadowColor: "", //阴影颜色
              },
            },
          },
        ],
      };
      //每次给表单赋值之前都清空表单
      this.$store.commit(
        "changeLine",
        this._.cloneDeep(
          this._.merge(this.$store.state.pieForm, this._.cloneDeep(options))
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
.pieList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>