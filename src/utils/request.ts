import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:9999',
    timeout: 5000,
})

// 请求拦截器
instance.interceptors.request.use((config:any) => {
    config.headers['auth'] = 'getToken' // 设置请求头
    
    return config
},
    error => {
        return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use((response:any) => {
    return response.data
},
    error => {
        return Promise.reject(error)
})

export function get(url:string) {
    return instance.get(url)
}
