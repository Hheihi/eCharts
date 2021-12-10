/****   request.js   ****/
// 导入axios
import axios from 'axios'
// 使用element-ui Message做消息提醒
import { Message } from 'element-ui';
//1. 创建新的axios实例，
const service = axios.create({
    // 公共接口--这里注意后面会讲
    baseURL: '/index',
    // 超时时间 单位是ms，这里设置了3s的超时时间
    timeout: 3 * 1000
})
// 2.请求拦截器
service.interceptors.request.use(config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
        'Content-Type': 'application/json' //配置请求头
    }

    return config
}, error => {
    Promise.reject(error)
})

// 3.响应拦截器
service.interceptors.response.use(response => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等

    return response
}, error => {
    /***** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
        // 1.公共错误处理
        // 2.根据响应码具体处理
        getStatus(error.response.status)
    } else {
        // 超时处理
        if (JSON.stringify(error).includes('timeout')) {
            Message.error('服务器响应超时，请刷新当前页')
        }
        // error.message = '连接服务器失败'
    }

    Message.error(error.message)

    return Promise.resolve(error.response)
})

function getStatus({ status }) {
    const text = {
        400: '错误请求',
        401: '未授权，请重新登录',
        403: '拒绝访问',
        404: '请求错误,未找到该资源',
        405: '请求方法未允许',
        408: '请求超时',
        500: '服务器端出错',
        501: '网络未实现',
        502: '网络错误',
        503: '服务不可用',
        504: '网络超时',
        505: 'http版本不支持该请求'
    }
    return text[status]
}
export default service
