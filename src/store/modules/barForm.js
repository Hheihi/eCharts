const barForm = {
    state: {
        barForm: {
            name: "",
            xAxis: {
                //x轴线条 颜色 粗细
                axisLine: {
                    lineStyle: {
                        color: "",
                        width: "1",
                    },
                },
                //x轴字体颜色字号
                axisLabel: {
                    color: "",
                    fontSize: "",
                },
                //  x轴数据
            },

            yAxis: {
                //y轴字体颜色 粗细
                axisLabel: {
                    color: "",
                    fontSize: "",
                },
            },
            series: [
                {
                    itemStyle: {
                        color: "",
                    }
                },
            ],
        }
    }
}

export default barForm