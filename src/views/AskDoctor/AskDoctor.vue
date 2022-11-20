<template>
  <div class="wrap">
    <div>
       <div class="title">常见科室</div>
        <dl class="content">
            <ul>
                <li><p>皮肤科</p></li>
                <li><p>儿科</p></li>
                <li><p>儿科</p></li>
            </ul>
            <ul>
                 <li><p>产科</p></li>
                <li><p>消化内科</p></li>
                <li><p>泌尿外科</p></li>

                
            </ul>
            <ul>
                <li><p>骨科</p></li>
                <li><p>耳鼻咽喉科</p></li>
                <li><p>口腔科</p></li>
            </ul>
        </dl>

       <div class="title">内科</div>
        <dl class="content">
            <ul>
                <li><p>普通内科</p></li>
                <li><p>呼吸内科</p></li>
                <li><p>感染科&nbsp;传染科</p></li>
            </ul>
            <ul>
                 <li><p>内分泌科</p></li>
                <li><p>心血管内科</p></li>
                <li><p>神经内科</p></li>

                
            </ul>
            <ul>
                <li><p>肾脏内科</p></li>
                <li><p>风湿免疫科</p></li>
                <li><p>血液科</p></li>
            </ul>
        </dl>

        <div class="title">外科</div>
        <dl class="content">
            <ul>
                <li><p>眼科</p></li>
                <li><p>性病科</p></li>
                <li><p>全科</p></li>
            </ul>
            <ul>
                 <li><p>精神心理科</p></li>
                <li><p>肿瘤科</p></li>
                <li><p>影像检验科</p></li>

                
            </ul>
            <ul>
                <li><p>疼痛科&nbsp;麻醉科</p></li>
                <li><p>药剂科</p></li>
                <li><p>疫苗科</p></li>
            </ul>
        </dl>

    </div>
  </div>
</template>

<script>
export default {
    name:'AskDoctor'
}
</script>

<style lang="less" scoped>

.wrap{
    padding: 16px;
    div{
        .title{
            font-size: 25px;
        }
        .content{
            ul{
                width: 100%;
                display: flex;
                align-content: center;
                align-items: center;
                li{
                    width: 33.3%;
                    height: 100px;
                    text-align: center;
                    background: rgba(247, 240, 240, 0.945);
                    margin:6px ;
                    font-size: 16px;
                    font-weight: bold;
                    p{
                        overflow: hidden;
                        width: 100%;
                        position: relative;
                        top: 35%;
                    }
                }
            }
        }
    }
}
</style>