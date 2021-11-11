<template>
  <div>
    <div ref="scatterList" id="scatterList" class="scatterList">
    <h1 class="title">散点图</h1>

      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          id="scatterChart"
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
  name: "ScatterList",
  data() {
    return {
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
      let myChart = this.$eCharts.init(document.getElementById("scatterChart"));

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
.scatterList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>