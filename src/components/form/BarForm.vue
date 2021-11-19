<template>
  <el-form :inline="true" :model="barForm" class="demo-form-inline">
    <el-form-item label="X轴线条颜色:">
      <el-color-picker
        v-model="barForm.xAxis.axisLine.lineStyle.color"
        @change="changeOptions(barForm)"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="X轴字体颜色:">
      <el-color-picker
        v-model="barForm.xAxis.axisLabel.color"
        @change="changeOptions(barForm)"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="Y轴字体颜色:">
      <el-color-picker
        v-model="barForm.yAxis.axisLabel.color"
        @change="changeOptions(barForm)"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="柱状图柱体颜色:">
      <el-color-picker
        v-model="barForm.series[0].itemStyle.color"
        @change="changeOptions(barForm)"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="X轴线条粗细:">
      <el-input
        placeholder="X轴线条粗细"
        v-model="barForm.xAxis.axisLine.lineStyle.width"
        @input="changeOptions(barForm)"
      ></el-input>
    </el-form-item>

    <el-form-item label="X轴字体大小:">
      <el-input
        placeholder="X轴字体字号"
        v-model="barForm.xAxis.axisLabel.fontSize"
        @input="changeOptions(barForm)"
      ></el-input>
    </el-form-item>

    <el-form-item label="Y轴字体大小:">
      <el-input
        placeholder="Y轴字体大小"
        v-model="barForm.yAxis.axisLabel.fontSize"
        @input="changeOptions(barForm)"
      ></el-input>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  name: "BarForm",
  data() {
    return {};
  },
  computed: {
    barForm() {
      return this.$store.state.barForm;
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