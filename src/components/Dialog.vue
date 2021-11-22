<template>
  <el-dialog :title="title" :visible.sync="visible" @closed="dialogClosed">
    <div id="dialog-echarts" class="dialog-echarts"></div>
    <LineForm v-if="type === 'line'" @change="changeOptions" />
    <BarForm v-if="type === 'bar'" @change="changeOptions" />
    <PieForm v-if="type === 'pie'" @change="changeOptions" />
    <TreeForm v-if="type === 'tree'" @change="changeOptions" />
    <ScatterForm v-if="type === 'scatter'" @change="changeOptions"/>
  </el-dialog>
</template>

<script>
import LineForm from "@/components/form/LineForm.vue";
import BarForm from "@/components/form/BarForm.vue";
import PieForm from "@/components/form/PieForm.vue";
import TreeForm from "@/components/form/TreeForm.vue";
import ScatterForm from '@/components/form/ScatterForm.vue';

export default {
  components: { LineForm, BarForm, PieForm, TreeForm,ScatterForm },
  name: "Dialog",
  props: {
    //模态框的标题
    type: {
      type: String,
      default: () => null,
    },
    title: {
      type: String,
      default: () => null,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    //清除画布
    destoryChart(id) {
      // id为画布的id
      let echarts = this.$eCharts.init(document.getElementById(id));
      //   echarts.dispose(); //销毁
      echarts.clear(); //清空画布
    },
    //关闭模态框 销毁实列	Dialog 关闭动画结束时的回调
    dialogClosed() {
      this.destoryChart("dialog-echarts");
    },
    //input框中的数值改变
    changeOptions(e) {
      //重新绘图之前销毁之前的图
      this.destoryChart("dialog-echarts");
      // 重新画图 值更新 图变化
      // console.log(e);
      this.drawDialogChart(e);
    },
    //在模态框中画图
    drawDialogChart(options) {
      // this.destoryChart("dialog-echarts");

      // 打开el_dialog时，dom元素还没有渲染完成，可使用Vue.nextTick解决问题
      this.$nextTick(() => {
        let dialogEcharts = this.$eCharts.init(
          document.getElementById("dialog-echarts")
        );

        dialogEcharts.setOption(options);
        //给图例添加监听
      });
    },
    
  },
};
</script>

<style scoped>
.dialog-echarts {
  width: 400px;
  height: 400px;
  display: inline-block;
}
</style>