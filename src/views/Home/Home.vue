<template>
 <div class="home">
    <!-- 1.疫情图片 -->
    <img src="../../assets/images/1.jpg" alt="" class=topImg>
    <CovInfo ref="CovInfo" :news="news"/>
    
    <!-- 导航条 -->
    <div class="f4">
        <div class="content">
             <div class="item">
            <router-link to="/AskDoctor">
                <img src="../../assets/images/1.png" alt="">
                <p>问医生</p>
            </router-link>
         </div>
         <div class="item">
            <router-link to="/Hesuan">
                <img src="../../assets/images/2.png" alt="">
                <p>核酸监测</p>
            </router-link>
         </div>
         <div class="item">
            <router-link to="/WuZi">
                <img src="../../assets/images/3.png" alt="">
                <p>防疫物资</p>
            </router-link>
         </div>
         <div class="item">
            <router-link to="/Area">
                <img src="../../assets/images/4.png" alt="">
                <p>风险地区</p>
            </router-link>
         </div>
        </div>
        
    </div>
    
    <!-- 数据统计 -->
    <CovNumber :covData="covData" />
    
    <!-- 中国地图 -->
    <ChinaMap/>
    
 </div>
</template>

<script>
import CovInfo from '../Home/CovInfo/CovInfo.vue'
import CovNumber from '../Home/CovInfo/CovNumber.vue'
import ChinaMap from '../Home/VueEcharts/ChinaMap.vue'
import api from '../../api/index'
export default {
    name:'Home',
    data() {
        return {
            news:[],//新闻数据
            covData:{},//全国数据统计
        }
    },
    components:{
        CovInfo,
        CovNumber,
        ChinaMap,
    },
    created(){
        //请求病毒接口
        api.getCovInfo().then(
            res=>{
                console.log(res.data);
                //病毒介绍信息
                this.news = res.data.newslist[0].news;
                this.covData = {
                    confirmedCount:res.data.newslist[0].desc.confirmedCount,
                    confirmedIncr :res.data.newslist[0].desc.confirmedIncr,
                    createTime : res.data.newslist[0].desc.createTime,
                    curedCount : res.data.newslist[0].desc.curedCount,
                    curedIncr :res.data.newslist[0].desc.curedIncr,
                    currentConfirmedCount : res.data.newslist[0].desc.currentConfirmedCount,
                    currentConfirmedIncr : res.data.newslist[0].desc.currentConfirmedIncr,
                    deadCount : res.data.newslist[0].desc.deadCount,
                    deadIncr : res.data.newslist[0].desc.deadIncr,
                    highDangerCount : res.data.newslist[0].desc.highDangerCount,
                    seriousCount : res.data.newslist[0].desc.seriousCount,
                    seriousIncr : res.data.newslist[0].desc.seriousIncr,
                    suspectedCount : res.data.newslist[0].desc.suspectedCount,
                    suspectedIncr : res.data.newslist[0].desc.suspectedIncr,
                    yesterdayConfirmedCountIncr : res.data.newslist[0].desc.yesterdayConfirmedCountIncr,
                    yesterdaySuspectedCountIncr : res.data.newslist[0].desc.yesterdaySuspectedCountIncr,
                };
                /* 
                    confirmedCount:确诊人数
                    confirmedIncr:相比昨天累计确诊人数
                    curedCount:累计治愈人数
:                   curedIncr:相比昨天新增治愈人数
                    currentConfirmedCount:现存确诊人数
                    currentConfirmedIncr:相比昨天现存确诊人数
                    deadCount:累计死亡人数
                    deadIncr:相比昨天新增死亡人数

:

                
                */
            },
            error=>{
                console.log(error.message);
            }
        )
    }
}
</script>

<style lang="less" scoped>
.home{
    .topImg{
        width: 100%;
        height: 80%;
    }
    #CovInfo{

    }
    .f4{
        background: #f5f5f5;
        padding-top: 0.3rem;
        .content{
            background: #fff;
            height:2rem ;
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-content: center;
        .item{
            padding-top: 0.3rem;
            padding-left: 0.35rem;
            width: 25%; 
           a{
            img{
                width: 1rem;
            }
            p{
                
            }
           }
        }
        }
    }
    
}

</style>