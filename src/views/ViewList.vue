<template>
  <div id="viewList">
    <Container style="height: 900px; border: 1px solid #eee">
      <Aside
        class="aside"
        width="300px"
        style="background-color: rgb(238, 241, 246)"
      >
        <div class="aside-list">
          <div v-for="item in list" :key="item.id" class="viewImage">
            <div @dragstart="(e) => dragStartOption(e, item.options)" draggable>
              <img class="image" v-lazy="item.image" />
              <Tag
                closable
                type="success"
                class="tag-delete"
                @close="optionsDelete(item.id)"
                >{{ item.name }}</Tag
              >
            </div>
          </div>
        </div>
      </Aside>
      <Main class="main">
        <div
          @dragover="dragging"
          @drop="dropOptions"
          class="main"
          id="main"
          @click="handleCilck()"
        >
          <div v-if="optionsArr.length > 0">
            <ViewItem
              ref="viewItem"
              v-for="item in optionsArr"
              :key="item.id"
              :id="item.id"
              :option="item.option"
              :width="item.width"
              :height="item.height"
              :clientX="item.clientX"
              :clientY="item.clientY"
              :offsetX="item.offsetX"
              :offsetY="item.offsetY"
              :resizableAndActive="resizableAndActive"
              @change="change"
            />
          </div>
        </div>
      </Main>
    </Container>
  </div>
</template>

<script>
import { Container, Main, Aside, Tag, Message } from "element-ui";
import optionsApi from "@/api/options";
import ViewItem from "@/views/ViewItem";
export default {
  name: "ViewList",
  data() {
    return {
      list: [],
      optionsArr: [],
      resizableAndActive: false,
    };
  },
  components: {
    Container,
    Main,
    Aside,
    Tag,
    ViewItem,
  },
  created() {
    this.getAllOptions();
  },
  mounted() {},
  methods: {
    //拖拽开始
    dragStartOption(event, options) {
      const e = event || window.event;
      e.dataTransfer.setData("option", options);
    },
    //拖拽中
    dragging(e) {
      //拖拽事件在拖动过程中要阻止浏览器的默认行为
      e.preventDefault();

      const clientX = e.clientX;
      const clientY = e.clientY;
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;
      //   console.log(e);
      //   console.log(clientX, clientY, offsetX, offsetY);
      return { clientX, clientY, offsetX, offsetY };
    },
    //拖拽结束
    dropOptions(event) {
      const e = event || window.event;
      //获取拖动的div的option
      const option = e.dataTransfer.getData("option");
      const { clientX, clientY, offsetX, offsetY } = this.dragging(e);
      let obj = {
        id: Math.random(5),
        width: "400px",
        height: "400px",
        option: JSON.parse(option),
        clientX: clientX - 300 + "px",
        clientY: clientY + "px",
        offsetX: offsetX + "px",
        offsetY: offsetY + "px",
      };
      this.optionsArr.push(obj);
    },
    //初始化创建的节点
    echartsInit(node) {
      const nodeInit = this.$eCharts.init(document.getElementById(node));
      return nodeInit;
    },
    async getAllOptions() {
      const { data } = await optionsApi.getAllOptions();
      if (data.code === 200) {
        this.list = data.data;
      }
    },
    //图表删除
    async optionsDelete(id) {
      console.log(id);
      const { data } = await optionsApi.deleteOptions({ id });
      if (data.code === 200) {
        Message.success(data.msg);
        this.getAllOptions();
      }
    },
    handleCilck() {
      this.resizableAndActive=false
    },
    change(type) {
      this.resizableAndActive = type;
    },
  },
};
</script>

<style lang="stylus" scoped>
.aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  height: 100%;
}

.aside-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.main {
  width: 100%;
  height: 100%;
}

.main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  height: 100%;
}

.viewImage {
  height: 180px;
}

.image {
  width: 130px;
  height: 130px;
}

.tag-delete {
  display: block;
}
</style>