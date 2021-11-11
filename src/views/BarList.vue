<template>
  <div>

    <div ref="barList" id="barList" class="barList">
    <h1 class="title">柱状图</h1>

      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          id="barChart"
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
  name: "BatList",
  data() {
    return {
      options: {
        name: "柱状图",
        desc: "Bar with Background",
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
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
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
      let myChart = this.$eCharts.init(document.getElementById("barChart"));

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
.barList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>