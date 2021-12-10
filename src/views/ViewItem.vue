<template>
  <div
    class="viewItem"
    :style="{
      width: width,
      height: height,
      top: clientY,
      left: clientX,
      position: 'absolute',
    }"
    :id="id"
    @keyup.delete.down="deleteOptions(e)"
    @mousedown="echartsMove()"
    @click.stop="handleCilck"
  >                   
    <div
      ref="echarts"
      class="view-small-item"
      :style="{
        width: width,
        height: height,
      }"
    ></div>
    <span
      v-for="handle in handles"
      :key="handle"
      :class="[
        'vue-bonree-resizable-handle',
        'vue-bonree-resizable-handle' + '-' + handle,
      ]"
      :style="{
        display: resizableAndActive ? 'block' : 'none',
        position: 'absolute',
      }"
      @mousedown.stop.prevent="(e) => handleDown(e)"
    >
    </span>
  </div>
</template>

<script>
export default {
  name: "ViewItem",
  data() {
    return {
      handles: ["nw", "n", "ne", "e", "se", "s", "sw", "w"],
      // resizableAndActive: true,
      chart: null,
    };
  },
  props: {
    id: {
      type: Number,
      default: null,
    },
    option: {
      type: Object,
      default: null,
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "350px",
    },
    clientX: {
      type: String,
      default: null,
    },
    clientY: {
      type: String,
      default: null,
    },
    offsetX: {
      type: String,
      default: null,
    },
    offsetY: {
      type: String,
      default: null,
    },
    resizableAndActive: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.initEcharts();
    
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    //初始化echarts 并画图
    initEcharts() {
      this.chart = this.$eCharts.init(this.$refs.echarts);

      this.chart.setOption(this.option);
    },
    handleCilck() {
      this.$emit("change", true);
      // console.log(this.resizableAndActive);
    },
    // handleOver() {
    //   console.log(11);
    //   this.resizableAndActive = true;
    // },
    // handleLeave() {
    //   this.resizableAndActive = false;
    // },
    //图形放大缩小
    handleDown(event) {
      let that = this;

      let className = event.toElement._prevClass.split(" ")[1];
      const oDiv = document.getElementById(this.id);
      var oEv = window.event || event;
      oEv.stopPropagation();
      var oldWidth = oDiv.offsetWidth;
      var oldHeight = oDiv.offsetHeight;
      var oldX = oEv.clientX;
      var oldY = oEv.clientY;
      var oldLeft = oDiv.offsetLeft;
      var oldTop = oDiv.offsetTop;

      document.onmousemove = function (event) {
        var oEv = window.event || event;
        let disY = oldTop + (oEv.clientY - oldY),
          disX = oldLeft + (oEv.clientX - oldLeft);
        if (disX > oldLeft + oldWidth) {
          disX = oldLeft + oldWidth;
        }
        if (disY > oldTop + oldHeight) {
          disY = oldTop + oldHeight;
        }
        if (className == "vue-bonree-resizable-handle-nw") {
          //左上
          oDiv.style.width = oldWidth - (oEv.clientX - oldX) + "px";
          oDiv.style.height = oldHeight - (oEv.clientY - oldY) + "px";
          oDiv.style.left = disX + "px";
          oDiv.style.top = disY + "px";
          that.chart.resize({
            width: oDiv.style.width,
            height: oDiv.style.height,
          });
        } else if (className == "vue-bonree-resizable-handle-sw") {
          //左下
          oDiv.style.width = oldWidth - (oEv.clientX - oldX) + "px";
          oDiv.style.height = oldHeight + (oEv.clientY - oldY) + "px";
          oDiv.style.left = disX + "px";
          oDiv.style.bottom = oldTop + (oEv.clientY + oldY) + "px";
          that.chart.resize({
            width: oDiv.style.width,
            height: oDiv.style.height,
          });
        } else if (className == "vue-bonree-resizable-handle-ne") {
          //右上
          oDiv.style.width = oldWidth + (oEv.clientX - oldX) + "px";
          oDiv.style.height = oldHeight - (oEv.clientY - oldY) + "px";
          oDiv.style.right = oldLeft - (oEv.clientX - oldX) + "px";
          oDiv.style.top = disY + "px";
          that.chart.resize({
            width: oDiv.style.width,
            height: oDiv.style.height,
          });
        } else if (className == "vue-bonree-resizable-handle-se") {
          //右下
          oDiv.style.width = oldWidth + (oEv.clientX - oldX) + "px";
          oDiv.style.height = oldHeight + (oEv.clientY - oldY) + "px";
          oDiv.style.right = oldLeft - (oEv.clientX - oldX) + "px";
          oDiv.style.bottom = oldTop + (oEv.clientY + oldY) + "px";
          that.chart.resize({
            width: oDiv.style.width,
            height: oDiv.style.height,
          });
        } else if (className == "vue-bonree-resizable-handle-n") {
          //上面
          oDiv.style.height = oldHeight - (oEv.clientY - oldY) + "px";
          oDiv.style.top = disY + "px";
          that.chart.resize({
            height: oDiv.style.height,
          });
        } else if (className == "vue-bonree-resizable-handle-s") {
          //下面
          oDiv.style.height = oldHeight + (oEv.clientY - oldY) + "px";
          oDiv.style.bottom = disY + "px";
          that.chart.resize({
            height: oDiv.style.height,
          });
        } else if (className == "vue-bonree-resizable-handle-w") {
          //左侧
          oDiv.style.height = oldHeight + "px";
          oDiv.style.width = oldWidth - (oEv.clientX - oldX) + "px";
          oDiv.style.left = disX + "px";
          that.chart.resize({
            width: oDiv.style.width,
            height: oDiv.style.height,
          });
        } else if (className == "vue-bonree-resizable-handle-e") {
          //右侧
          oDiv.style.height = oldHeight + "px";
          oDiv.style.width = oldWidth + (oEv.clientX - oldX) + "px";
          oDiv.style.right = disX + "px";
          that.chart.resize({
            width: oDiv.style.width,
            height: oDiv.style.height,
          });
        }
      };
      document.onmouseup = function () {
        document.onmousemove = null;
      };
      return false;
    },
    //图形拖拽事件
    echartsMove() {
      //   console.log(this.id);
      const drag = document.getElementById(this.id);
      drag.onmousedown = function (e) {
        var event = e || window.event; //兼容IE浏览器
        //    鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
        var diffX = event.clientX - drag.offsetLeft;
        var diffY = event.clientY - drag.offsetTop;
        if (typeof drag.setCapture !== "undefined") {
          drag.setCapture();
        }
        document.onmousemove = function (event) {
          // var event = event || window.event;
          var moveX = event.clientX - diffX;
          var moveY = event.clientY - diffY;
          if (moveX < 300) {
            moveX = 300 + "px";
          } else if (moveX > window.innerWidth - drag.offsetWidth) {
            moveX = window.innerWidth - drag.offsetWidth;
          }
          if (moveY < 0) {
            moveY = 0;
          } else if (moveY > window.innerHeight - drag.offsetHeight) {
            moveY = window.innerHeight - drag.offsetHeight;
          }
          drag.style.left = moveX + "px";
          drag.style.top = moveY + "px";
          return { moveX, moveY };
        };
        document.onmouseup = function () {
          this.onmousemove = null;
          this.onmouseup = null;
          //修复低版本ie bug
          if (typeof drag.releaseCapture != "undefined") {
            drag.releaseCapture();
          }
        };
      };
    },
    deleteOptions(e) {
      console.log(e);
      // document.getElementById(id).remove();
    },
  },
};
</script>

<style lang="stylus" scoped>
.viewItem {
  position: relative;
}

.view-small-item {
  width: 400px;
  height: 400px;
}

.vue-bonree-resizable-handle {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 99;
  width: 10px;
  height: 10px;
  background: #eee;
  box-sizing: border-box;
  border: 1px solid #333;
}

.vue-bonree-resizable-handle-nw {
  top: -10px;
  left: -10px;
  cursor: nw-resize;
}

.vue-bonree-resizable-handle-n {
  top: -10px;
  left: 50%;
  margin-left: -5px;
  cursor: n-resize;
}

.vue-bonree-resizable-handle-ne {
  top: -10px;
  right: -10px;
  cursor: ne-resize;
}

.vue-bonree-resizable-handle-e {
  top: 50%;
  margin-top: -5px;
  right: -10px;
  cursor: e-resize;
}

.vue-bonree-resizable-handle-se {
  bottom: -10px;
  right: -10px;
  cursor: se-resize;
}

.vue-bonree-resizable-handle-s {
  bottom: -10px;
  left: 50%;
  margin-left: -5px;
  cursor: s-resize;
}

.vue-bonree-resizable-handle-sw {
  bottom: -10px;
  left: -10px;
  cursor: sw-resize;
}

.vue-bonree-resizable-handle-w {
  top: 50%;
  margin-top: -5px;
  left: -10px;
  cursor: w-resize;
}
</style>