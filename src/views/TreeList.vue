<template>
  <div>
    <div ref="treeList" id="treeList" class="treeList">
      <h1 class="title">树图</h1>
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
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      </draggable>
      <Dialog ref="dialog" :title="optionsName" :type="type"> </Dialog>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

import Dialog from "@/components/Dialog.vue";
export default {
  name: "TreeList",
  data() {
    return {
      list: [
        {
          id: "chart17",
          options: {
            name: "树图",
            series: [
              {
                type: "tree",
                data: [
                  {
                    name: "root",
                    children: [
                      {
                        name: "Child A",
                        children: [
                          {
                            name: "Leaf C",
                          },
                          {
                            name: "Leaf D",
                          },
                          {
                            name: "Leaf E",
                          },
                          {
                            name: "Leaf F",
                          },
                        ],
                      },
                      {
                        name: "Child B",
                        children: [
                          {
                            name: "Leaf G",
                          },
                          {
                            name: "Leaf H",
                          },
                        ],
                      },
                      {
                        name: "Child D",
                      },
                      {
                        name: "Child F",
                        children: [
                          {
                            name: "Leaf J",
                          },
                          {
                            name: "Leaf K",
                          },
                        ],
                      },
                    ],
                  },
                ],
                label: {
                  position: "right",
                },
              },
            ],
          },
        }
      ],
      optionsName: "",
      type: "tree",
    };
  },
  components: { Dialog, draggable },
  computed: {
   
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      let chart17 = this.$eCharts.init(document.getElementById("chart17"));
      // 绘制图表
      chart17.setOption(this.list[0].options);
    },
    dialogTableVisible(options) {
      this.optionsName = options.name;
      //模态框组件的隐藏显示属性
      this.$refs["dialog"].visible = true;
      //在模态框中绘制图形
      this.$refs["dialog"].drawDialogChart(options);
      //点击 赋值之前 恢复默认表单
      this.$store.state.treeForm = {
        series: [
          {
            label: {
              position: "right",
            },
            //节点颜色
            itemStyle: {
              color: "",
            },
            //线条颜色 粗细
            lineStyle: {
              color: "",
              width: undefined,
            },
            //节点聚焦
            emphasis: {
              focus: "ancestor",
              blurScope: "global",
            },
          },
        ],
      };
      //给vuex表单赋值 采用深拷贝
      this.$store.commit(
        "changeTree",
        this._.cloneDeep(
          this._.merge(this.$store.state.treeForm, this._.cloneDeep(options))
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
.treeList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>