/* 
    开发成vue插件使用echarts
*/
import echarts from 'echarts'
//导图地图的js文件
import 'echarts/map/js/china'

const install = function (Vue, options) {
    //添加实例方法
    /* Vue.prototype.demo = function(){

    } */

    Object.defineProperties(Vue.prototype, {
        $myChart: {
            get() {
                return {
                    //1.绘制一个折线图
                    line(id) {
                        // 基于准备好的dom，初始化echarts实例
                        var myChart = echarts.init(document.getElementById(id));

                        // 指定图表的配置项和数据
                        var option = {
                            title: {
                                text: 'ECharts 入门示例'
                            },
                            tooltip: {},
                            legend: {
                                data: ['销量']
                            },
                            xAxis: {
                                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                            },
                            yAxis: {},
                            series: [
                                {
                                    name: '销量',
                                    type: 'line',
                                    data: [5, 20, 36, 10, 10, 20]
                                }
                            ]
                        };

                        // 使用刚指定的配置项和数据显示图表。
                        myChart.setOption(option);
                    },
                    //2. 中国地图
                    chinaMap(id) {
                        var myChart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: { //悬浮弹框
                                triggerOn: 'click', //提示框触发的条件
                                enterable: true,//鼠标是否可进入提示框浮层中，默认为false
                                formatter(item) {//item=下面serves里面的data里面的每一项 //[{} ] data={} a b c d 
                                    return item.name
                                }
                            },
                            visualMap: [{ //映射高亮颜色
                                orient: "horizontal", //水平的
                                type: "piecewise", //离散
                                bottom: 0,
                                textGap: 4,
                                itemGap: 4,
                                itemWidth: 10,
                                itemHeight: 10,
                                padding: 2,
                                textStyle: {
                                    fontSize: 9,
                                },
                                pieces: [ // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 9,
                                        color: "#FAEBD2"
                                    },
                                    {
                                        min: 10,
                                        max: 99,
                                        color: "#E9A188"
                                    },
                                    {
                                        min: 100,
                                        max: 499,
                                        color: "#D56355"
                                    },
                                    {
                                        min: 500,
                                        max: 999,
                                        color: "#BB3937"
                                    },
                                    {
                                        min: 1000,
                                        max: 10000,
                                        color: "#772526"
                                    },
                                    {
                                        min: 10000,
                                        color: "#480F10"
                                    }
                                ]
                            }],
                            series: [{
                                name: "省",
                                type: "map", //地图  bar  line  map 
                                map: "china", //中国地图 需要引入地图china.js 
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%', '5%'],
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                // data
                                data: [
                                    { name: '台湾', value: 8119141 },
                                    { name: '香港', value: 342448 },
                                    {name:'广东',value:8894},
                                    {name:'河南',value:2312},
                                    {name:'重庆',value:1731},
                                    {name:'北京',value:1438},
                                    {name:'内蒙古',value:1146},
                                    {name:'山西',value:1052},
                                    {name:'四川',value:917},
                                    {name:'新疆',value:549},
                                    {name:'云南',value:480},
                                    {name:'陕西',value:423},
                                    {name:'福建',value:308},
                                    {name:'浙江',value:180},
                                    {name:'江苏',value:173},
                                    {name:'湖南',value:160},
                                    {name:'黑龙江',value:134},
                                    {name:'山东',value:134},
                                    {name:'甘肃',value:93},
                                    {name:'天津',value:90},
                                    {name:'贵州',value:90},
                                    {name:'青海',value:54},
                                    {name:'上海',value:53},
                                    {name:'辽宁',value:47},
                                    {name:'海南',value:42},
                                    {name:'西藏',value:31},
                                    {name:'湖北',value:27},
                                    {name:'河北',value:23},
                                    {name:'安徽',value:23},
                                    {name:'吉林',value:19},
                                    {name:'广西',value:9},
                                    {name:'江西',value:6},
                                    {name:'澳门',value:0},
                                    {name:'宁夏',value:0},
                                    
                                ]
                            }]
                        }
                        myChart.setOption(option);
                    },
                }
            }
        }
    })
}

export default install