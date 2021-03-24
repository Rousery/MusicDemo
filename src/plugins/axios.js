import axios from 'axios'

axios.defaults.withCredentials = true               /* 允许跨域设置，不然可能因为拿不到cookie而报错 */
axios.defaults.baseURL = 'http://localhost:3000/'   /*这里的地址就是刚刚启起来的服务器地址  */

/* 响应拦截 */
axios.interceptors.response.use(
    res => {
        res = res.data;
        return res
    }, err => {
        return Promise.reject(err)
    }
)
export default axios  /*记得导出*/
