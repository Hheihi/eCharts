<template>
  <el-form :inline="true" :model="scatterForm" class="demo-form-inline">
    <el-form-item label="X轴线条颜色:">
      <el-color-picker
        v-model="scatterForm.xAxis.axisLine.lineStyle.color"
        @change="changeOptions(scatterForm)"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="X轴字体颜色:">
      <el-color-picker
        v-model="scatterForm.xAxis.axisLabel.color"
        @change="changeOptions(scatterForm)"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="Y轴字体颜色:">
      <el-color-picker
        v-model="scatterForm.yAxis.axisLabel.color"
        @change="changeOptions(scatterForm)"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="X轴线条粗细:">
      <el-input
        placeholder="X轴线条粗细"
        v-model="scatterForm.xAxis.axisLine.lineStyle.width"
        @input="changeOptions(scatterForm)"
      ></el-input>
    </el-form-item>
    <el-form-item label="X轴字体大小:">
      <el-input
        placeholder="X轴字体字号"
        v-model="scatterForm.xAxis.axisLabel.fontSize"
        @input="changeOptions(scatterForm)"
      ></el-input>
    </el-form-item>

    <el-form-item label="Y轴字体大小:">
      <el-input
        placeholder="Y轴字体大小"
        v-model="scatterForm.yAxis.axisLabel.fontSize"
        @input="changeOptions(scatterForm)"
      ></el-input>
    </el-form-item>

    <el-form-item label="点的颜色:">
      <el-color-picker
        v-model="scatterForm.series[0].itemStyle.color"
        @change="changeOptions(scatterForm)"
      ></el-color-picker>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "ScatterForm",
  data() {
    return {};
  },
  methods: {
    changeOptions(e) {
      this.$emit("change", e);
    },
  },
  computed: {
    scatterForm() {
      return this.$store.state.scatterForm;
    },
  },
};
</script>

<style>
</style>