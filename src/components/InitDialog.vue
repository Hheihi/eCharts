<template>
  <Dialog :title="title" :visible.sync="visible" @closed="dialogClosed">
    <div :id="id" class="dialog-echarts"></div>
    <InitForm @change="changeOptions" />
    <Form>
      <FormItem>
        <Input v-model="optionsName" placeholder="图表名称"></Input>
        <Button @click="saveEchart" type="primary">保存至图表库</Button>
      </FormItem>
    </Form>
  </Dialog>
</template>

<script>
import InitForm from "@/components/InitForm.vue";
import { Dialog, Button, Form, Input, FormItem, Message } from "element-ui";
import { debounce } from "@/utils/throttle.js";
import optionsApi from "@/api/options";
export default {
  name: "el-Dialog",
  components: {
    Dialog,
    Button,
    Input,
    FormItem,
    Form,
    InitForm,
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
      optionsName: "",
      dialogEcharts: undefined,
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
      this.optionsName = null;
    },
    //input框中的数值改变
    changeOptions(e) {
      //重新绘图之前销毁之前的图
      this.destoryChart(this.id);
      // 重新画图 值更新 图变化
      debounce(this.drawDialogChart(e), 5000);
    },
    //在模态框中画图
    drawDialogChart(options) {
      // debugger
      // this.destoryChart("dialog-echarts");
      // 打开el_dialog时，dom元素还没有渲染完成，可使用Vue.nextTick解决问题
      this.$nextTick(() => {
        this.dialogEcharts = this.$eCharts.init(
          document.getElementById(this.id)
        );
        this.dialogEcharts.setOption(options);
        //给图例添加监听
      });
    },
    async saveEchart() {
      //保存修改好的配置项到数据库
      const { data } = await optionsApi.selectOptions({
        name: this.optionsName,
      });
      if (data.data[0] != null) {
        Message.warning(data.msg);
      } else {
        const options = this.$store.state.form;
        const imageBase64 = this.dialogEcharts.getDataURL();
        const { data } = await optionsApi.saveOptions({
          name: this.optionsName,
          options,
          image: imageBase64,
        });
        if (data.code === 200) {
          Message.success(data.msg);
          this.visible = false;
          this.optionsName = null;
        }
      }
    },
    saveEchartToImage() {
      console.log();
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