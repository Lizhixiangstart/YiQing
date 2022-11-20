/* 
    所有的请求接口的方法
*/
//引入axios
import axios  from "axios";
//引入接口数据
import base from './base'
//所有的请求方法
const api = {
    /* 
        病毒信息获取
    */
   getCovInfo(){
    return axios.get(base.host+base.CovInfo);
   },
   /* 

   */
}

export default api