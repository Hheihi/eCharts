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
        <el-col :span="6" v-for="item in list" :key="item.id">
          <div
            class="grid-content bg-purple"
            :id="item.id"
            @click="dialogTableVisible(item.options)"
          ></div>
        </el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </draggable>
      <Dialog ref="dialog" :type="type" :title="optionsName" :id="id"/>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Dialog from "@/components/Dialog.vue";
export default {
  name: "ScatterList",
  components: {
    Dialog,
    draggable,
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
      ],
      optionsName: "",
      type: "scatter",
      id:"scatterList-charts"
    };
  },
  computed: {
  
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      let chart13 = this.$eCharts.init(document.getElementById("chart13"));
      // 绘制图表
      chart13.setOption(this.list[0].options);
    },
    dialogTableVisible(options) {
      this.optionsName = options.name;
      //模态框组件的隐藏显示属性
      this.$refs["dialog"].visible = true;
      //在模态框中绘制图形
      this.$refs["dialog"].drawDialogChart(options);
      //点击 赋值之前 恢复默认表单
      this.$store.state.scatterForm = {
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
      };
      //每次给表单赋值之前都清空表单
      this.$store.commit(
        "changeForm",
        this._.cloneDeep(
          this._.merge(this.$store.state.scatterForm, this._.cloneDeep(options))
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
.scatterList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>