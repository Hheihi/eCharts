const treeForm = {
    treeForm: {
        name: "",
        series: [
          {
            orient: "LR",
            label: {
              position: "right"
            },
            //线条形状
            edgeShape: "polyline",
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
              focus: 'ancestor',
              blurScope: 'global',
            }
          }
        ]
      }
}

export default treeForm