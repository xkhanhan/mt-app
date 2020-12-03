//所有的请求接口
import axios from 'axios';

const api = {
    search(params){
        return axios.get('/header/search.json',params);
    },
    searchHotWords(params){
        return axios.get('/header/searchHotWords.json',params);
    },
    nav(params){
        return axios.get('/index/nav.json', params);
    },
    cityList(params){
        return axios.get('/city/cityList.json',params);
    },
    hot(params){
        return axios.get('city/hot.json', params)
    },
    province(params){
        return axios.get('/city/province.json', params)
    },
    recents(params){
        return axios.get('/city/recents.json', params)
    }
}

export default api;