<template>
  <div>
    <div ref="pieList" id="pieList" class="pieList">
    <h1 class="title">饼图</h1>

      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          id="pieChart"
          @click="dialogTableVisible(options)"
        ></div>
        <!-- <p class="optionsName">{{ options.name }}</p>
      <p class="optionsDesc">{{ options.desc }}</p> -->
      </el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>

      <el-dialog title="详细配置" :visible.sync="visible"> </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "PieList",
  data() {
    return {
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
            radius: ["40%", "70%"],
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
      visible: false,
    };
  },
  components: {},
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$eCharts.init(document.getElementById("pieChart"));

      // 绘制图表
      myChart.setOption(this.options);
    },
    dialogTableVisible(options) {
      this.visible = true;
      console.log(options);
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

  border-radius: 4px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.optionsName {
  font-size: 16px;
  color: #293c55;
  flex: 1;
}
.optionsDesc {
  font-size: 14px;
  color: #aaa;
  flex: 1;
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
}
</style>