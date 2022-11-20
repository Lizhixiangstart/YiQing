<template>
  <div>
    <div class="top">
        <i></i>
        <div class="title">国内疫情地图</div>
         <!-- 地图容器 -->
        <!-- 为Echarts准备一个定义了高和宽的 DOM -->
        <!-- <van-tabs  animated @change='change'>
            <van-tab title="现存确诊">
                <div id="nowMain" style="width: 7.5rem; height: 7rem"></div>
                <div id="main"></div>
            </van-tab>
            <van-tab title="累计确诊">
                <div id="main" style="width: 7.5rem; height: 7rem"></div>
                
            </van-tab>
        </van-tabs> -->
    </div>
   <div id="main"></div>
    
  </div>
</template>

<script>
//1.安装echarts 2.导入
// import echarts from 'echarts'

export default {
    name:'ChinaMap',
    methods:{
    //     getBar(){
    //        /*  // 基于准备好的dom，初始化echarts实例
    //   var myChart = this.$echarts.init(document.getElementById('main'));

    //   // 指定图表的配置项和数据
    //   var option = {
    //     title: {
    //       text: 'ECharts 入门示例'
    //     },
    //     tooltip: {},
    //     legend: {
    //       data: ['销量']
    //     },
    //     xAxis: {
    //       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //     },
    //     yAxis: {},
    //     series: [
    //       {
    //         name: '销量',
    //         type: 'line',
    //         data: [5, 20, 36, 10, 10, 20]
    //       }
    //     ]
    //   };

    //   // 使用刚指定的配置项和数据显示图表。
    //   myChart.setOption(option); */
    //     },
    //     change(title){
    //        if(title === 1){
    //          this.$nextTick(()=>{
    //             this.$myChart.chinaMap("main");
    //         })
    //        }
    //     },
    },
    //echarts实例-创建地图
    mounted(){
    //    this.getBar();
    this.$myChart.chinaMap('main');
       
    },
}
</script>

<style lang="less" scoped>
div{
    .top{
        display: flex;
        padding-left: 0.2rem;
        line-height: 0.35rem;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        
        i{
            display: flex;
            justify-content: start;
            width: 0.1rem;
            background: blue;
            margin-right: 0.1rem;
        }
        .title{
            font-size: 0.3rem;
        }
    }
     #main{
            width: 7rem;
            height: 8rem;
            background: #f5f5f5;
            padding-left: 0.3rem;
        }
    
}
</style>