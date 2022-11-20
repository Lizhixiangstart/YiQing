<template>
  <div class="num">
    <div class="content">
        <div class="title">
            截止到{{1|time}}全国数据统计
        </div>
        <ul class="wrap">
            <li>
                <span>较昨日{{covData.currentConfirmedIncr | number}}</span>
                <div class="bold">{{covData.currentConfirmedCount | number}}</div>
                <strong>现存确诊</strong>
            </li>
            <li>
                <span>较昨日{{covData.suspectedIncr | number}}</span>
                <div class="bold">{{covData.suspectedCount}}</div>
                <strong>境外输入</strong>
            </li>
            <li>
                <span>较昨日-37</span>
                <div class="bold">{{covData.seriousCount}}</div>
                <strong>现存无症状</strong>
            </li>
            <li>
                <span>较昨日-37</span>
                <div class="bold">{{covData.confirmedCount}}</div>
                <strong>累计确诊</strong>
            </li>
            <li>
                <span>较昨日{{covData.deadIncr | number}}</span>
                <div class="bold">{{covData.deadCount}}</div>
                <strong>累计死亡</strong>
            </li>
            <li>
                <span>较昨日{{covData.currentConfirmedIncr | number}}</span>
                <div class="bold">{{covData.currentConfirmedCount}}</div>
                <strong>累计治愈</strong>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:'CovNumber',
    props:['covData'],
    //定义过滤器
    filters:{
        number(value){
           return value>0?"+"+value:"-"+value
        },
        time(){
             
            //   console.log( new Date(value).Format('yyyy-MM-dd hh:mm:ss'))
                let date= new Date();
              return  date.getFullYear()+"年"+(date.getMonth()+1)+'月'+date.getDate()+'日'+date.getHours()+'时'+date.getMinutes()+'分'+date.getSeconds();
        }
    }
}
</script>

<style lang="less" scoped>
.num{
    background: #f5f5f5;
    padding-top: 0.3rem;
    .content{
        background: #fff;
        padding: 0.2rem;
        border-radius: 0.2rem 0.2rem 0 0 ;
        .title{
            color: #666;
        }
        .wrap{
            display: flex;
            flex-wrap: wrap;
            border-radius: 0.1rem;
            box-shadow: 0 0 3px 2px rgba(175,172,172,20%);
            padding-top: 0.2rem;
            li{
                width: 33.333333%;
                text-align: center;
                margin-bottom: 0.2rem;
                color: #666;
                strong{
                    color: #333;
                }
            }
            .bold{
                font-weight: bold;
            }
            li:nth-child(1) .bold{
                color: red;
            }
            li:nth-child(2) .bold{
                color: green;
            }
            li:nth-child(3) .bold{
                color: orange;
            }
            li:nth-child(4) .bold{
                color: rgb(189, 19, 98);
            }
            li:nth-child(5) .bold{
                color: rgb(8, 110, 194);
            }
            li:nth-child(6) .bold{
                color: rgb(82, 223, 143);
            }
           
        }
    }
}
</style>