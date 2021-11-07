//自定义插件  插件模块
import axios from "axios";
const MyHttpServer = {}
MyHttpServer.install = (Vue) => {
    //设置基础地址：
    axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
    Vue.prototype.$http = axios
}

export default MyHttpServer