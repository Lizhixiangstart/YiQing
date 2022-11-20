import VueRouter from "vue-router";
import Home from '../views/Home/Home.vue'
import AskDoctor from '../views/AskDoctor/AskDoctor.vue'
import Hesuan from '../views/Hesuan/Hesuan.vue'
import WuZi from '../views/WuZi/WuZi.vue'
import Area from '../views/Area/Area.vue'
export default  new VueRouter({
    routes:[
        {
            name:'Home',
            path:'/Home',
            component:Home
        },
        {   
            name:'AskDoctor',
            path:'/AskDoctor',
            component:AskDoctor
        },
        {
            name:'Heusan',
            path:'/Hesuan',
            component:Hesuan
        },
        {
            name:'WuZi',
            path:'/WuZi',
            component:WuZi
        },
        {
            name:'Area',
            path:'/Area',
            component:Area
        },
        //重定向，项目一运行就跳转到首页
        {
            path:'*',
            redirect:'/Home'
        }
    ]
})