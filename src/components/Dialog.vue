<template>
  <Dialog :title="title" :visible.sync="visible" @closed="dialogClosed">
    <div :id="id" class="dialog-echarts"></div>
    <Form :type="type" @change="changeOptions" />
  </Dialog>
</template>

<script>
import Form from "@/components/Form.vue";
import { Dialog } from "element-ui";

export default {
  name: "el-Dialog",
  components: {
    Dialog,
    Form,
  },
  props: {
    //模态框的id属性
    id: {
      type: String,
      default: () => null,
    },
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
      this.destoryChart(this.id);
    },
    //input框中的数值改变
    changeOptions(e) {
      //重新绘图之前销毁之前的图
      this.destoryChart(this.id);
      // 重新画图 值更新 图变化
      this.drawDialogChart(e);
    },
    //在模态框中画图
    drawDialogChart(options) {
      // debugger
      // this.destoryChart("dialog-echarts");
      // 打开el_dialog时，dom元素还没有渲染完成，可使用Vue.nextTick解决问题
      this.$nextTick(() => {
        let dialogEcharts = this.$eCharts.init(
          document.getElementById(this.id)
        );
        dialogEcharts.setOption(options);
        //给图例添加监听
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.dialog-echarts {
  width: 400px;
  height: 400px;
  display: inline-block;
}
</style>