# Echarts图形配置项

### 1.图形属性

#### 1.1 title(标题组件，包含主标题和副标题 类型为 Object)

|   属性(title)   | 类型（type） |       描述       |
| :-------------: | :----------: | :--------------: |
|   title.show    |   boolean    | 是否显示标题组件 |
|   title.text    |    String    |    主标题文本    |
|   title.link    |    String    | 主标题文本超链接 |
| title.textStyle |    Object    |  主标题文本样式  |
|     subtext     |    String    |    副标题文本    |
|     sublink     |    String    | 副标题文本超链接 |
|  subtextStyle   |    Object    |  副标题文本样式  |

#### 1.2 legend（图例组件）

|     属性（legend）     | 类型（type）              | 描述                                                         |
| :--------------------: | ------------------------- | ------------------------------------------------------------ |
|      legend.type       | String ('plain','scroll') | `'plain'`：普通图例。缺省就是普通图例。 `'scroll'`：可滚动翻页的图例。当图例数量较多时可以使用 |
|      legend.show       | boolean                   | 是否显示图例                                                 |
|    legend.itemStyle    | Object                    | 图例的图形样式                                               |
| legend.itemStyle.color | 'inherit'                 | 其属性的取值为 `'inherit'` 时，表示继承系列中的属性值        |
|    legend.lineStyle    | Object                    | 图例图形中线的样式                                           |
| legend.itemStyle.color | 'inherit'                 | 用于诸如折线图图例横线的样式设置。其属性的取值为 `'inherit'` 时，表示继承系列中的属性值。 |
|                        |                           |                                                              |

#### 1.3 grid (直角坐标系网格)

| 属性（grid）             | 类型(type) | 描述                                                         |
| ------------------------ | ---------- | ------------------------------------------------------------ |
| grid.show                | boolean    | 是否显示直角坐标系网格                                       |
| grid.backgrouondcolor    | color      | 网格背景色，默认透明 可用rgb 、rgba、十六进制                |
| grid.borderColor         | color      | 网格的边框颜色。支持的颜色格式同 backgroundColor。           |
| grid.shadowBlur          | number     | 图形阴影的模糊大小。                                         |
| grid.shadowColor         | Color      | 阴影颜色                                                     |
| grid.tooltip(提示框组件) | Object     | 本坐标系特定的 tooltip 设定                                  |
| grid.tooltip.show        | boolean    | 是否显示提示框组件。                                         |
| grid.tooltip.trigger     | String     | 'item':数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用.'axis':坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。'none':什么都不触发。 |
|                          |            |                                                              |

#### 1.4xAxis(x轴)

| 属性（xAxis）       | 类型（type） | 描述                                                         |
| ------------------- | ------------ | ------------------------------------------------------------ |
| xAxis.show          | boolean      | 是否显示 x 轴                                                |
| xAxis.type          | string       | 坐标轴类型。`'value'` 数值轴，适用于连续数据。`'category'` 类目轴，适用于离散的类目数据。`'time'` 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。`'log'` 对数轴。适用于对数数据。 |
| xAxis.name          | string       | 坐标轴名称。例：x轴                                          |
| xAxis.nameTextStyle | Object       | 坐标轴名称的文字样式。                                       |
|                     |              |                                                              |

#### 1.5yAxis(y轴)

| 属性（yAxis）  | 类型（type） | 描述                                                         |
| -------------- | ------------ | ------------------------------------------------------------ |
| yAxis.show     | boolean      | 是否显示Y轴                                                  |
| yAxis.position | string       | y 轴的位置（left、right）                                    |
| yAxis.type     | string       | 坐标轴类型。`'value'` 数值轴，适用于连续数据。`'category'` 类目轴，适用于离散的类目数据。`'time'` 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。`'log'` 对数轴。适用于对数数据。 |
| yAxis.name     | string       | 坐标轴名称。例：x轴                                          |
|                |              |                                                              |



#### 1.6axisLine(坐标轴线x轴、y轴 以x轴为例)

| 属性（axisLine）               | 类型（type） | 描述                                                         |
| ------------------------------ | ------------ | ------------------------------------------------------------ |
| xAxis.axisLine.show            | boolean      | 是否显示坐标轴轴线                                           |
| xAxis.axisLine.symbol          | Array        | 轴线两边的箭头。可以是字符串，表示两端使用同样的箭头；或者长度为 2 的字符串数组，分别表示两端的箭头。默认不显示箭头，即 `'none'`。两端都显示箭头可以设置为 `'arrow'`，只在末端显示箭头可以设置为 `['none', 'arrow']` |
| xAxis.axisLine.symbolSize      | Array        | 轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）。 |
| xAxis.axisLine.lineStyle       | Object       | 坐标轴轴线                                                   |
| xAxis.axisLine.lineStyle.color | Color        | 坐标轴线线的颜色。                                           |
| xAxis.axisLine.lineStyle.width | number       | 坐标轴轴线的线宽                                             |
| xAxis.axisLine.lineStyle.type  | String       | 线的类型。  `'solid'` `'dashed'` `'dotted'`                  |
|                                |              |                                                              |



#### 1.7axisLabel(坐标轴刻度标签的设置 x轴、y轴字体大小、颜色设置 以x轴为例)

| 属性（axisLabel）        | 类型（type） | 描述                 |
| ------------------------ | ------------ | -------------------- |
| xAxis.axisLabel.show     | boolean      | 是否显示刻度标签     |
| xAxis.axisLabel.color    | color        | 坐标轴刻度的字体颜色 |
| xAxis.axisLabel.fontSize | number       | 坐标轴刻度字体大小   |



### 2.线性图(series-line)

| 属性（series-line）   | 类型（type） | 描述                                                         |
| --------------------- | ------------ | ------------------------------------------------------------ |
| series-line.label     | Object       | 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等 |
| series-line.itemStyle | Object       | 折线拐点标志的样式。                                         |
| series-line.lineStyle | Object       | 线条样式。修改 `lineStyle` 中的颜色不会影响图例颜色，如果需要图例颜色和折线图颜色一致，需修改 [itemStyle.color](https://echarts.apache.org/zh/option.html#series-line.itemStyle.color)，线条颜色默认也会取该颜色 |
| series-line.areaStyle | Object       | 区域填充样式。设置后显示成区域面积图                         |

### 3.柱形图(series-bar)

| 属性（series-bar）         | 类型（type） | 描述                                                         |
| -------------------------- | ------------ | ------------------------------------------------------------ |
| series-bar.backgroundStyle | Object       | 每一个柱条的背景样式。需要将 [showBackground](https://echarts.apache.org/zh/option.html#series-bar.showBackground) 设置为 `true` 时才有效 |
| series-bar.label           | Object       | 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等 |
| series-bar.itemStyle       | Object       | 图形样式。                                                   |
| series-bar.data.itemStyle  | Object       | 单个数据的图形样式设置。例：[{value:5,itemStyle:{color:"#009123"    }}, 20, 36, 10, 10, 20, 4] |
|                            |              |                                                              |

### 4.扇形图(series-pie)

| 属性（series-pie）        | 类型（type）        | 描述                                                         |
| ------------------------- | ------------------- | ------------------------------------------------------------ |
| series-pie.label          | Object              | 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。 |
| series-pie.labelLine      | Object              | 标签的视觉引导线配置。在 [label 位置](https://echarts.apache.org/zh/option.html#series-pie.label.position) position设置为`'outside'`的时候会显示视觉引导线。 |
| series-pie.itemStyle      | Object              | 图形样式。                                                   |
| eries-pie.emphasis        | Object              | 高亮状态的扇区和标签样式。eries-pie.emphasis.focus 在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：`'none'` 不淡出其它图形，默认使用该配置。 `'self'` 只聚焦（不淡出）当前高亮的数据的图形。 |
| eries-pie.center          | Array               | 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。 |
| eries-pie.radius          | number string Array | 饼图的半径。可以为如下类型：1.`number`：直接指定外半径值。2.`string`：例如，`'20%'`，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。3.`Array.<number|string>`：数组的第一项是内半径，第二项是外半径。每一项遵从上述 `number` `string` 的描述。 |
| series-bar.data.itemStyle | Object              | 单个数据的图形样式设置。例：data: [  {  value: 1048,  name: 'Search Engine',   itemStyle:{ borderColor:"rgba(12, 137, 100, 1)",   color:"rgba(242, 255, 0, 1)"} } |

### 5.散点图(series-scatter)

