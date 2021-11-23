<template>
  <el-container style="height: 900px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu @select="active" :default-active="index" :router="true">
        <draggable
          chosenClass="chosen"
          forceFallback="true"
          group="item"
          animation="1000"
        >
          <a href="#lineList"
            ><el-menu-item index="/lineList" class="item">
              <i class="el-icon-menu"></i>
              <span slot="title">折线图</span>
            </el-menu-item>
          </a>
          <a href="#barList">
            <el-menu-item index="/barList" class="item">
              <i class="el-icon-menu"></i>
              <span slot="title">柱状图</span>
            </el-menu-item>
          </a>
          <a href="#pieList">
            <el-menu-item index="/pieList" class="item">
              <i class="el-icon-menu"></i>
              <span slot="title">饼图</span>
            </el-menu-item>
          </a>
          <a href="#scatterList">
            <el-menu-item index="/scatterList" class="item">
              <i class="el-icon-menu"></i>
              <span slot="title">散点图</span>
            </el-menu-item>
          </a>
          <a href="#treeList">
            <el-menu-item index="/treeList" class="item">
              <i class="el-icon-menu"></i>
              <span slot="title">树图</span>
            </el-menu-item>
          </a>
        </draggable>
      </el-menu>
    </el-aside>
    <el-main id="main">
      <LineList ref="line"></LineList>
      <BarList ref="bar"></BarList>
      <PieList ref="pie"></PieList>
      <ScatterList ref="scatter"></ScatterList>
      <TreeList ref="tree"></TreeList>
      <!-- <router-view></router-view> -->
    </el-main>
  </el-container>
</template>
<script>
import draggable from "vuedraggable";
import BarList from "@/views/barList/BarList.vue";
import LineList from "@/views/lineList/LineList.vue";
import TreeList from "@/views/treeList/TreeList.vue";
import PieList from "@/views/pieList/PieList.vue";
import ScatterList from "@/views/scatterList/ScatterList.vue";
export default {
  data() {
    return {
      lineListHigh: undefined,
      barListHigh: undefined,
      pieListHigh: undefined,
      scatterListHigh: undefined,
      mapListHigh: undefined,
      index: "", //当前激活的路由
      drag: false,
    };
  },
  components: {
    LineList,
    BarList,
    TreeList,
    PieList,
    ScatterList,
    draggable,
  },
  computed: {},
  methods: {
    active(index) {
      this.index = `'${index}'`;
    },
    handleScroll() {
      let that = this;
      //获取滚动高度
      let scorllTop = document.getElementById("main").scrollTop;
      let lineScroll = that.lineListHigh;
      let barScroll = that.lineListHigh + that.barListHigh;
      let pieScroll = that.lineListHigh + that.barListHigh + that.pieListHigh;
      let scatterScroll =
        that.lineListHigh +
        that.barListHigh +
        that.pieListHigh +
        that.scatterListHigh;
      // scorllTop滑动的距离
      if (scorllTop <= lineScroll) {
        this.index = "/lineList";
      } else if (scorllTop > lineScroll && scorllTop <= barScroll) {
        this.index = "/barList";
      } else if (scorllTop > barScroll && scorllTop <= pieScroll) {
        this.index = "/pieList";
      } else if (scorllTop > pieScroll && scorllTop <= scatterScroll) {
        this.index = "/scatterList";
      } else {
        this.index = "/treeList";
      }
    },
  },
  mounted() {
    let that = this;
    document
      .getElementById("main")
      .addEventListener("scroll", that.handleScroll);
    // window.addEventListener("scroll", this.handleScroll);
    this.lineListHigh = this.$refs["line"].$refs["lineList"].offsetHeight;
    this.barListHigh = this.$refs["bar"].$refs["barList"].offsetHeight;
    this.pieListHigh = this.$refs["pie"].$refs["pieList"].offsetHeight;
    this.scatterListHigh =
      this.$refs["scatter"].$refs["scatterList"].offsetHeight;
    this.mapListHigh = this.$refs["tree"].$refs["treeList"].offsetHeight;
  },
  beforeDestroy() {
    //删除监听事件
    let that = this;
    window.removeEventListener("scroll", that.handleScroll);
  },
};
</script>

<style scoped>
</style>

