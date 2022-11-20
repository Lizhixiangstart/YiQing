<template>
   <div class="info">     
      <div class="title">
        <i></i>
        <img src="../../../assets/images/hot.png" alt="">
        <p>
            <span>
                <a  @click="checkOut" href="javascript:;">查看更多></a>
            </span>
        </p>
      </div>
      <div class="news">
        <div v-for="n in news" :key="n.id" class="new">
            <div class="button">最新</div>
            <div class="newTitle">{{n.title}}</div>
            <div><img src="../../../assets/images/right.png" alt=""></div>
        </div>
        
      </div>
      
   </div>
</template>

<script>
export default {
    name:'CovInfo',
    props:{
        news:{
            type:Array,
            default:function(){
                return [];
            }
        }
    },
    methods:{
        checkOut(e){
            e.preventDefault();
            
        },
    }
}
</script>

<style lang="less" scoped>
.info{
   .title{
    height: 20px;
    background: #fff;
    display: flex;
    align-content: center;
    align-items: center;
    padding: 5px 16px 0 16px;
      i{
        width: 4px;
        height: 16px;
        background: blue;
        margin-right: 5px;
      }
      img{
        width: 70px;
        height: 24px;
      }
     p{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        span{
            display: flex;
            justify-content: flex-end;
            width: 100%;
        a{
            font-size: 16px;
            text-decoration: none;
            color: blue;
        }   
      }
     }
   }   
   .news{
    padding: 0 16px;
    margin-top: 15px;
    .new{
        display: flex;
        align-content: center;
        align-items: center;
        margin: 20px  0;
        .button{
            width: 10rem;
            background: orangered;
            color: #fff;
            margin-right: 5px;
            padding-right: 5px;
        }
        .newTitle{
            display: flex;
            justify-content: start;
            width: 80rem;
        }
        div{
            display: flex;
            justify-content: flex-end;
            img{
                width: 13px;
            }
        }
    }
    
   }  
}

</style>