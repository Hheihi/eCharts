<template>
  <div>
    <div ref="lineList" id="lineList" class="lineList">
      <h1 class="title">折线图</h1>

      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          id="myChart"
          @click="dialogTableVisible(options1)"
        ></div>
        <!-- <p class="optionsName">{{ options.name }}</p>
      <p class="optionsDesc">{{ options.desc }}</p> -->
      </el-col>
      <el-col :span="6"
        ><div
          class="grid-content bg-purple"
          id="chart"
          @click="dialogTableVisible(options2)"
        ></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-dialog
        :title="optionsTitle"
        :visible.sync="visible"
        @closed="dialogClose"
      >
        <div id="dialog-echarts" class="dialog-echarts"></div>
        <el-form
          :inline="true"
          :model="getOptionsForm"
          class="demo-form-inline"
        >
          <el-form-item label="x轴线条颜色:">
            <el-input
              placeholder="x轴线条颜色:"
              @input="changeOptions"
            ></el-input>
          </el-form-item>
          <el-form-item label="x轴线条粗细:">
            <el-input placeholder="x轴线条粗细"></el-input>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "EchartsList",
  data() {
    return {
      options1: {
        type: "continuous",
        name: "基础折线图",
        desc: "Basic Line Chart",
        xAxis: {
          type: "category",
          //x轴线条 颜色 粗细
          axisLine: {
            lineStyle: {
              color: "rgba(300, 44, 44, 1)",
              width: 3,
            },
          },
          //x轴字体颜色字号
          axisLabel: {
            color: "rgba(231, 200, 37, 1)",
            fontSize: 12,
          },
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      },
      options2: {
        name: "基础平滑折线图",
        xAxis: {
          type: "category",
          //x轴线条 颜色 粗细
          axisLine: {
            lineStyle: {
              color: "rgba(255, 44, 44, 1)",
              width: 3,
            },
          },
          //x轴字体颜色字号
          axisLabel: {
            color: "rgba(67, 67, 67, 1)",
            fontSize: 12,
          },
          //  x轴数据
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },

        yAxis: {
          type: "value",
          //y轴线条颜色 粗细
          axisLine: {
            lineStyle: {
              width: 3,
              color: "rgba(255, 44, 44, 1)",
            },
          },
          //y轴字体颜色 粗细
          axisLabel: {
            color: "rgba(67, 67, 67, 1)",
          },
        },
        series: [
          {
            //线条走向数据
            data: [820, 932, 901, 934, 200, 1000, 900],
            type: "line",
            smooth: true,
            //线条样式
            lineStyle: {
              type: "dotted",
              color: "#759aa0",
              width: "5",
            },
          },
        ],
      },
      visible: false,
      optionsName: "",
      optionsForm: {

      },
    };
  },
  computed: {
    optionsTitle() {
      return this.optionsName;
    },
    getOptionsForm() {
      return this.optionsForm;
    },
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$eCharts.init(document.getElementById("myChart"));
      let Chart = this.$eCharts.init(document.getElementById("chart"));

      // 绘制图表
      myChart.setOption(this.options1);
      Chart.setOption(this.options2);
    },
    dialogTableVisible(options) {
      //把点击的模态框的 图形数据复制给表单
      this.visible = true;
      this.optionsForm = options;
      this.optionsName = options.name;
      console.log(this.optionsForm);
      // 打开el_dialog时，dom元素还没有渲染完成，可使用Vue.nextTick解决问题
      this.$nextTick(() => {
        let dialogEcharts = this.$eCharts.init(
          document.getElementById("dialog-echarts")
        );
        dialogEcharts.setOption(options);
      });
    },
    //关闭模态框
    dialogClose() {
      let dialogEcharts = this.$eCharts.init(
        document.getElementById("dialog-echarts")
      );
      // dialogEcharts.dispose(); //销毁
      dialogEcharts.clear(); //清空画布
    },
    changeOptions() {},
  },
};
</script>

<style scoped>
.el-col {
  display: inline-block;
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
.lineList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.dialog-echarts {
  width: 400px;
  height: 400px;
  display: inline-block;
}
</style>