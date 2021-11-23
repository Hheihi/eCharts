<template>
    <el-form :inline="true" :model="pieForm" class="demo-form-inline">
    <el-form-item label="内半径：">
      <el-input
        v-model="pieForm.series[0].radius[0]"
        @input="changeOptions(pieForm)"
      ></el-input>
    </el-form-item>
    <el-form-item label="外半径：">
      <el-input
        v-model="pieForm.series[0].radius[1]"
        @input="changeOptions(pieForm)"
      ></el-input>
    </el-form-item>
    <el-form-item label="阴影长度:">
      <el-input
        v-model="pieForm.series[0].emphasis.itemStyle.shadowBlur"
        @input="changeOptions(pieForm)"
      ></el-input>
    </el-form-item>
    <el-form-item label="阴影偏移量:">
      <el-input
        v-model="pieForm.series[0].emphasis.itemStyle.shadowOffsetX"
        @input="changeOptions(pieForm)"
      ></el-input>
    </el-form-item>
    <el-form-item label="圆角大小:">
      <el-input
        v-model="pieForm.series[0].itemStyle.borderRadius"
        @input="changeOptions(pieForm)"
      ></el-input>
    </el-form-item>
    <el-form-item label="边框粗细:">
      <el-input
        v-model="pieForm.series[0].itemStyle.borderWidth"
        @input="changeOptions(pieForm)"
      ></el-input>
    </el-form-item>
    <el-form-item label="阴影颜色:">
      <el-color-picker
        v-model="pieForm.series[0].emphasis.itemStyle.shadowColor"
        @change="changeOptions(pieForm)"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="边框颜色:">
      <el-color-picker
        v-model="pieForm.series[0].itemStyle.borderColor"
        @change="changeOptions(pieForm)"
      ></el-color-picker>
    </el-form-item>
  </el-form>

</template>

<script>
export default {
  name: "PieForm",
  data() {
    return {};
  },
  computed: {
    pieForm() {
      return this.$store.state.pieForm;
    },
  },
  methods: {
    changeOptions(e) {
      this.$emit("change", e);
    },
  },
};
</script>

<style>
</style>