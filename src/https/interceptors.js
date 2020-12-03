import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

// 默认域名
axios.defaults.baseURL = 'hanhan1__1586220819397';

// 请求拦截器
axios.interceptors.request.use((request) => {
    //http://open.duyiedu.com/api/meituan
    //appkey=hanhan1__1586220819397
    request.params = {
        ...request.params,
        appkey : 'hanhan1__1586220819397'
    }
    request.url = 'http://open.duyiedu.com/api/meituan' + request.url;
    return request;
})

axios.interceptors.response.use((response) => {
    console.log(response);
    return response.data.data
})

export default axios;