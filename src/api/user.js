/**
 * 用户相关请求模块
 */

import request from '@/utils/request'

/**
 * 登录注册
 */

const login = (data)=>{
    return request({
        method:'POST',
        url:'/user/zuiyou/login',
        data
    })
}
export default login

