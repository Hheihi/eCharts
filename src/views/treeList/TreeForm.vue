<template>
  <el-form :inline="true" :model="treeForm" class="demo-form-inline">
    <el-form-item label="请选择节点显示位置:">
      <el-select
        v-model="treeForm.series[0].label.position"
        @change="changeOptions(treeForm)"
      >
        <el-option
          v-for="item in position"
          :key="item.id"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="请选择线条样式:">
      <el-select
        v-model="treeForm.series[0].edgeShape"
        @change="changeOptions(treeForm)"
      >
        <el-option
          v-for="item in shape"
          :key="item.id"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
         <el-form-item label="请选择树正交布局的方向:">
      <el-select
        v-model="treeForm.series[0].orient"
        @change="changeOptions(treeForm)"
      >
        <el-option
          v-for="item in orient"
          :key="item.id"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="线条粗细：">
      <el-input
        v-model="treeForm.series[0].lineStyle.width"
        @input="changeOptions(treeForm)"
      ></el-input>
    </el-form-item>
    <el-form-item label="节点颜色：">
      <el-color-picker
        v-model="treeForm.series[0].itemStyle.color"
        @change="changeOptions(treeForm)"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="线条颜色：">
      <el-color-picker
        v-model="treeForm.series[0].lineStyle.color"
        @change="changeOptions(treeForm)"
      ></el-color-picker>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "TreeForm",
  data() {
    return {
      position: [
        { id: 1, label:"top", value: "top"    },
        { id: 2, label:"right",value: "right"  },
        { id: 3, label:"bottom",value: "bottom" },
        { id: 4, label:"left",value: "left"   },
      ],
      shape:[
          {id:1,label:"折线",value:"polyline"},
          {id:2,label:"曲线",value:"curve"},
      ],
      orient:[
        { id: 1, label:"从左到右", value: "LR"    },
        { id: 2, label:"从右到左",value: "RL"  },
        { id: 3, label:"从上到下",value: "TB" },
        { id: 4, label:"从下到上",value: "BT"   },
      ]
    };
  },
  methods: {
    changeOptions(e) {
      this.$emit("change", e);
    },
  },
  computed: {
    treeForm() {
      return this.$store.state.treeForm;
    },
  },
};
</script>

<style>
</style>