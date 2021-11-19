<template>
  <el-form :inline="true" :model="lineForm" class="demo-form-inline">
    <el-form-item label="X轴线条颜色:">
      <el-color-picker
        v-model="lineForm.xAxis.axisLine.lineStyle.color"
        @change="changeOptions(lineForm)"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="X轴字体颜色:">
      <el-color-picker
        v-model="lineForm.xAxis.axisLabel.color"
        @change="changeOptions(lineForm)"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="Y轴字体颜色:">
      <el-color-picker
        v-model="lineForm.yAxis.axisLabel.color"
        @change="changeOptions(lineForm)"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="线条颜色(默认与X轴同色):">
      <el-color-picker
        v-model="lineForm.series[0].lineStyle.color"
        @change="changeOptions(lineForm)"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="X轴线条粗细:">
      <el-input
        placeholder="X轴线条粗细"
        v-model="lineForm.xAxis.axisLine.lineStyle.width"
        @input="changeOptions(lineForm)"
      ></el-input>
    </el-form-item>
    <el-form-item label="X轴字体大小:">
      <el-input
        placeholder="X轴字体字号"
        v-model="lineForm.xAxis.axisLabel.fontSize"
        @input="changeOptions(lineForm)"
      ></el-input>
    </el-form-item>

    <el-form-item label="Y轴字体大小:">
      <el-input
        placeholder="Y轴字体大小"
        v-model="lineForm.yAxis.axisLabel.fontSize"
        @input="changeOptions(lineForm)"
      ></el-input>
    </el-form-item>

    <el-form-item label="线条粗细:">
      <el-input
        placeholder="线条粗细"
        v-model="lineForm.series[0].lineStyle.width"
        @input="changeOptions(lineForm)"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "LineForm",
  data() {
    return {};
  },
  computed: {
    lineForm() {
      return this.$store.state.lineForm;
    },
  },
  methods: {
    changeOptions(e) {
      console.log(e);
      this.$emit("change", e);
    },
  },
};
</script>

<style>
</style>