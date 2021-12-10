<template>
  <Container style="height: 900px; border: 1px solid #eee">
    <Aside width="200px" style="background-color: rgb(238, 241, 246)">
      <Menu @select="active" :default-active="index" :router="true">
        <draggable
          chosenClass="chosen"
          forceFallback="true"
          group="item"
          animation="1000"
        >
          <a>
            <MenuItem index="/viewList" class="item">
              <span class="el-icon"><i class="el-icon-menu"></i></span>
              <span slot="title" class="el-menu-title">图表库</span>
            </MenuItem>
          </a>
          <a href="#lineList"
            ><MenuItem index="/lineList" class="item">
              <span class="el-icon"><i class="el-icon-menu"></i></span>
              <span slot="title" class="el-menu-title">折线图</span>
            </MenuItem>
          </a>
          <a href="#barList">
            <MenuItem index="/barList" class="item">
              <span class="el-icon"><i class="el-icon-menu"></i></span>
              <span slot="title" class="el-menu-title">柱状图</span>
            </MenuItem>
          </a>
          <a href="#pieList">
            <MenuItem index="/pieList" class="item">
              <span class="el-icon"><i class="el-icon-menu"></i></span>
              <span slot="title" class="el-menu-title">饼图</span>
            </MenuItem>
          </a>
          <a href="#scatterList">
            <MenuItem index="/scatterList" class="item">
              <span class="el-icon"><i class="el-icon-menu"></i></span>
              <span slot="title" class="el-menu-title">散点图</span>
            </MenuItem>
          </a>
          <a href="#treeList">
            <MenuItem index="/treeList" class="item">
              <span class="el-icon"><i class="el-icon-menu"></i></span>
              <span slot="title" class="el-menu-title">树图</span>
            </MenuItem>
          </a>
        </draggable>
      </Menu>
    </Aside>
    <Main id="main">
      <LineList ref="line"></LineList>
      <BarList ref="bar"></BarList>
      <PieList ref="pie"></PieList>
      <ScatterList ref="scatter"></ScatterList>
      <TreeList ref="tree"></TreeList>
      <!-- <router-view></router-view> -->
    </Main>
  </Container>
</template>
<script>
import draggable from "vuedraggable";
import BarList from "@/views/barList/BarList.vue";
import LineList from "@/views/lineList/LineList.vue";
import TreeList from "@/views/treeList/TreeList.vue";
import PieList from "@/views/pieList/PieList.vue";
import ScatterList from "@/views/scatterList/ScatterList.vue";
import { Container, Menu, Main, Aside, MenuItem } from "element-ui";

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
    Container,
    Main,
    Aside,
    Menu,
    MenuItem,
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

<style lang="stylus" scoped>
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.el-icon {
  display: inline-block;
  vertical-align: middle;
}

.el-menu-title {
  display: inline-block;
  vertical-align: middle;
}
</style>

