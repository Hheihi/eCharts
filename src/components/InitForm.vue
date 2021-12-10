<template>
  <Form :model="listForm" :inline="true" class="initForm">
    <FormItem
      label="X轴线条颜色:"
      v-if="type === 'line' || type === 'bar' || type === 'scatter'"
    >
      <ColorPicker
        v-model="listForm.xAxis.axisLine.lineStyle.color"
        @change="changeOptions(listForm)"
      ></ColorPicker>
    </FormItem>
    <FormItem
      label="X轴字体颜色:"
      v-if="type === 'line' || type === 'bar' || type === 'scatter'"
    >
      <ColorPicker
        v-model="listForm.xAxis.axisLabel.color"
        @change="changeOptions(listForm)"
      ></ColorPicker>
    </FormItem>
    <FormItem
      label="Y轴字体颜色:"
      v-if="type === 'line' || type === 'bar' || type === 'scatter'"
    >
      <ColorPicker
        v-model="listForm.yAxis.axisLabel.color"
        @change="changeOptions(listForm)"
      ></ColorPicker>
    </FormItem>
    <FormItem label="柱状图柱体颜色:" v-if="type === 'bar'">
      <ColorPicker
        v-model="listForm.series[0].itemStyle.color"
        @change="changeOptions(listForm)"
      ></ColorPicker>
    </FormItem>
    <FormItem label="点的颜色:" v-if="type === 'scatter'">
      <ColorPicker
        v-model="listForm.series[0].itemStyle.color"
        @change="changeOptions(listForm)"
      ></ColorPicker>
    </FormItem>
    <FormItem label="线条颜色(默认与X轴同色):" v-if="type === 'line'">
      <ColorPicker
        v-model="listForm.series[0].lineStyle.color"
        @change="changeOptions(listForm)"
      ></ColorPicker>
    </FormItem>

    <FormItem label="节点颜色：" v-if="type === 'tree'">
      <ColorPicker
        v-model="listForm.series[0].itemStyle.color"
        @change="changeOptions(listForm)"
      ></ColorPicker>
    </FormItem>
    <FormItem label="线条颜色：" v-if="type === 'tree'">
      <ColorPicker
        v-model="listForm.series[0].lineStyle.color"
        @change="changeOptions(listForm)"
      ></ColorPicker>
    </FormItem>
    <FormItem label="阴影长度:" v-if="type === 'pie'">
      <Input
        v-model="listForm.series[0].emphasis.itemStyle.shadowBlur"
        type="number"
        @input="changeOptions(listForm)"
      ></Input>
    </FormItem>
    <FormItem label="阴影偏移量:" v-if="type === 'pie'">
      <Input
        v-model="listForm.series[0].emphasis.itemStyle.shadowOffsetX"
        type="number"
        @input="changeOptions(listForm)"
      ></Input>
    </FormItem>
    <FormItem label="阴影颜色:" v-if="type === 'pie'">
      <ColorPicker
        v-model="listForm.series[0].emphasis.itemStyle.shadowColor"
        @change="changeOptions(listForm)"
      ></ColorPicker>
    </FormItem>
    <FormItem label="边框颜色:" v-if="type === 'pie'">
      <ColorPicker
        v-model="listForm.series[0].itemStyle.borderColor"
        @change="changeOptions(listForm)"
      ></ColorPicker>
    </FormItem>

    <!-- <Col> -->
    <FormItem label="线条粗细:" v-if="type === 'line' || type === 'tree'">
      <Input
        placeholder="线条粗细"
        v-model="listForm.series[0].lineStyle.width"
        type="number"
        @input="changeOptions(listForm)"
      ></Input>
    </FormItem>
    <FormItem
      label="X轴线条粗细:"
      v-if="type === 'line' || type === 'bar' || type === 'scatter'"
    >
      <Input
        placeholder="X轴线条粗细"
        v-model="listForm.xAxis.axisLine.lineStyle.width"
        type="number"
        @input="changeOptions(listForm)"
      ></Input>
    </FormItem>
    <FormItem
      label="X轴字体大小:"
      v-if="type === 'line' || type === 'bar' || type === 'scatter'"
    >
      <Input
        placeholder="X轴字体大小"
        v-model="listForm.xAxis.axisLabel.fontSize"
        type="number"
        @input="changeOptions(listForm)"
      ></Input>
    </FormItem>
    <FormItem
      label="Y轴字体大小:"
      v-if="type === 'line' || type === 'bar' || type === 'scatter'"
    >
      <Input
        placeholder="Y轴字体大小"
        v-model="listForm.yAxis.axisLabel.fontSize"
        type="number"
        @input="changeOptions(listForm)"
      ></Input>
    </FormItem>
    <!-- </Col> -->

    <FormItem label="内半径：" v-if="type === 'pie'">
      <Input
        type="number"
        v-model="listForm.series[0].radius[0]"
        @input="changeOptions(listForm)"
      ></Input>
    </FormItem>

    <FormItem label="外半径：" v-if="type === 'pie'">
      <Input
        v-model="listForm.series[0].radius[1]"
        type="number"
        @input="changeOptions(listForm)"
      ></Input>
    </FormItem>

    <FormItem label="圆角大小:" v-if="type === 'pie'">
      <Input
        v-model="listForm.series[0].itemStyle.borderRadius"
        type="number"
        @input="changeOptions(listForm)"
      ></Input>
    </FormItem>
    <FormItem label="边框粗细:" v-if="type === 'pie'">
      <Input
        v-model="listForm.series[0].itemStyle.borderWidth"
        type="number"
        @input="changeOptions(listForm)"
      ></Input>
    </FormItem>

    <FormItem label="请选择节点显示位置:" v-if="type === 'tree'">
      <Select
        v-model="listForm.series[0].label.position"
        @change="changeOptions(listForm)"
      >
        <Option
          v-for="item in position"
          :key="item.id"
          :label="item.label"
          :value="item.value"
        >
        </Option>
      </Select>
    </FormItem>
    <FormItem label="请选择线条样式:" v-if="type === 'tree'">
      <Select
        v-model="listForm.series[0].edgeShape"
        @change="changeOptions(listForm)"
      >
        <Option
          v-for="item in shape"
          :key="item.id"
          :label="item.label"
          :value="item.value"
        >
        </Option>
      </Select>
    </FormItem>
    <FormItem label="请选择树正交布局的方向:" v-if="type === 'tree'">
      <Select
        v-model="listForm.series[0].orient"
        @change="changeOptions(listForm)"
      >
        <Option
          v-for="item in orient"
          :key="item.id"
          :label="item.label"
          :value="item.value"
        >
        </Option>
      </Select>
    </FormItem>
  </Form>
</template>

<script>
import {
  Form,
  FormItem,
  Select,
  Option,
  ColorPicker,
  Input,
} from "element-ui";
export default {
  name: "el-Form",
  data() {
    return {
      position: [
        { id: 1, label: "top", value: "top" },
        { id: 2, label: "right", value: "right" },
        { id: 3, label: "bottom", value: "bottom" },
        { id: 4, label: "left", value: "left" },
      ],
      shape: [
        { id: 1, label: "折线", value: "polyline" },
        { id: 2, label: "曲线", value: "curve" },
      ],
      orient: [
        { id: 1, label: "从左到右", value: "LR" },
        { id: 2, label: "从右到左", value: "RL" },
        { id: 3, label: "从上到下", value: "TB" },
        { id: 4, label: "从下到上", value: "BT" },
      ],
    };
  },
  components: {
    Form,
    FormItem,
    Select,
    Option,
    ColorPicker,
    Input,
  },
  methods: {
    changeOptions(e) {
      this.$emit("change", e);
    },
  },
  computed: {
    listForm() {
      return this.$store.state.form;
    },
    type() {
      return this.$store.state.type;
    },
  },
};
</script>

<style lang="stylus" scoped>
.initForm {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center
  flex-grow: 0
}

</style>