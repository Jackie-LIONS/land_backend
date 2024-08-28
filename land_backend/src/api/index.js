import axios from "../utils/request.js";
import base from "./base.js";


axios.defaults.headers.post['Content-Type'] = 'application/json';
const api = {
    postLogin(params) {
        return axios.post('/api' + base.getLogin, params)
    },
    getCaptcha(params){
        return axios.get('/api'+base.getCaptcha,{
            params
        })
    },
    postAdminAdd(params){
        return axios.post('/api'+base.getAdminAdd,params)
    },
    postAdminUpdate(params){
        return axios.post('/api'+base.getAdminUpdate,params)
    },
    getAdminAll(params){
        return axios.get('/api'+base.getAdminAll,{params})
    },
    postAdminDelete(params){
        return axios.post('/api'+base.getAdminDelete+params)
    },
    getAdminUsername(params){
        return axios.get('/api'+base.getAdminUsername,{params})
    },
    postLandTypeAdd(params){
        return axios.post('/api'+base.getLandTypeAdd,params)
    },
    postLandTypeUpdate(params){
        return axios.post('/api'+base.getLandTypeUpdate,params)
    },
    getLandTypeAll(params){
        return axios.get('/api'+base.getLandTypeAll,{params})
    },
    postLandTypeDelete(params){
        return axios.post('/api'+base.getLandTypeDelete+params)
    },
    getLandTypeList(params){
        return axios.get('/api'+base.getLandTypeList,{params})
    },
    getLandType(params){
        return axios.get('/api'+base.getLandType,{params})
    },
    postLandAdd(params){
        return axios.post('/api'+base.getLandAdd,params)
    },
    postLandUpdate(params){
        return axios.post('/api'+base.getLandUpdate,params)
    },
    getLandAll(params){
        return axios.get('/api'+base.getLandAll,{params})
    },
    postLandDelete(params){
        return axios.post('/api'+base.getLandDelete+params)
    },
}

export default api; 