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
        <Col :span="6" v-for="item in list" :key="item.id">
          <div
            class="grid-content bg-purple"
            :id="item.id"
            @click="dialogTableVisible(item.options)"
          ></div>
        </Col>
        <Col :span="6"><div class="grid-content bg-purple"></div></Col>
        <Col :span="6"><div class="grid-content bg-purple"></div></Col>
        <Col :span="6"><div class="grid-content bg-purple"></div></Col>
      </draggable>
      <InitDialog ref="dialog" :title="optionsName"  :id="id"> </InitDialog>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { Col } from "element-ui";
import { cloneDeep, merge } from 'lodash';

import InitDialog from "@/components/InitDialog.vue";
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
        },
      ],
      optionsName: "",
      type: "tree",
      id: "treeList-charts",
    };
  },
  components: { InitDialog, draggable, Col },
  computed: {},
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
      //点击 赋值之前 恢复默认表单
      const form = {
        name: "",
        //x轴
        series: [
          {
            // data: [],
            // type: "",
            lineStyle: {
              type: "",
              color: "",
              width: "1",
            },
            itemStyle: {
              color: "",
              borderRadius: undefined, //圆角大小
              borderColor: "", //边框颜色
              borderWidth: undefined, //边框粗细
            },
            orient: "LR",
            label: {
              position: "right",
            },
            //线条形状
            edgeShape: "polyline",
            //节点聚焦
            emphasis: {
              focus: "ancestor",
              blurScope: "global",
              itemStyle: {
                shadowBlur: 10, //阴影长度
                shadowOffsetX: 0, //阴影偏移量
                shadowColor: "", //阴影颜色
              },
            },
          },
        ],
      };
      this.$store.commit("changeForm", form);
      this.$store.commit("changeType", this.type);

      this.optionsName = options.name;
      //模态框组件的隐藏显示属性
      this.$refs["dialog"].visible = true;
      //在模态框中绘制图形
      this.$refs["dialog"].drawDialogChart(options);

      //给vuex表单赋值 采用深拷贝
      this.$store.commit(
        "changeForm",
        cloneDeep(merge(form, options))
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.grid-content 
  width 400px;
  height 400px;
  margin-bottom 20px;
  margin-left 5px;
  border-radius 4px;
.bg-purple
    background #DEDEDE
.title 
  width 100%;
  flex-wrap nowrap;
  display block;
.treeList 
  display flex;
  flex-wrap wrap;
  flex-direction row;
  justify-content center;
</style>